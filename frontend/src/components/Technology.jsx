function Technology(){
  return(
    <section className="technology">
      <div className="container container_technology">
        <h2 className="technology__title">Технологии</h2>
        <div className="underline technology__underline"></div>
        <div className="technology__about">
            <h2 className="technology__about-title">7 технологий</h2>
            <p className="technology__caption">На курсе веб-разработки мы освоили технологии, которые применили в дипломном&nbsp;проекте.</p>
            <ul className="technology__names">
              <li className="technology__name">HTML</li>
              <li className="technology__name">CSS</li>
              <li className="technology__name">JS</li>
              <li className="technology__name">React</li>
              <li className="technology__name">Git</li>
              <li className="technology__name">Express.js</li>
              <li className="technology__name">mongoDB</li>
            </ul>
        </div>
      </div>
    </section>
  )
}

export default Technology