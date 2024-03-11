function Footer(){
  return(
    <footer className="footer">
      <div className="container container_footer">
        <h3 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h3>
        <div className="footer__underline underline underline_dark"></div>
        <div className="footer__caption">
          <p className="footer__data">© 2024</p>
          <div className="footer__links">
            <a href="https://practicum.yandex.ru/" className="footer__link link link_footer" target="_blank">Яндекс.Практикум</a>
            <a href="https://github.com/G3N1SS" className="footer__link link link_footer" target="_blank">Github</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer