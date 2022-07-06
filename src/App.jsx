import React from "react";
import clsx from "clsx";
import {Provider} from 'react-redux'
import { AppHeader, AppWrapper, BurgerConstructor,MainWrapper, BurgerIngredientList,store } from "./components/index"
import {configureStore} from '@reduxjs/toolkit'
import ingredientsSlice from './index'
const ingredientsAPi = 'https://norma.nomoreparties.space/api/ingredients ';
  export default function App() {
    const preloadedState = {
      ingredients : []
    }
     const store = configureStore({
      reducer:{ingredients:resetter},
      middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
      devTools: process.env.NODE_ENV !== 'production',
      preloadedState,
    }) 
  return (
    <Provider store = {store}>
    <div className="App">
      <AppWrapper>
        <AppHeader />
        <MainWrapper>
          <BurgerIngredientList ingredients = {store.ingredients}/>
        <BurgerConstructor ingredients = {store.ingredients}/>
        </MainWrapper>
      </AppWrapper>
    </div>
    </Provider>
  );
}

