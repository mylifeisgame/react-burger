import React from "react";
import clsx from "clsx";

import { AppHeader, AppWrapper, BurgerConstructor,MainWrapper, BurgerIngredientList } from "./components/index"
const ingredientsAPi = 'https://norma.nomoreparties.space/api/ingredients ';
  export default function App() {
    const [ingredients, setIngredients] = React.useState([])
  
    React.useEffect(() => {
      getIngredients()
    }, [])
  
    const getIngredients = async () => {
      fetch(ingredientsAPi)
        .then(res => {
          if (res.ok) {
              return res.json();
          }
          return Promise.reject(`Ошибка ${res.status}`);
        })
        .then(data => setIngredients(data.data))
        .catch(e => {
          console.log('Ошибка: ' + e.message)
          console.log(e.response)
        })
    }
  return (
    <div className="App">
      <AppWrapper>
        <AppHeader />
        <MainWrapper>
          <BurgerIngredientList ingredients = {ingredients}/>
        <BurgerConstructor/>
        </MainWrapper>
      </AppWrapper>
    </div>
  );
}

