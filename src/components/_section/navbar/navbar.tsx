import { useRef, useCallback, useState, useEffect } from "react";
import { isMobile } from "react-device-detect";
import { useScrollPosition } from "react-use-scroll-position";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import Image from "next/image";
import classNames from "classnames";
import styles from './navbar.module.scss';
import { logoData, socials, menu } from './menu';
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { ThemeSwitchButton } from "../../_basic/switch-theme/ComponentSwitchTcheme";
import { useDeviceSize } from "../../../hooks/useDeviceSize";
import { ComponentBadge } from "../../_basic/badge/ComponentBadge";

export const Navbar = () => {
  const [menuOpened, setMenuOpened] = useState<boolean>(false);
  const [shouldShrink, setShouldShrink] = useState<boolean>(false);
  const [SubMenuItemClick, setSubMenuItemClick] = useState<boolean>(true);
  const [width, height] = useDeviceSize();
  const [currentUrl, setCurrentUrl] = useState<string>("/");
  const menuButtonRef = useRef<HTMLInputElement | null>(null);
  const position = useScrollPosition();
  useEffect(() => {
    const currentUrl = window.location.href;
    const domain = "https://zdrowy-sukces.pl";
    const local = "http://localhost:3000";

    if (currentUrl.includes(domain)) {
      const relativePath = currentUrl.replace(domain, "");
      if (relativePath.includes('/sklep/')) {
        setCurrentUrl('/sklep');
        return
      }
      if (relativePath.includes('/blog/')) {
        setCurrentUrl('/blog');
        return
      }
      setCurrentUrl(relativePath);
    }
  }, [])
  useEffect(() => {
    const shrink = position.y > 100 || menuOpened;
    if (shrink != shouldShrink) {
      setShouldShrink(prev => !prev);
    }
  }, [menuOpened, position, shouldShrink])

  const onMenuItemClick = useCallback((evt: any, preventOpening = false, href?: string) => {
    if (href) {
      setCurrentUrl(href);
      menuButtonRef.current?.click();
      return
    }
    if (!isMobile) {
      return;
    }
    if (!preventOpening || menuOpened) {
      menuButtonRef.current?.click();
      setMenuOpened(!menuOpened);
    }
  }, [menuOpened]
  );

  const onSubMenuItemClick = useCallback(() => {
    setSubMenuItemClick(!SubMenuItemClick);
  }, [SubMenuItemClick])

  useEffect(() => {
    if (width > 890 && menuOpened) {
      menuButtonRef.current?.click();
      setSubMenuItemClick(true);
    }
  }, [width, menuOpened])

  return (
    <header>
      <nav className={classNames(styles.header, shouldShrink && styles.shrink, menuOpened && styles.withoutBoxShadow)}>
        <section className={styles.wrapper}>
          <section onClick={(evt) => onMenuItemClick(evt, true)} className={styles.logo}>
            <Link
              href={logoData.href}
              aria-label={logoData.ariaLabel}
              rel="noreferrer noopener"
            >
              <Image src={logoData.icon} alt={logoData.altIcon} width={75} height={75} priority quality={100} />
            </Link>
          </section>
          <input
            onClick={() => { setMenuOpened(!menuOpened) }}
            ref={menuButtonRef}
            className={styles.menuBtn}
            type="checkbox"
            id="menuBtn"
          />
          <label className={styles.menuIcon} htmlFor="menuBtn">
            <span className={styles.navicon}></span>
          </label>


          <ul className={styles.menu}>
            <ul className={styles.topControls}>
              {socials.map(element => {
                const { id, href, ariaLabel, icon } = element;
                return (
                  <li className={classNames(styles.menuItem, styles.social)} key={id}>
                    <Link
                      href={href}
                      aria-label={ariaLabel}
                      className={styles.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon width={15} height={15} icon={icon} />
                    </Link>
                  </li>
                )
              })}
              <li className={classNames(styles.menuItem, styles.social)}>
                <ThemeSwitchButton />
              </li>
            </ul>
            <hr />
            <ul className={styles.bottomControls}>
              {menu.map(element => {
                const { id, title, href, ariaLabel, subMenu, icon } = element;
                const isActive = currentUrl === href;
                if (subMenu.length > 0) {
                  return (
                    <li id={title} onClick={onSubMenuItemClick} className={classNames(styles.menuItem, styles.subMenuHover)} key={id}>
                      <div
                        aria-label={ariaLabel}
                        className={styles.link}
                      >
                        <p className={styles.link_content}>
                          {width < 890 && <Image src={icon} width={25} height={25} alt={title} quality={100} />}
                          {title}
                          <FontAwesomeIcon icon={faChevronDown} width={15} height={15} className={classNames(styles.icon, !SubMenuItemClick && styles.subIcon)} />
                        </p>
                        <ul className={classNames(styles.dropMenu, SubMenuItemClick && styles.hide)}>
                          {subMenu.map(element => {
                            const { id, title, href, ariaLabel, icon, isNew } = element;
                            const isActive = currentUrl === href;
                            return (
                              <li key={id} className={classNames(isActive && styles.activeLink, styles.menuSubItem)}>
                                {/* style={isNew ? { pointerEvents: "none" } : { pointerEvents: "auto" }} */}
                                <Link
                                  href={href}
                                  aria-label={ariaLabel}
                                  className={styles.link}
                                  rel="noreferrer noopener"
                                  onClick={(evt) => onMenuItemClick(evt, false, href)}
                                >
                                  <p>
                                    {width < 890 && <FontAwesomeIcon icon={icon} width={15} height={15} />}
                                    {title}
                                    {isNew && <ComponentBadge variant={'primary'} text={"Nowość"} />}
                                  </p>
                                </Link>
                              </li>
                            )
                          })}
                        </ul>
                      </div>
                    </li>
                  )
                }
                return (
                  <li id={title} onClick={subMenu.length > 0 ? onSubMenuItemClick : (evt) => onMenuItemClick(evt, false, href)} className={classNames(styles.menuItem, isActive && styles.activeLink)} key={id}>
                    <Link
                      href={href}
                      aria-label={ariaLabel}
                      className={styles.link}
                      rel="noreferrer noopener"
                    >
                      <p className={styles.link_content}>
                        {width < 890 && <Image src={icon} width={25} height={25} alt={title} quality={100} />}
                        {title}
                      </p>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </ul>
        </section>
      </nav>
    </header>
  );
};