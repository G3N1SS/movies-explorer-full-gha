export default function SitesCard({data}){
  return(
    <li className="sites__card card">
      <img src={data.img} alt={data.name} className="sites__card-img card__img" />
      <div className="sites__card-banner card__banner">
        <h3 className="sites__card-title card__title">{data.name}</h3>
        <a href={data.link} target="_blank" className="sites__card-button">Подробнее</a>
      </div>
    </li>
  )
}