// export const NEXT_STEP = 'NEXT_STEP'
// export const PREVIOUS_STEP = 'PREVIOUS_STEP'
// export const GET_INGREDIENTS_FAILED = 'GET_INGREDIENTS_FAILED';
// export const GET_INGREDIENTS_SUCCESS = 'GET_INGREDIENTS_SUCCESS';
// export const GET_INGREDIENTS_REQUEST = 'GET_INGREDIENTS_REQUEST ';
// export function getIngredients() {
//     // Воспользуемся первым аргументом из усилителя redux-thunk - dispatch
//   return function(dispatch) {
//         // Проставим флаг в хранилище о том, что мы начали выполнять запрос
//         // Это нужно, чтоб отрисовать в интерфейсе лоудер или заблокировать 
//         // ввод на время выполнения запроса
//     dispatch({
//       type: GET_INGREDIENTS_REQUEST
//     })
//         // Запрашиваем данные у сервера
//     fetch('https://norma.nomoreparties.space/api/ingredients').then( res  => {
//       if (res && res.success) {
//                 // В случае успешного получения данных вызываем экшен
//                 // для записи полученных данных в хранилище
//         dispatch({
//           type: GET_INGREDIENTS_SUCCESS,
//           ingredients: res.data
//         })
//       } else {
//                 // Если произошла ошибка, отправляем соотвтествующий экшен
//         dispatch({
//           type: GET_INGREDIENTS_FAILED
//         })
//       }
//     }).catch( err => {
//             // Если сервер не вернул данных, также отправляем экшен об ошибке
//             dispatch({
//                 type: GET_INGREDIENTS_FAILED
//             })
//         })
//   }
// } 
import {createSlice,createAction,createReducer,createAsyncThunk,combineReducers,configureStore} from '@reduxjs/toolkit'
import {useDispatch} from 'react-redux'
import { resetter } from './burger-ingredient';
const ingredientsAPI = 'https://norma.nomoreparties.space/api/ingredients ';
export const ingredientsSlice = createSlice({    
  
  name:'ingredients',
  initialState:[],
  reducers:{
resetter:(state)=> {state = []},
resetter2:(state)=>{state=[]}
  },
  extraReducers:(builder)=>{
    builder.addCase(fetchIngredients.success, (store,action)=>{
      console.log('store',store,'action',action)
      store.ingredients.push(action.payload)
    },
)}
})

export const fetchIngredients = createAsyncThunk(
  'ingredients/fetchIngredients',
  async()=>{
const dispatch = useDispatch()
    const response = await fetch(ingredientsAPI)
    return response.data
  }
)
export const {resetter,resetter2} = ingredientsSlice.actions
export default ingredientsSlice.reducer




  