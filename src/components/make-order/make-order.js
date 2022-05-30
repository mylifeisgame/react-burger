import { React, useState } from "react";
import ReactDOM from "react-dom";
import clsx from "clsx";
import styles from "./header-link.module.css";
import {Button} from "@ya.praktikum/react-developer-burger-ui-components";

const MakeOrder = ({ icon,total,caption }) => {
  const [Hovered, setHover] = useState(false);
  const MouseHover = () => setHover(!Hovered);
  return (
      <>
    <p
      className={clsx(
        styles.MakeOrderPrice,
        "text-type_main-medium"
      )}
    
    >
      </p>
      <Button type="primary" size="medium" className = {styles.MakeOrderBtn}>
  {caption}
</Button>
     
      <div
        className={clsx(
          styles.HeaderLinkCaption,
          Hovered
            ? "text text_type_main-default text_color_inactive"
            : "text text_type_main-default"
        )}
      >
        {caption}
      </div>
    </>
  );
};
export default HeaderLink;
