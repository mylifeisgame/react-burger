import { React, useState } from "react";
import ReactDOM from "react-dom";
import clsx from "clsx";
import bun2 from "../../images/bun-02.png";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './burger-constructor.module.css'

const BurgerConstructor = () => {
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
    </div>
  );
};
export default BurgerConstructor;
