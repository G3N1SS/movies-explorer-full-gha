import { useContext } from "react"
import SendContext from "../contexts/SendContext"
import { useLocation } from "react-router-dom"

export default function Input({name, isInputValid, error, placeholder, value, onChange, type, pattern, disabled}){
  const isSend = useContext(SendContext)
  const location = useLocation()
  
  return(
    <>
    {location.pathname === '/signin' &&
      <>
        <p className="login__input-name">{name === 'email' ? 'E-mail' : name === 'password' ? "Пароль" : 'Имя'}</p>
        <input 
          type={type}
          className={`login__input ${isInputValid === undefined || isInputValid ? '' : 'login__input_invalid'}`}
          required
          maxLength={30}
          minLength={2}
          placeholder={placeholder}
          value={value || ''}
          onChange={onChange}
          disabled={isSend}
          pattern={pattern}
          name={name}
        />
        <span className="login__error error">{error}</span>
      </>}
      {location.pathname === '/signup' &&
      <>
        <p className="login__input-name">{name === 'email' ? 'E-mail' : name === 'password' ? "Пароль" : 'Имя'}</p>
        <input 
          type={type}
          className={`login__input ${isInputValid === undefined || isInputValid ? '' : 'login__input_invalid'}`}
          required
          maxLength={30}
          minLength={2}
          placeholder={placeholder}
          value={value || ''}
          onChange={onChange}
          disabled={isSend}
          pattern={pattern}
          name={name}
        />
        <span className="login__error error">{error}</span>
      </>}
      {location.pathname === '/profile' &&
      <>
        <input 
          type={type}
          className={`profile__input ${isInputValid === undefined || isInputValid ? '' : 'profile__input_invalid'}`}
          required
          maxLength={30}
          minLength={2}
          placeholder={placeholder}
          value={value || ''}
          onChange={onChange}
          disabled={isSend || disabled}
          pattern={pattern}
          name={name}
        />
        <span className="profile__error error">{error}</span>
      </>
      }
      {location.pathname === '/movies' && 
      <>
      <input 
          name={name}
          value={value || ''}
          type={type} 
          className='search-bar__input'
          placeholder="Фильм"
          required
          pattern={pattern}
          onChange={onChange}
        />
      </>
      }
      {location.pathname === '/saved-movies' && 
      <>
      <input 
          name={name}
          value={value || ''}
          type={type} 
          className='search-bar__input'
          placeholder="Фильм"
          required
          pattern={pattern}
          onChange={onChange}
        />
      </>
      }
    </>
  )
}

      // name === 'search-bar' ?
      // <>
      //   <input 
      //     type={type} 
      //     className='search-bar__input'
      //     placeholder="Фильм"
      //     required
      //     pattern={pattern}
      //   />
      // </>
      // :