import { React, useState } from "react";
import ReactDOM from "react-dom";
import clsx from "clsx";
import styles from "./header-link.module.css";
import {} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from 'prop-types';
const HeaderLink = ({ icon, first, last, caption, iconHovered }) => {
  const [Hovered, setHover] = useState(false);
  const MouseHover = () => setHover(!Hovered);
  return (
    <a
      className={clsx(
        styles.HeaderLink,
        !first && "pl-4",
        !last && "pr-3",
        "pt-4",
        "pb-4",
        "text-type_main-default"
      )}
      onMouseEnter={MouseHover}
      onMouseLeave={MouseHover}
    >
      <div className={clsx(styles.HeaderLinkIcon, "mr-2")}>
        {Hovered ? iconHovered : icon}
      </div>
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
    </a>
  );
};

HeaderLink.propTypes = {
  caption: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  iconHovered: PropTypes.element.isRequired,
  first: PropTypes.bool,
  last: PropTypes.bool,
}
export default HeaderLink;