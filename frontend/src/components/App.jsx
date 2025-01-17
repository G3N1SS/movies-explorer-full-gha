import { useCallback, useEffect, useState } from "react";
import {
  Route,
  Routes,
  Link,
  useNavigate,
  Navigate,
  RouterProvider,
  useLocation,
} from "react-router-dom";
import IntroPage from "./IntroPage";
import Registration from "./Registration";
import Login from "./Login";
import PageNotFound from "./PageNotFound";
import Profile from "./Profile";
import MainPage from "./MainPage";
import ProtectedRoute from "./ProtectedRoute";
import api from "../utils/Api";
import CurrentUserContext from "../contexts/CurrentUserContext";
import SendContext from "../contexts/SendContext";
import ErrorContext from "../contexts/ErrorContext";
import SavedMovies from "./SavedMovies";
import Preloader from "./Preloader/Preloader";
import { adaptive, multipage, staticSite } from "../utils/constants";
import Sites from "./Sites";

function App() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [loggedIn, setLoggedIn] = useState(false);
  const [isSend, setIsSend] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [savedMovies, setSavedMovies] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isCheckToken, setIsCheckToken] = useState(true);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const setSuccess = useCallback(() => {
    setIsSuccess(false);
  }, []);

  useEffect(() => {
    setIsSend(false);
  }, [pathname]);

  useEffect(() => {
    if (localStorage.jwt) {
      Promise.all([
        api.getUserData(localStorage.jwt),
        api.getMovies(localStorage.jwt),
      ])
        .then(([userData, dataMovies]) => {
          setSavedMovies(dataMovies.reverse());
          setCurrentUser(userData);
          setLoggedIn(true);
          setIsCheckToken(false);
        })
        .catch((err) => {
          console.error(`Ошибка при загрузке начальных данных ${err}`);
          setIsCheckToken(false);
          localStorage.clear();
        });
    } else {
      setIsCheckToken(false);
      localStorage.clear();
    }
  }, [loggedIn]);

  function handleLogin(email, password) {
    setIsSend(true);
    api
      .authorization(email, password)
      .then((res) => {
        localStorage.setItem("jwt", res.token);
        setLoggedIn(true);
        navigate("/movies");
        window.scrollTo(0, 0);
      })
      .catch((e) => {
        setIsError(true);
        console.error(`Ошибка при авторизации ${e}`);
      })
      .finally(() => setIsSend(false));
  }

  function handleRegister(username, email, password) {
    setIsSend(true);
    api
      .registration(username, email, password)
      .then((res) => {
        if (res) {
          setLoggedIn(false);
          api
            .authorization(email, password)
            .then((res) => {
              localStorage.setItem("jwt", res.token);
              setLoggedIn(true);
              navigate("/movies");
              window.scrollTo(0, 0);
            })
            .catch((e) => {
              setIsError(true);
              console.error(`Ошибка при авторизации после регистрации ${e}`);
            })
            .finally(() => setIsSend(false));
        }
      })
      .catch((e) => {
        setIsError(true);
        console.error(`Ошибка при регистрации ${e}`);
      })
      .finally(() => setIsSend(false));
  }

  function logOut() {
    localStorage.clear();
    setLoggedIn(false);
    navigate("/");
  }

  function editUserData(username, email) {
    setIsSend(true);
    api
      .setUserInfo(username, email, localStorage.jwt)
      .then((res) => {
        setCurrentUser(res);
        setIsSuccess(true);
        setIsEdit(false);
      })
      .catch((e) => {
        setIsError(true);
        console.error(`Ошибка при редактировании данных пользователя ${e}`);
      })
      .finally(() => setIsSend(false));
  }

  function handleDeleteMovie(deletemovieId) {
    api
      .deleteMovie(deletemovieId, localStorage.jwt)
      .then(() => {
        setSavedMovies(
          savedMovies.filter((movie) => {
            return movie._id !== deletemovieId;
          })
        );
      })
      .catch((e) => console.error(`Ошибка при удалении фильма ${e}`));
  }

  function handleToggleMovie(data) {
    const isAdd = savedMovies.some((element) => data.id === element.movieId);
    const searchClickMovie = savedMovies.filter((movie) => {
      return movie.movieId === data.id;
    });
    if (isAdd) {
      handleDeleteMovie(searchClickMovie[0]._id);
    } else {
      api
        .addMovie(data, localStorage.jwt)
        .then((res) => {
          setSavedMovies([res, ...savedMovies]);
        })
        .catch((e) => console.error(`Ошибка при установке лайка ${e}`));
    }
  }

  return (
    <div className="page">
      {isCheckToken ? (
        <Preloader />
      ) : (
        <CurrentUserContext.Provider value={currentUser}>
          <SendContext.Provider value={isSend}>
            <ErrorContext.Provider value={isError}>
              <Routes>
                <Route
                  path="/"
                  element={<IntroPage loggedIn={loggedIn} />}
                />
                <Route
                  path="/signup"
                  element={
                    loggedIn ? (
                      <Navigate to="/movies" replace />
                    ) : (
                      <Registration
                        name={"signup"}
                        onSignUp={handleRegister}
                        setIsError={setIsError}
                      />
                    )
                  }
                />
                <Route
                  path="/signin"
                  element={
                    loggedIn ? (
                      <Navigate to="/movies" replace />
                    ) : (
                      <Login
                        name="signin"
                        setIsError={setIsError}
                        onSignIn={handleLogin}
                      />
                    )
                  }
                />
                <Route
                  path="/profile"
                  element={
                    <ProtectedRoute
                      element={Profile}
                      loggedIn={loggedIn}
                      logOut={logOut}
                      editUserData={editUserData}
                      setIsError={setIsError}
                      setIsSuccess={setSuccess}
                      isSuccess={isSuccess}
                      setIsEdit={setIsEdit}
                      isEdit={isEdit}
                    />
                  }
                />
                <Route
                  path="/movies"
                  element={
                    <ProtectedRoute
                      element={MainPage}
                      savedMovies={savedMovies}
                      onDelete={handleDeleteMovie}
                      loggedIn={loggedIn}
                      setIsError={setIsError}
                      addMovie={handleToggleMovie}
                    />
                  }
                />
                <Route
                  path="/saved-movies"
                  element={
                    <ProtectedRoute
                      element={SavedMovies}
                      savedMovies={savedMovies}
                      onDelete={handleDeleteMovie}
                      loggedIn={loggedIn}
                      setIsError={setIsError}
                    />
                  }
                />
                <Route
                  path="/static"
                  element={
                    <Sites
                      loggedIn={loggedIn}
                      name={"Статичные"}
                      data={staticSite}
                    />
                  }
                />
                <Route
                  path="/adaptive"
                  element={
                    <Sites
                      loggedIn={loggedIn}
                      name={"Адаптивные"}
                      data={adaptive}
                    />
                  }
                />
                <Route
                  path="/multipage"
                  element={
                    <Sites
                      loggedIn={loggedIn}
                      name={"Многостраничные и функциональные"}
                      data={multipage}
                    />
                  }
                />
                <Route path="*" element={<PageNotFound />} />
              </Routes>
            </ErrorContext.Provider>
          </SendContext.Provider>
        </CurrentUserContext.Provider>
      )}
    </div>
  );
}

export default App;
