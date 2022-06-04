import { React, useState } from "react";
import ReactDOM from "react-dom";
import clsx from "clsx";
import PropTypes from "prop-types";
import styles from "./burger-ingridient.module.css";
import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
const BurgerIngredient = ({ name,price, img,onShow }) => {
    const [Hovered, setHover] = useState(false);
    const MouseHover = () => setHover(!Hovered);
  return (
    <div
    onClick={onShow}
      className={clsx(
        styles.BurgerIngridient,
        "pt-6",
        "pl-4",
        "pb-1",
        "pr-4",
        "text-type_main-default"
        
      )}
      onMouseEnter={MouseHover}
      onMouseLeave={MouseHover}
    >
        <img src = {img}/>
        <div className = {styles.BurgerIngridientPrice}>
     <p className="text text_type_digits-default">{price}</p>
     <CurrencyIcon type = "primary"/>
     </div>
      <div
        className={clsx(
          styles.BurgerIngridientname,
          Hovered
            ? "text text_type_main-default text_color_inactive"
            : "text text_type_main-default"
        )}
      >
        {name}
      </div>
    </div>
  );
};
BurgerIngredient.propTypes = {
  img: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  onShow: PropTypes.func.isRequired,
}
export default BurgerIngredient;
