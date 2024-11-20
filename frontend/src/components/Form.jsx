import { useContext, useEffect, createContext } from "react"
import { useLocation, Link } from "react-router-dom"
import CurrentUserContext from "../contexts/CurrentUserContext"
import SendContext from "../contexts/SendContext"
import ErrorContext from "../contexts/ErrorContext"
import Preloader from "./Preloader/Preloader"


export default  function Form({name, titleButton, children, onSubmit, setIsError, values, isSuccess, setIsSuccess, setIsEdit, isEdit, isValid, logOut}){
  const location = useLocation()
  const isError = useContext(ErrorContext)
  const isSend = useContext(SendContext)
  const currentUser = useContext(CurrentUserContext)

  useEffect(() => {
    setIsError(false)
  }, [setIsError, values])

  useEffect(() => {
    if(location.pathname === '/profile'){
      setIsSuccess(false)
      setIsEdit(false)
    }
  }, [setIsSuccess, setIsEdit, location.pathname])
  return(
    <form onSubmit={onSubmit} className="form">
      <div className={`form__elements-container ${name === 'sign-up' ? 'form__elements-container_registration' : ''}`}>
      {children}
      </div>
      {name === 'signin' ? 
      <>
      <span className={`login__error login__error_button ${isError ? 'error' : ''}`}>{isError ? 'При входе произошла ошибка.' : ''}</span>
      <button 
        className={`login__submit ${isValid && !isError ? '' : 'login__sumbit_disabled'}`}
        type="submit"
        disabled={!isValid || isSend || isError}>
        {isSend ? <Preloader name={'button'}/> : titleButton}
      </button>
      </>
      :
      name === 'signup' ? 
      <>
      <span className={`login__error login__error_button ${isError ? 'error' : ''}`}>{isError ? 'При регистрации произошла ошибка.' : ''}</span>
      <button 
        className={`login__submit ${isValid && !isError ? '' : 'login__sumbit_disabled'}`}
        type="submit"
        disabled={!isValid || isSend || isError}
        >
        {isSend ? <Preloader name={'button'}/> : titleButton}
      </button>
      </>
      :
      <>
      {isEdit ? 
      <>
      
        <button className={`profile__submit ${(values.username === currentUser.name && values.email === currentUser.email) || !isValid || isError ? 'profile__submit_disabled' : ''}`} type="submit" disabled={(values.username === currentUser.name && values.email === currentUser.email) || !isValid || isError || isSend}>
          {isSend ? <Preloader name={'button'}/> : ''}{titleButton}
        </button>
      </>
      : <>
      <span className={`profile__error error ${isError ? 'error' : isSuccess && 'profile__error_success'}`}>{isError ? 'При обновлении профиля произошла ошибка.' : 'Успешно'}</span>
        <button className="profile__edit" type="button" onClick={() => setIsEdit(true)}>Редактировать</button>
        <Link to="/" className="profile__exit" onClick={logOut}>Выйти из аккаунта</Link>
      </> }
      </>
    }
    </form>
  )
} 