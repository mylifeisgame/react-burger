import { useEffect, useRef, useState } from "react";

import ReactDOM from "react-dom";
import clsx from "clsx";
import bun2 from "../../images/bun-02.png";
import PropTypes from "prop-types";
import {
  ConstructorElement,
  Button,
  CurrencyIcon,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-constructor.module.css";
import { Modal, OrderDetails } from "../index.js";
import ingredientsPropTypes from "../../utils/proptypes";
import { getScrollHeight } from "../../utils/scrollbar-function";
const BurgerConstructor = ({ ingredients }) => {
  const constructorScrollRef = useRef(null);
  const constructorRef = useRef(null);

  const setScrollHeight = () => {
    const height = getScrollHeight(
      constructorRef.current,
      "constructorScroll"
    );
    constructorScrollRef.current.style.height = height;
  };
  const [orderDetailsDisplay, setOrderDetailsDisplay] = useState(false);
  useEffect(() => {
    setScrollHeight();
    window.addEventListener("resize", setScrollHeight);

    return () => {
      window.removeEventListener("resize", setScrollHeight);
    };
  }, []);
  const showOrderDetails = () => setOrderDetailsDisplay(true);
  const hideOrderDetails = () => setOrderDetailsDisplay(false);

  return (
    <section
        className={clsx(
          styles.burgerConstructor,
          'mt-25', 'mb-10',
        )}
        ref={constructorRef}
      >
      <div className={styles.Bun}>
        <ConstructorElement
          type="top"
          isLocked={true}
          text="Краторная булка N-200i (верх)"
          price={200}
          thumbnail={bun2}
        />
      </div>

      <div
        className={clsx(styles.constructorScroll, "pl-4", "pr-2")}
        ref={constructorScrollRef}
      >
        {ingredients.map((ingredient) => {
          return ingredient.type !== "bun" ? (
            <div className={styles.ingredientItem} key={ingredient._id}>
              <DragIcon type="primary" />
              <ConstructorElement
                text={ingredient.name}
                price={ingredient.price}
                thumbnail={ingredient.image}
              />
            </div>
          ) : null;
        })}
      </div>
      <div className={styles.Bun}>
        <ConstructorElement
          isLocked={true}
          type="bottom"
          text="Краторная булка N-200i (верх)"
          price={50}
          thumbnail={bun2}
        />
      </div>

      <div className={styles.constructorMakeOrder}>
        <div className={clsx(styles.burgerConstructorTotal, "mr-10")}>
          <span className={`text text_type_digits-medium mr-2`}>450</span>
          <CurrencyIcon type="primary" />
          <Button type="primary" size="large" onClick={showOrderDetails}>
            Оформить заказ
          </Button>
        </div>
      </div>
      {orderDetailsDisplay && (
        <Modal onClose={hideOrderDetails}>
          <OrderDetails />
        </Modal>
      )}
  </section>
  );
};
BurgerConstructor.propTypes = {
  ingredients: PropTypes.arrayOf(ingredientsPropTypes).isRequired,
};
export default BurgerConstructor;
