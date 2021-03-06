import MainNavigation from "../MainNavigation/MainNavigation";
import classes from "./Layout.module.css";

const Layout = (props) => {
  return (
    <div>
      <MainNavigation></MainNavigation>
      <main className={classes.main}>{props.children}</main>
    </div>
  );
};

export default Layout;
