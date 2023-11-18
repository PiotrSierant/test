import { useState, useEffect } from 'react';
import styles from './ComponentSwitchTheme.module.scss'
export const ThemeSwitchButton = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    let value;
    value = localStorage.getItem("theme") || "light";
    document.body.setAttribute('data-theme', value);
    setTheme(value)
  }, [])

  const handleThemeSwitch = () => {
    if (theme === 'light') {
      setTheme('dark');
      localStorage.setItem("theme", 'dark')
      document.body.setAttribute('data-theme', 'dark');
    } else {
      setTheme('light');
      localStorage.setItem("theme", 'light')
      document.body.setAttribute('data-theme', 'light');
    }
  }

  return (
    <label className={styles.ui_switch}>
      <input type="checkbox" onClick={handleThemeSwitch} />
      <div className={styles.slider}>
        <div className={styles.circle}></div>
      </div>
    </label>
  );
}
