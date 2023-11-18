import classnames from 'classnames'
import styles from './ComponentLoader.module.scss'
export const ComponentLoaderText = () => {
    return (
        <div className={classnames(styles.loading, styles.loadingAnimate)}>
            <span data-text="Ł">Ł</span>
            <span data-text="A">A</span>
            <span data-text="D">D</span>
            <span data-text="O">O</span>
            <span data-text="W">W</span>
            <span data-text="A">A</span>
            <span data-text="N">N</span>
            <span data-text="I">I</span>
            <span data-text="E">E</span>
        </div>
    )
}