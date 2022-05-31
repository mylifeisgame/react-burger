import {useState} from "react";
import ReactDOM from "react-dom";
import styles from "./burger-ingridient-list.module.css";
import {
  BurgerIngridient,
  BurgerIngredientDetails,
  Modal,
  ingredientsPropTypes,
} from "../index.js";
import clsx from "clsx";
import propTypes from "prop-types";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
const BurgerIngredientList = ({ ingredients }) => {
  const [current,setCurrent] = useState('one')
  const ShowIngredientDetails = (ingredient) => {
    setIngredientDetails({
      show: true,
      data: ingredient,
    });
  };

  const closeBurgerIngredientDetails = () => {
    setIngredientDetails({
      show: false,
      data: {},
    });
  };
  const [burgerIngredientDetails, setIngredientDetails] = useState({
    show: false,
    data: {},
  });
  return (
    <section>
      <h1 className={clsx("text", "text_type_main-large", "pt-10")}>
        Соберите бургер
      </h1>
      <div className={clsx(styles.burgerIngredientsTabs, "mt-5")}>
        <Tab value = "one" active = {current === "one"} onClick = {setCurrent}>
         Булки
        </Tab>
        <Tab value = "one" active = {current === "one"} onClick = {setCurrent}>
          Соусы
        </Tab>
        <Tab value = "one" active = {current === "one"} onClick = {setCurrent}>
         Начинки
        </Tab>
        </div>
        <div className = {styles.BurgerIngredients}>
        {ingredients.map((el) => {
          if (el.type === "bun") {
            return (
              <BurgerIngridient
                caption={el.name}
                price={el.price}
                thumbnail={el.image}
                key={el._id}
                onShow={() => ShowIngredientDetails(el)}
              />
            );
          }
        })}
        {ingredients.map((el) => {
          if (el.type === "sauce") {
            return (
              <BurgerIngridient
                caption={el.name}
                price={el.price}
                thumbnail={el.image}
                key={el._id}
                onShow={() => ShowIngredientDetails(el)}
              />
            );
          }
        })}
     
        {ingredients.map((el) => {
          if (el.type === "main") {
            return (
              <BurgerIngridient
                caption={el.name}
                price={el.price}
                thumbnail={el.image}
                key={el._id}
                onShow={() => ShowIngredientDetails(el)}
              />
            );
          }
        })}
      
      </div>
      {burgerIngredientDetails.show && (
        <Modal
          show={burgerIngredientDetails.show}
          title="Детали ингредиента"
          onClose={closeBurgerIngredientDetails}
        >
          <BurgerIngredientDetails data={burgerIngredientDetails.data} />
        </Modal>
      )}
    </section>
  );
};
// BurgerIngredientList.propTypes = {
//   ingredients: propTypes.arrayOf(ingredientsPropTypes).isRequired,
// }
export default BurgerIngredientList;
