import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./ComponentOpinionModal.module.scss";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState, useRef } from "react";

interface TypeModalOpinion {
    author: string;
    stars: number[];
    opinion: string;
    key_op: string;
}
export const ComponentOpinionModal = ({ author, stars, opinion, key_op }: TypeModalOpinion) => {
    const [openModal, setOpenModal] = useState<boolean>(false);
    const targetElement = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleKeyDown = (event: { key: string }) => {
            if (event.key === 'Escape') {
                const modalOpen = document.getElementById(key_op) as HTMLInputElement | null;
                if (modalOpen !== null && modalOpen.checked === true) {
                    modalOpen.checked = false;
                    const body = document.querySelector('body')
                    if (body) {
                        document.body.style.overflow = '';
                    }
                }
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [key_op]);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const modalOpen = document.getElementById(key_op) as HTMLInputElement | null;
            if (modalOpen && openModal) {
                const body = document.querySelector('body')
                if (body) {
                    document.body.style.overflow = 'clip';
                }
            } else {
                const body = document.querySelector('body')
                if (body) {
                    document.body.style.overflow = '';
                }
            }
        }
    }, [key_op, openModal])

    return (
        <div className={styles.section}>
            <input className={styles["modal-btn"]} type="checkbox" id={key_op} name="modal-btn" onChange={() => setOpenModal(!openModal)} />
            <label htmlFor={key_op}>Czytaj więcej</label>
            <div ref={targetElement} id="modal_opinion" className={styles.modal}>
                <div ref={targetElement} className={styles["modal-wrap"]}>
                    <section className={styles.modalHeader}>
                        <h4>{author}</h4>
                    </section>
                    <section className={styles.stars}>
                        {stars.map((_: any, index: React.Key | null | undefined) => (
                            <FontAwesomeIcon key={index} icon={faStar} width={10} height={10} />
                        ))}
                    </section>
                    <article className={styles.description}>
                        {opinion}
                    </article>
                </div>
            </div>
        </div>
    )
}