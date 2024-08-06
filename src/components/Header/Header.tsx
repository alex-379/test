import './Header.scss'
import logo from './assets/Logo.png'

export const Header = () => {
  return (
      <header className="flex">
        <img className='logotype' src={logo} alt="NFT MarketPlace" />
          <button type="button" className="icon-btn burger-menu mobile-only">
              <img src="./assets/burger.svg" alt="Menu" />
          </button>
      </header>
  )
}
