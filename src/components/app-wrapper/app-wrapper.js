import styles from "./app-wrapper.module.css";
const AppWrapper = ({ children }) => {
  console.log("children", children);
  return <div className={styles.appWrapper}>{children}</div>;
};
export default AppWrapper;
