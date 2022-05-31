import { useState } from "react";
import ReactDOM from "react-dom";
import clsx from "clsx";
import bun2 from "../../images/bun-02.png";
import propTypes from 'prop-types';
import { ConstructorElement,Button,CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './burger-constructor.module.css'
import {Modal, OrderDetails, ingredientsPropTypes} from "../index.js";
const BurgerConstructor = () => {
  const [orderDetailsDisplay, setOrderDetailsDisplay] = useState(false)
  const showOrderDetails = () => setOrderDetailsDisplay(true)
  const hideOrderDetails = () => setOrderDetailsDisplay(false)
  return (
    <div className = {styles.BurgerConstructor}>
      <ConstructorElement
        type="top"
        isLocked={true}
        text="Краторная булка N-200i (верх)"
        price={200}
        thumbnail={bun2}
      />
      
      <ConstructorElement
        text="Краторная булка N-200i (верх)"
        price={50}
        thumbnail={bun2}
      />
      <ConstructorElement
        type="bottom"
        isLocked={true}
        text="Краторная булка N-200i (низ)"
        price={200}
        thumbnail={bun2}
      />
      <p className={clsx(
            styles.burgerConstructorTotal,
            'mr-10',
          )}>
            <span className={`text text_type_digits-medium mr-2`}>610</span>
            <CurrencyIcon type="primary" />
          </p>
      <Button type="primary" size="large" onClick={showOrderDetails}>
            Оформить заказ
          </Button>
      {orderDetailsDisplay && (
        <Modal
          onClose={hideOrderDetails}
        >
          <OrderDetails />
        </Modal>
        )}
    </div>
  );
};


export default BurgerConstructor;
