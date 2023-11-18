import styles from './ComponentBadge.module.scss';
import classnames from 'classnames';
export const ComponentBadge = ({ variant, text }: { variant: string, text: string; }) => {
    const variantClass = styles[variant];
    return (
        <button className={classnames(styles.badge, variantClass)}>{text}</button>
    )
}