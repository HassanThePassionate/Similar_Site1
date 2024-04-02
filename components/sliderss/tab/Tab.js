import style from "./tab.module.css";

const Tab = ({ title }) => {
  return <div className={style.tabs}>{title}</div>;
};

export default Tab;
