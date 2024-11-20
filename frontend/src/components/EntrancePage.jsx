import { Link } from 'react-router-dom';
import Form from './Form';
import logo from '../images/logo.svg'

export default function EntrancePage({name, children, isValid, onSubmit, setIsError}){
  return(
    <main>
    <section className="login">
      <div className="container container_login">
        <Link to={'/'} className='login__logo'><img src={logo} alt="logo"/></Link>
        <h2 className="login__title">{name === 'signup' ? 'Добро пожаловать!' :  'Рады видеть!'}</h2>
        <Form
          name={name}
          titleButton={name === 'signup' ? 'Зарегистрироваться' :  'Войти'}
          isValid={isValid}
          setIsError={setIsError}
          onSubmit={onSubmit}
        >{children}</Form>
        {name === 'signup' ? 
        <div className='login__caption'>
          <p className="login__caption-text">Уже зарегистрированы?</p>
          <Link className="login__link link link_login" to="/signin">Войти</Link> 
        </div>
        : 
        <div className='login__caption'>
          <p className="login__caption-text">Ещё не зарегистрированы?</p>
          <Link className="login__link link link_login" to="/signup">Регистрация</Link> 
        </div> }
      </div>
    </section>
    </main>
  )
}