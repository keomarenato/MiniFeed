import styles from './Avatar.module.css'

export const Avatar = ({ src, hasBorder = true }) => {
  return (
    <img src={src} className={hasBorder ? styles.avatarWithBorder : styles.avatar} />
  )
}
