import React from "react";
import ReactDOM from "react-dom";
import {
  BurgerIcon,
  ListIcon,
  ProfileIcon,
  Logo,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./app-header.module.css";
import { HeaderLink } from "../index.js";
import clsx from "clsx";

const AppHeader = () => {
  return (
    <nav className={clsx(styles.appHeader, "pt-4", "pb-6")}>
      <div className={clsx(styles.firstTwoBtns)}>
        <HeaderLink
          caption="Конструктор"
          icon={<BurgerIcon type="primary" />}
          iconHovered={<BurgerIcon type="secondary" />}
          first
        />
        <HeaderLink
          caption="Лента заказов"
          icon={<ListIcon type="primary" />}
          iconHovered={<ListIcon type="secondary" />}
        />
      </div>
      <div className={clsx(styles.Logo)}>
        <Logo />
      </div>
      <div className={clsx(styles.personalInfo)}>
        <HeaderLink
          caption="Личный кабинет"
          icon={<ProfileIcon type="primary" />}
          iconHovered={<ProfileIcon type="secondary" />}
          last
        />
      </div>
    </nav>
    // <nav className = {styles.nav}>
    //     <div> <button className = {styles.button}>
    //     <BurgerIcon type="primary"/>
    //     <p className = {styles.p}>Конструктор</p>
    //   </button>
    //   <button className = {styles.button}>
    //     <ListIcon type="primary"/>
    //     <p className = {styles.p}>Лента заказов</p>
    //   </button></div>
    //   <Logo/>
    //   <button className = {styles.button}>
    //     <ProfileIcon type="primary"/>
    //     <p className = {styles.p}>Личный кабинет</p>
    //   </button>
    // </nav>
  );
};
export default AppHeader;
