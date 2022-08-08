import React from 'react';
/* React router DOM v.6 (Switch->Routes, component->element) */
import {Route, Routes} from 'react-router-dom';
/* Компоненты */
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Login from '../Login/Login';
import Register from '../Register/Register';
import NotFound from '../NotFound/NotFound';
import Profile from '../Profile/Profile';
/* Стили */
import './App.css';

/** Основной компонент приложения
 * @returns {JSX.Element}
 * @constructor
 */
const App = () => {
  return (
    <div className='page'>
      <Routes>
        <Route exact path='/' element={<Main/>}/>
        <Route exact path='/movies' element={<Movies/>}/>
        <Route exact path='/saved-movies' element={<SavedMovies/>}/>
        <Route exact path='/profile' element={<Profile/>}/>
        <Route exact path='/signin' element={<Login/>}/>
        <Route exact path='/signup' element={<Register/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </div>
  )
}

export default App;
