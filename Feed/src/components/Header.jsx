import styles from './Header.module.css'
import igniteLogo from '../assets/ignite-logo.svg'


export const Header = () => {
  return (
    <strong className={styles.header}>
      <img src={igniteLogo} alt='Logo' />
    </strong>
  )
}
