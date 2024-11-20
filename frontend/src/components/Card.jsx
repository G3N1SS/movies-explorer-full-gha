import { Link, useLocation } from "react-router-dom"
import { useState, useEffect } from "react"

export default function Card({ onDelete, addMovie, data, savedMovies}){
  const location = useLocation()
  const [favourite, setFavourite] = useState(false)

  useEffect(() => {
    if (location.pathname === '/movies')
      setFavourite(savedMovies.some(element => data.id === element.movieId))
  }, [savedMovies, data.id, setFavourite, location.pathname])

  function handleLike(){
    if (savedMovies.some(e => data.id === e.movieId)) {
      setFavourite(true)
      addMovie(data)
    } else {
      setFavourite(false)
      addMovie(data)
    }
  }

  function convertTime(duration) {
    const minutes = duration % 60;
    const hours = Math.floor(duration / 60);
    return (hours === 0 ? `${minutes}м` : minutes === 0 ? `${hours}ч` : `${hours}ч${minutes}м`)
  }

  return(
    <li className="main-page__card card">
      <Link to ={data.trailerLink} target="_blank">
        <img src={location.pathname === '/movies' ? `https://api.nomoreparties.co${data.image.url}` : data.image} alt={data.name} className="card__img"/>
      </Link>
      <div className="card__banner">
        <div className="card__text">
          <h3 className="card__title">{data.nameRU}</h3>
          <p className="card__duration">{convertTime(data.duration)}</p>
        </div>
        {location.pathname === '/movies' ?
          <button type='button' className={`card__save ${favourite ? 'card__save_active' : ''}`} onClick={handleLike}></button>
            :
          <button type='button' className={`card__save card__save_cross`} onClick={() => onDelete(data._id)}>+</button>
        }
      </div>
    </li>
    )
}