import SearchForm from "./SearchForm"
import CardSection from "./CardSection"
import { useCallback, useEffect, useState } from "react"
import Header from "./Header"
import Footer from "./Footer"

export default function SavedMovies({ savedMovies, onDelete, setIsError, loggedIn }) {
    const [filteredMovies, setFilteredMovies] = useState(savedMovies)
    const [searchedMovie, setSearchedMovie] = useState('')
    const [isCheck, setIsCheck] = useState(false)
    const [firstEntrance, setFirstEntrance] = useState(true)
    console.log(savedMovies)
  
    const filter = useCallback((search, isCheck, movies) => {
      setSearchedMovie(search)
      setFilteredMovies(movies.filter((movie) => {
        const searchName = movie.nameRU.toLowerCase().includes(search.toLowerCase())
        return isCheck ? (searchName && movie.duration <= 40) : searchName
      }))
    }, [])
  
    function searchMovies(search) {
      setFirstEntrance(false)
      filter(search, isCheck, savedMovies)
    }
  
    useEffect(() => {
      if (savedMovies.length === 0) {
        setFirstEntrance(true)
      } else {
        setFirstEntrance(false)
      }
      filter(searchedMovie, isCheck, savedMovies)
    }, [filter, savedMovies, isCheck, searchedMovie])
  
    return (
      <>
      <Header 
        black={true}
        loggedIn={loggedIn}
      />
      <main>
      <section className="main-page">
        <div className="container container_main-page">
          <SearchForm
            isCheck={isCheck}
            searchMovies={searchMovies}
            searchedMovie={searchedMovie}
            setIsError={setIsError}
            firstEntrance={firstEntrance}
            savedMovie={savedMovies}
            movies={savedMovies}
            filter={filter}
            setIsCheck={setIsCheck}
          />
          <CardSection
            movies={filteredMovies}
            onDelete={onDelete}
            firstEntrance={firstEntrance}
            savedMovies={savedMovies}
          />
        </div> 
      </section>
      </main>
      <Footer/>
      </>
    )
  }