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
      <div className = {styles.ConstructorElement}>
      <ConstructorElement 
        type="top"
        isLocked={true}
        text="Краторная булка N-200i (верх)"
        price={200}
        thumbnail={bun2}
      />
      </div>
      <div className = {styles.ConstructorElement}>
      <ConstructorElement className = {styles.ConstructorElement}
        text="Краторная булка N-200i (верх)"
        price={50}
        thumbnail={bun2}
      />
      </div>
      <div className = {styles.ConstructorElement}>
      <ConstructorElement className = {styles.ConstructorElement}
        type="bottom"
        isLocked={true}
        text="Краторная булка N-200i (низ)"
        price={200}
        thumbnail={bun2}
      />
      </div>
      <p className={clsx(
            styles.burgerConstructorTotal,
            'mr-10',
          )}>
           
          
          <div className = {styles.MakeOrderBtn}>
          <span className={`text text_type_digits-medium mr-2`}>450</span>
            <CurrencyIcon type="primary" />
          <Button type="primary" size="large" onClick={showOrderDetails}>
            Оформить заказ
          </Button>
          </div>
          </p>
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
