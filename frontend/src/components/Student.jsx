import studentimg from "../images/picture.jpg"
import arrow from "../images/arrow.svg"

function Student(){
  return(
    <section className="student">
      <div className="container container_student">
        <h2 className="student__title">Студент</h2>
        <div className="underline student__underline"></div>
        <div className="student__info">
          <div className="student__info-about">
            <h2 className="student__name">Арег</h2>
            <p className="student__profession">Фронтенд-разработчик, 17 лет</p>
            <p className="student__about">Учусь в школе в одиннадцатом классе. Готовлюсь к ЕГЭ. Увлекаюсь баскетболом и боксом. Планирую поступать в Москву на факультет веб-разработки. Кодить начал из за интереса к технологиям в целом, поэтому захотелось создавать нечто свое.</p>
            <a href="" className="student__github link">Github</a>
          </div>
          <img src={studentimg} alt="studentImage" className="student__info-img" />
        </div>
        <div className="student__portfolio">
          <h3 className="student__portfolio-title">Портфолио</h3>
          <ul className="student__portfolio-links">
            <li className="student__portfolio-link">
              <a href="https://g3n1ss.github.io/how-to-learn/" className="student__portfolio-link-text link" target="_blank">Статичный сайт</a>
              <a href="https://g3n1ss.github.io/how-to-learn/"  className="student__portfolio-link-icon" target="_blank"><img src={arrow} alt="Ссылка"/></a>
            </li>
            <li className="student__portfolio-link">
              <a href="https://g3n1ss.github.io/russian-travel/" className="student__portfolio-link-text link" target="_blank">Адаптивный сайт</a>
              <a href="https://g3n1ss.github.io/russian-travel/" className="student__portfolio-link-icon" target="_blank"><img src={arrow} alt="Ссылка"/></a>
            </li>
            <li className="student__portfolio-link">
              <a href="https://areg.nomoredomainsmonster.ru" className="student__portfolio-link-text link" target="_blank">Одностраничное&nbsp;приложение</a>
              <a href="https://areg.nomoredomainsmonster.ru" className="student__portfolio-link-icon" target="_blank"><img src={arrow} alt="Ссылка"/></a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Student