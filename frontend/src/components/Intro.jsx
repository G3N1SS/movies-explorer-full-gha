import webglobus from '../images/web-globus.svg'

function Intro(){
  return(
    <section className="intro">
      <div className="container container_intro">
        <div className="intro__info">
          <h1 className="intro__title">Учебный&nbsp;проект студентов факультета<br/>Программной инженерии</h1>
          <p className="intro__caption">Листайте ниже, чтобы узнать больше про этот проект и его создателей.</p>
          <a className="intro__learn-more button" href='#about'>Узнать больше</a>
        </div>
        <img src={webglobus} alt="globus" className="intro__image"/>
      </div>
    </section>
  )
}

export default Intro