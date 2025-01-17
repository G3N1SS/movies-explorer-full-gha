import Footer from "./Footer";
import Header from "./Header";
import SitesCard from './SitesCard'

export default function Sites({loggedIn, name, data}){
  return(
    <>
      <Header
        loggedIn={loggedIn}
        black={true}
      />
      <main>
        <section className="sites">
          <h2 className="sites__title">{name} сайты</h2>
          <div className="container container_sites">
            <ul className="sites__list">
              {data.map((info) => <SitesCard data={info}/>)}
            </ul>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  )
}