import studentimg from "../images/picture.jpg"
import arrow from "../images/arrow.svg"
import { Link } from "react-router-dom"

function Student(){
  return(
    <section className="student">
      <div className="container container_student">
        <h2 className="student__title">Студент</h2>
        <div className="underline student__underline"></div>
        <div className="student__info">
          <div className="student__info-about">
            <h2 className="student__name">Арег</h2>
            <p className="student__profession">Фронтенд-разработчик, 18 лет</p>
            <p className="student__about">Учусь в Тульском государственном университе на факультете программной-инженерии (разработка веб и мобильныйх приложений). Увлекаюсь баскетболом и боксом. Кодить начал из за интереса к технологиям в целом, поэтому захотелось создавать нечто свое. Сейчас же совершенствуюсь с каждым днем. Читаю, как и связанные с программированием, так и развивающие личность книги. Всегда рад новым знакомвствам!</p>
            <a href="https://github.com/G3N1SS" className="student__github link">Github</a>
          </div>
          <img src={studentimg} alt="studentImage" className="student__info-img" />
        </div>
        <div className="student__portfolio">
          <h3 className="student__portfolio-title">Портфолио</h3>
          <ul className="student__portfolio-links">
            <li className="student__portfolio-link">
              <Link to="/static" className="student__portfolio-link-text link">Статичные сайты</Link>
              <Link to="/static"  className="student__portfolio-link-icon"><img src={arrow} alt="Ссылка"/></Link>
            </li>
            <li className="student__portfolio-link">
              <Link to='/adaptive' className="student__portfolio-link-text link">Адаптивные сайты</Link>
              <Link to='/adaptive' className="student__portfolio-link-icon"><img src={arrow} alt="Ссылка"/></Link>
            </li>
            <li className="student__portfolio-link">
              <Link to='/multipage' className="student__portfolio-link-text link">Многостратичные и функциональные сайты</Link>
              <Link to='/multipage' className="student__portfolio-link-icon"><img src={arrow} alt="Ссылка"/></Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Student