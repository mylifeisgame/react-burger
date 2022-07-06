import HeaderLink from "./header-link/header-link.js";
import AppHeader from "./app-header/app-header.js";
import AppWrapper from "./app-wrapper/app-wrapper.js";
import BurgerConstructor from './burger-constructor/burger-constructor.js'
import MainWrapper from './main-wrapper/main-wrapper'
import BurgerIngredient from "./burger-ingridient/burger-ingredient.js";
import BurgerIngredientList from "./burger-ingridient-list/burger-ingridient-list"
import BurgerIngredientDetails from './burger-ingredient-details/burger-ingredient-details'
import getIngredients from "./services/store/burger-ingredient"
import Modal from './modal/modal'
import OrderDetails from "./order-details/order-details.js";
import ingredientsPropTypes from "../utils/proptypes.js";
import {fetchIngredients} from "./services/store/burger-ingredient"
import IngredientsCategory from "./ingredients-category/ingredients-category.js";
import { ingredientsSlice } from "./services/store/burger-ingredient";
import resetter from "../components/burger-ingridient/burger-ingredient"
export { HeaderLink, AppHeader, AppWrapper, BurgerConstructor, MainWrapper, BurgerIngredient, BurgerIngredientList, BurgerIngredientDetails, Modal, 
    OrderDetails,ingredientsPropTypes,  IngredientsCategory, fetchIngredients, ingredientsSlice,resetter};
