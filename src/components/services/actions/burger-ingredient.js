export const NEXT_STEP = 'NEXT_STEP'
export const PREVIOUS_STEP = 'PREVIOUS_STEP'
export const GET_INGREDIENTS_FAILED = 'GET_INGREDIENTS_FAILED';
export const GET_INGREDIENTS_SUCCESS = 'GET_INGREDIENTS_SUCCESS';
export const GET_INGREDIENTS_REQUEST = 'GET_INGREDIENTS_REQUEST ';
export function getIngredients() {
    // Воспользуемся первым аргументом из усилителя redux-thunk - dispatch
  return function(dispatch) {
        // Проставим флаг в хранилище о том, что мы начали выполнять запрос
        // Это нужно, чтоб отрисовать в интерфейсе лоудер или заблокировать 
        // ввод на время выполнения запроса
    dispatch({
      type: GET_INGREDIENTS_REQUEST
    })
        // Запрашиваем данные у сервера
    fetch('https://norma.nomoreparties.space/api/ingredients').then( res  => {
      if (res && res.success) {
                // В случае успешного получения данных вызываем экшен
                // для записи полученных данных в хранилище
        dispatch({
          type: GET_INGREDIENTS_SUCCESS,
          feed: res.data
        })
      } else {
                // Если произошла ошибка, отправляем соотвтествующий экшен
        dispatch({
          type: GET_INGREDIENTS_FAILED
        })
      }
    }).catch( err => {
            // Если сервер не вернул данных, также отправляем экшен об ошибке
            dispatch({
                type: GET_INGREDIENTS_FAILED
            })
        })
  }
} 