import rocketLogo from '../assets/rocket.svg'
import styles from './Header.module.css'

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <img src={rocketLogo} alt="" />
      <span>
        to<span>do</span>
      </span>
    </header>
  )
}
