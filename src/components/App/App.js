import React, { useEffect } from 'react';
/* React router DOM v.6 (Switch->Routes, component->element) */
import { Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { mainApi } from '../../utils/MainApi';
import { moviesApi } from '../../utils/MoviesApi';
import * as auth from '../../utils/auth';

/* Компоненты */
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Login from '../Login/Login';
import Register from '../Register/Register';
import NotFound from '../NotFound/NotFound';
import Profile from '../Profile/Profile';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

/* Стили */
import './App.css';
import { movieFilter, savedMoviesFilter } from "../../utils/helpers";

/** Основной компонент приложения
 * @returns {JSX.Element}
 * @constructor
 */
const App = () => {
  const history = useNavigate();
  const localStorage = window.localStorage;
  const {path} = useLocation();

  const [currentUser, setCurrentUser] = React.useState({});
  const [movies, setMovies] = React.useState([]);
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [error, setError] = React.useState('');

  /** Обновить данные пользователя
   * @param name
   * @param email
   */
  function handleUpdateUser(name, email) {
    mainApi.sendUserInfo(name, email)
      .then((res) => {
        setCurrentUser(res.data);
      })
      .catch((err) => {
        setError(err)
        const timer = setTimeout(() => {
          setError('')
          clearTimeout(timer);
        }, 5000);
      });
  }

  /** Сохранить в сохраненные / удалить из сохраненного
   * @param movie
   */
  const handleMoviesLike = (movie) => {
    const isSaved = movie.owner === currentUser._id;
    if (isSaved) {
      mainApi.deleteMovie(movie._id)
        .then(() => {
          movie.owner = null
          const newSavedMovies = savedMovies.filter((m) => (m._id !== movie._id))
          const newMovies = movies.filter(m => {
            if (m.id === movie.movieId) m.owner = null
            return m
          })
          setSavedMovies(newSavedMovies);
          localStorage.setItem('savedMovies', JSON.stringify(newSavedMovies))
          setMovies(newMovies)
          localStorage.setItem('resultSearch-movies', JSON.stringify(newMovies))
        })
        .catch((err) => {
          setError(err)
          const timer = setTimeout(() => {
            setError(null)
            clearTimeout(timer);
          }, 5000);
        });
    } else {
      mainApi.sendMovie(movie)
        .then((newMovie) => {
          movie.owner = currentUser._id
          movie._id = newMovie.data._id;
          const arr = savedMovies.map(i => i)
          arr.push(newMovie.data)
          setSavedMovies(arr)
          localStorage.setItem('savedMovies', JSON.stringify(arr))
        })
        .catch((err) => {
          setError(err)
          const timer = setTimeout(() => {
            setError(null)
            clearTimeout(timer);
          }, 5000);
        });
    }
  }

  /** Фильтрация списка фильмов
   * @param nameList
   */
  function filterMoviesList(nameList) {
    const mainList = JSON.parse(localStorage.getItem(`${nameList}`))
    try {
      const list = movieFilter(mainList, nameList);
      savedMoviesFilter(list, savedMovies, currentUser._id);
      nameList === 'movies' ? setMovies(list) : setSavedMovies(list);
    } catch (err) {
      setError(err.messsage)
    }
  }

  /** Загрузка фильмов с beatmovies, фильтрация по поиску
   * @param type
   */
  function handleSearchMovies(type) {
    setError(null)
    if (localStorage.getItem('movies')) {
      filterMoviesList(type)
      return
    }
    setIsLoading(true)
    moviesApi.getMovies()
      .then((res) => {
        localStorage.setItem('movies', JSON.stringify(res))
        filterMoviesList(type)
      })
      .catch(() => {
        setError(`Во время запроса произошла ошибка. Возможно, проблема с соединением или
      сервер недоступен. Подождите немного и попробуйте ещё раз`)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  /** Поиск в сохраненных фильмах
   * @param type
   */
  function handleSearchSavedMovies(type) {
    setError(null)
    setIsLoading(true)
    try {
      filterMoviesList(type)
    } catch (err) {
      setError(err.message)
    } finally {
      setIsLoading(false)
    }
  }

  /** Регистрация
   * @param registerData - рег. данные {email: string, password: string, name: string}
   */
  function handleRegisterSubmit(registerData) {
    auth.register(registerData)
      .then((res) => {
        if (res.token) {
          setLoggedIn(true)
          history.push('/movies');
        }
      })
      .catch((err) => {
        setError(err)
        const timer = setTimeout(() => {
          setError(null)
          clearTimeout(timer);
        }, 5000);
      });
  }

  /** Вход, запись полученного токена
   * @param loginData - данные входа {email: string, password: string}
   */
  function handleLoginSubmit(loginData) {
    auth
      .authorize(loginData)
      .then((res) => {
        if (res.token) {
          setLoggedIn(true)
          history('/movies');
        }
      })
      .catch((err) => {
        setError(err)
        const timer = setTimeout(() => {
          setError(null)
          clearTimeout(timer);
        }, 5000);
      });
  }

  /** Выход из приложения. Очистка localStorage */
  function handleSignOut() {
    auth.signout()
      .then(() => {
        history('/');
        setLoggedIn(false);
        localStorage.clear();
      })
      .catch((err) => {
        setError(err)
        const timer = setTimeout(() => {
          setError(null)
          clearTimeout(timer);
        }, 5000);
      })
  }

  /** Получение данных пользователя и фильмов */
  const getContent = () => {
    setMovies([])
    if (localStorage.getItem('jwt')) {
      setLoggedIn(true);
      Promise.all([mainApi.getSavedMovies(), mainApi.getUserInfo()])
        .then((res) => {
          setCurrentUser(res[1].data);
          localStorage.setItem('savedMovies', JSON.stringify(res[0].data))
          setSavedMovies(res[0].data);
          if (localStorage.getItem('resultSearch-savedMovies')) setSavedMovies(JSON.parse(localStorage.getItem('resultSearch-savedMovies')));
          if (localStorage.getItem('resultSearch-movies')) {
            const list = savedMoviesFilter(JSON.parse(localStorage.getItem('resultSearch-movies')), res[0].data, res[1].data._id);
            setMovies(list)
          }
        })
        .catch((err) => {
          setError(err)
          const timer = setTimeout(() => {
            setError(null)
            clearTimeout(timer);
          }, 5000);
        });
    }
  }

  /** Получение данных при монтировании */
  useEffect(() => {
    getContent();
    // eslint-disable-next-line
  }, [loggedIn]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='page'>
        {/* Роуты */}
        <Routes>
          <Route
            path='/movies'
            element={
              <ProtectedRoute location={path} loggedIn={loggedIn}>
                <Movies
                  loggedIn={loggedIn}
                  movies={movies}
                  handleMoviesLike={handleMoviesLike}
                  error={error}
                  isLoading={isLoading}
                  handleSearchMovies={handleSearchMovies}
                />
              </ProtectedRoute>
            }
          />
          <Route
            path='/saved-movies'
            element={
              <ProtectedRoute location={path} loggedIn={loggedIn}>
                <SavedMovies
                  loggedIn={loggedIn}
                  movies={savedMovies}
                  handleMoviesLike={handleMoviesLike}
                  error={error}
                  isLoading={isLoading}
                  handleSearchMovies={handleSearchSavedMovies}
                />
              </ProtectedRoute>
            }
          />
          <Route
            path='/profile'
            element={
              <ProtectedRoute location={path} loggedIn={loggedIn}>
                <Profile
                  handleUpdateUser={handleUpdateUser}
                  signOut={handleSignOut}
                  loggedIn={loggedIn}
                  error={error}
                />
              </ProtectedRoute>
            }
          />
          <Route exact path='/signin'
                 element={
                   !loggedIn ?
                     <Login handleLoginSubmit={handleLoginSubmit} error={error}/>
                     :
                     <Navigate to='/movies'/>
                 }/>
          <Route exact path='/signup'
                 element={
                   !loggedIn ?
                     <Register handleRegisterSubmit={handleRegisterSubmit} error={error}/>
                     :
                     <Navigate to='/movies'/>
                 }/>
          <Route exact path='/' element={<Main loggedIn={loggedIn}/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  )
}

export default App;
