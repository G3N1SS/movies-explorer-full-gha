import studentimg from "../images/picture.jpg"
import studentD from "../images/studentD.jpg"
import studentM from "../images/studentM.jpg"
import studentY from "../images/studentY.jpg"
import studentG from "../images/studentG.jpg"
import arrow from "../images/arrow.svg"
import StudentCard from "./StudentCard"

function Student(){
  return(
    <section className="student">
      <div className="container container_student">
        <h2 className="student__title">Студенты</h2>
        <div className="underline student__underline"></div>
        <StudentCard
          name={'Арег'}
          description={'52'}
          age={'17'}
          role={'Тим-лид'}
          reversed={false}
          img={studentimg}
          ghLink={''}
        />
        <StudentCard
          name={'Ярослав'}
          description={'52'}
          age={'18'}
          role={'Backend разработчик'}
          reversed={true}
          img={studentY}
          ghLink={''}
        />
        <StudentCard
          name={'Глеб'}
          description={'52'}
          age={'18'}
          role={'Frontend разработчик'}
          reversed={false}
          img={studentG}
          ghLink={''}
        />
        <StudentCard
          name={'Даниил'}
          description={'52'}
          age={'18'}
          role={'Верстальщик'}
          reversed={true}
          img={studentimg}
          ghLink={''}
        />
        <StudentCard
          name={'Денис'}
          description={'52'}
          age={'18'}
          role={'Дизайнер'}
          reversed={false}
          img={studentD}
          ghLink={''}
        />
        <StudentCard
          name={'Егор'}
          description={'52'}
          age={'18'}
          role={'Дизайнер'}
          reversed={true}
          img={studentimg}
          ghLink={''}
        />
        <StudentCard
          name={'Мария'}
          description={'52'}
          age={'17'}
          role={'PR-менеджер'}
          reversed={false}
          img={studentM}
          ghLink={''}
        />
        {/* <div className="student__portfolio">
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
        </div> */}
      </div>
    </section>
  )
}

export default Student