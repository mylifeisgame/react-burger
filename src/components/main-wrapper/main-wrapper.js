import styles from "./main-wrapper.module.css";
const MainWrapper = ({ children }) => {
  console.log("children", children);
  return <div className={styles.mainWrapper}>{children}</div>;
};
export default MainWrapper;
