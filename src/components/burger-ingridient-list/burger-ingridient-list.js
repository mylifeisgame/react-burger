import React from "react";
import ReactDOM from "react-dom";
import styles from "./burger-ingridient-list.module.css";
import { BurgerIngridient, BurgerIngredientDetails, Modal } from "../index.js";
import clsx from "clsx";
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
const BurgerIngridientList = ({ ingredients }) => {
  const ShowIngredientDetails = (ingredient) => {
    setIngredientDetails({
      show: true,
      data: ingredient
    })
  }
  const tabs = [
    {
      caption: 'Булки',
      value: 'buns',
      active: 'buns',
    },
    {
      caption: 'Соусы',
      value: 'sauces',
      active: 'sauces',
    },
    {
      name: 'Начинка',
      value: 'toppings',
      active: 'toppings',
    }
  ]
  const closeBurgerIngredientDetails = () => {
    setIngredientDetails({
      show: false,
      data: {},
    })
  }
  const [burgerIngredientDetails, setIngredientDetails] = React.useState({
    show: false,
    data: {},
  })
  return (
    <section>
          <h1 className={clsx(
          'text', 'text_type_main-large',
          'pt-10',
        )}>Соберите бургер</h1>
        <div className={clsx(
          styles.burgerIngredientsTabs,
          'mt-5',
        )}>
           {tabs.map((tab, index) => (
            <Tab
              value={tab.value}
              key={index}
              >{tab.caption}</Tab>
          ))}
      {ingredients.map((el) => (
        <BurgerIngridient
          caption= {el.name}
          price= {el.price}
          thumbnail={el.image}
          key={el._id}
          onShow = {()=> ShowIngredientDetails(el)}
        />
      ))}
      </div>
      {burgerIngredientDetails.show && (
      <Modal
          show={burgerIngredientDetails.show}
          title="Детали ингредиента"
          onClose={closeBurgerIngredientDetails}
        >
          <BurgerIngredientDetails
            data={burgerIngredientDetails.data}
          />
        </Modal>
      )}
    </section>
  );
};
export default BurgerIngridientList;