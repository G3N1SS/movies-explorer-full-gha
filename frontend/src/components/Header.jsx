import { useState } from "react"
import logo from '../images/logo.svg'
import account from '../images/account.svg'
import { Link, useLocation } from 'react-router-dom';

export default function Header({black, loggedIn}){
  const [isVisible, setIsVisible] = useState(false)
  const location = useLocation()

  function hamburgerClick(){
    if(isVisible){
      setIsVisible(false)
    }else{
      setIsVisible(true)
    }
  }
  return(
    <>
      <header className={`header ${black ? 'header_black': ''}`}>
        <div className="container container_header">
          <Link to="/"><img className="header__logo" src={logo} alt="logo"/></Link>
          {loggedIn ? 
          <>
            <div className="header__films">
              <Link to="/movies" className={`header__button ${location.pathname === '/movies' ? 'header__button_active' : ''} header__button_type_films button`}>Фильмы</Link>
              <Link to="/saved-movies"className={`header__button ${location.pathname === '/saved-movies' ? 'header__button_active' : ''} header__button_type_saved-films button`}>Сохраненные фильмы</Link>
            </div>
          </>
          :
          <></>}
          <div className="header__button-container">
            {loggedIn ? 
              <>
              <Link to="/profile" className="header__button header__button_type_account account button">
                <p className={`header__account account__caption ${black ? 'account__caption_black' : ''}`}>Аккаунт</p>
                <img className={`header__account-pic account__pic ${black ? 'account__pic_black' : ''}`} src={account} alt="account"/>
              </Link>
              <div className={`header__hamburger hamburger ${isVisible ? 'hamburger_active' : ''}`} onClick={hamburgerClick}>
                <hr className={`hamburger__line ${isVisible ? 'hamburger__line_cross' : ''}`} />
                {isVisible ? '' : <hr className="hamburger__line" />}
                <hr className={`hamburger__line ${isVisible ? 'hamburger__line_cross' : ''}`} />
              </div>
              </>
              : 
              <>
                <Link className="header__button header__button_type_signup button" to="/signup">Регистрирация</Link>
                <Link className="header__button header__button-type_signin button" to="/signin">Войти</Link>
              </>}
          </div>
        </div>
        <nav className={`hamburger-menu ${isVisible ? 'hamburger-menu_visible' : ''}`}>
          <div className="hamburger-menu__links">
            <Link to="/" className={`hamburger-menu__link ${location.pathname === '/' ? 'hamburger-menu__link_active' : ''}`} onClick={hamburgerClick}>Главная</Link>
            <Link to="/movies" className={`hamburger-menu__link ${location.pathname === '/movies' ? 'hamburger-menu__link_active' : ''}`} onClick={hamburgerClick}>Фильмы</Link>
            <Link to="/saved-movies"className={`hamburger-menu__link ${location.pathname === '/saved-movies' ? 'hamburger-menu__link_active' : ''}`} onClick={hamburgerClick}>Сохраненные фильмы</Link>
          </div>
          <Link to="/profile" className="hamburger-menu__account-button account" onClick={hamburgerClick}>
            <p className='hamburger-menu__account account__caption account__caption_black'>Аккаунт</p>
            <img className='hamburger-menu__account-pic account__pic account__pic_black' src={account} alt="account"/>
          </Link>
        </nav>
      </header>
    </>
  )
}