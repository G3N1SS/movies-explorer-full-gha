function About(){
  return(
    <section className="about" id="about">
      <div className="container container_about">
        <h2 className="about__title">О проекте</h2>
        <div className="about__underline underline"/>
        <div className="about__info-container">
          <div className="about__info">
            <h3 className="about__info-title">Дипломный проект включал 5 этапов</h3>
            <p className="about__info-caption">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
          </div>
          <div className="about__info">
            <h3 className="about__info-title">На выполнение диплома ушло 5 недель</h3>
            <p className="about__info-caption">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
          </div>
        </div>
        <div className="about__timeline">
          <div className="about__timeline-container">
            <p className="about__timeline-amount about__timeline-amount_backend">1 неделя</p>
            <p className="about__timeline-name">Back-end</p>
          </div>
          <div className="about__timeline-container">
            <p className="about__timeline-amount about__timeline-amount_frontend">4 недели</p>
            <p className="about__timeline-name">Front-end</p>
          </div>
        </div>
      </div>
    </section>
  )
} 

export default About