import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom"
import {
  MaxScreen,
  MediumScreen,
  SmallScreen,
  InitMoreMaxScreen,
  InitLessMaxScreen,
  InitMediumScreen,
  InitSmallScreen,
  StepMaxScreen,
  StepMediumScreen,
  StepSmallScreen
} from "../utils/constants"
import Card from "./Card"
import Preloader from "./Preloader/Preloader";

export default function CardSection({ movies, onDelete, addMovie, savedMovies, isLoading, serverError, firstEntrance }){
  const location = useLocation();
  const [count, setCount] = useState('')
  const card = movies.slice(0, count)

  useEffect(() => {
    if (location.pathname === '/movies') {
      setCount(viewCards().init)
      function printCardsForResize() {
        if (window.innerWidth >= StepMaxScreen) {
          setCount(viewCards().init)
        }
        if (window.innerWidth < StepMaxScreen) {
          setCount(viewCards().init)
        }
        if (window.innerWidth < MediumScreen) {
          setCount(viewCards().init)
        }
        if (window.innerWidth < SmallScreen) {
          setCount(viewCards().init)
        }
      }
      window.addEventListener('resize', printCardsForResize)
      return () => window.removeEventListener('resize', printCardsForResize)
    }
  }, [location.pathname, movies])

  function clickMore() {
    setCount(count + viewCards().step)
  }

  function viewCards(){
    const counter = { init: InitMoreMaxScreen, step: StepMaxScreen }
    if (window.innerWidth < MaxScreen) {
      counter.init = InitLessMaxScreen
      counter.step = StepMediumScreen
    }
    if (window.innerWidth < MediumScreen) {
      counter.init = InitMediumScreen
      counter.step = StepSmallScreen
    }
    if (window.innerWidth < SmallScreen) {
      counter.init = InitSmallScreen
      counter.step = StepSmallScreen
    }
    return counter
  }

  return(
    <>
    <ul className="main-page__cards">
      {isLoading ? <Preloader/> : 
      (location.pathname === '/movies' && card.length !== 0) ?
      card.map(data => {
        return (
          <Card
          key={data.id}
          savedMovies={savedMovies}
          addMovie={addMovie}
          data={data}
          />
        )
      })
      :
      movies.length !== 0 ?
        movies.map(data => {
          return (
            <Card
            key={data.id}
            onDelete={onDelete}
            data={data}
            />
          )
        })
        :
        serverError ?
          <span className='main-page__search-error'>«Во время запроса произошла ошибка.
            Возможно, проблема с соединением или сервер недоступен.
            Пожалуйста, подождите немного и попробуйте ещё раз»
          </span>
          : !firstEntrance ?
            <span className='main-page__search-error'>«Сожалеем, но ничего не найдено :(»</span>
              : location.pathname === '/movies' ?
                <span className='main-page__search-error'>«Чтобы отобразить фильм - введите название в поисковую строку»</span>
                :
                  <span className='main-page__search-error'>«Нет сохранённых фильмов»</span>
      }
    </ul>
    {location.pathname === '/movies' && <button className={`main-page__more ${count >= movies.length ? 'main-page__more_hidden' : ''}`} type="button" onClick={clickMore}>Ещё</button>}
    </>
  )
}