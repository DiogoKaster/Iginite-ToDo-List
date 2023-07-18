import rocketLogo from '../assets/rocket.svg'
import './Header.module.css'

export function Header() {
  return (
    <header>
      <img src={rocketLogo} alt="" />
      <span>
        to<span>do</span>
      </span>
    </header>
  )
}
