/** Склеивает группу классов, разделенных запятыми в одну строку
 * @param classes - список классов
 * @returns {string} - строка
 */
export function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

/** Возвращает числительное
 * @returns {string}
 * @param col - число
 * @param single - числительное для числа 1
 * @param multi - числительное для чисел от 2 до 4 включительно
 * @param count - числительное для чисел 0 и от 5 до 20 включительно
 * например: {single: "год", multi: "года", count: "лет"}
 */
  // eslint-disable-next-line
export const getAmount = (col, {single: single, multi: multi, count: count}) => {
    while (col > 20) {
      col = col.toString().slice(-1)
      col = parseInt(col);
    }
    if (col === 0) {
      return count
    } else if (col === 1) {
      return single
    } else if (col > 1 && col <= 4) {
      return multi
    } else if (col >= 5 && col <= 20) {
      return count
    }
  }

/** Преобразует число в часы и минуты
 * @param time - время, integer
 * @returns {String}
 */
export const getHour = (time) => {
  if (time >= 60) {
    const minutes = time % 60
    return `${Math.floor(time / 60)}ч ${minutes > 0 ? minutes + "м" : ""}`
  } else {
    return `${time}м`
  }
}

/**
 * @param moviesList - фильтруемый список фильмов
 * @param type - тип списка
 * @returns {Array} - отфильтрованный массив
 */
export function movieFilter(moviesList, type) {
  const regex = new RegExp(localStorage.getItem(`search-${type}`), 'i');

  const arr = moviesList.filter(function (movie) {
    if(movie.country) movie.country = 'null'
    return regex.test(movie.nameRU) && (localStorage.getItem(`isShort-${type}`) === 'false' || movie.duration < 40);
  })

  /*const arr = moviesList.filter(movie => {
    (localStorage.getItem(`isShort-${type}`) === 'true' || movie.duration < 40) && regex.test(movie.nameRU);
    /* Исправляет пустое значение для поля country фильма */
    /*if(movie.country) movie.country = 'null';
  });*/

  localStorage.setItem(`resultSearch-${type}`, JSON.stringify(arr))
  return arr
}

export function savedMoviesFilter(list, savedList, id) {
  if (!list || !savedList) return
  list.forEach(m => {
    const saved = savedList.find(i => i.id === m.movieId && i.nameRU === m.nameRU)
    if (saved) {
      m.owner = id
      m._id = saved._id
    }
    return m
  })

  return list
}
