//Se importan los Archivos necesarios
import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";
import { makeStyles } from "@material-ui/core/styles";
import Navbar from "components/Navbars/Navbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import { dashboardRoutes, dashboardRoutes2, dashboardRoutes3 } from "routes.js";
import styles from "assets/jss/material-dashboard-react/layouts/adminStyle.js";
import bgImage from "assets/img/sidebar-1.jpg";
import logo from "assets/img/reactlogo.png";
import 'firebase/auth';
import {  useUser } from 'reactfire';

let ps;
const switchRoutes = (

  <Switch>

    {dashboardRoutes.map((prop, key) => {
      if (prop.layout === "/admin") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      }
      return null;
    })}


    {dashboardRoutes3.map((prop, key) => {
      if (prop.layout === "/admin") {
        return (
          <Route
            path={prop.layout + prop.path} 
            exact
            strict
            component={prop.component}
            key={key}
          />
        );
      }
      return null;
    })}
  </Switch>
);
const useStyles = makeStyles(styles);
export default function Admin({ ...rest }) {
      const user = useUser();
  // Estilos
  const classes = useStyles();
  const mainPanel = React.createRef();
  // Estados y funciones
  const [image] = React.useState(bgImage);
  const [color] = React.useState("blue");
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const getRoute = () => {
    return window.location.pathname !== "/admin/maps";
  };
  const resizeFunction = () => {
    if (window.innerWidth >= 960) {
      setMobileOpen(false);
    }
  };
  // Iniciar y destruir la aplicación "PerfectScrollbar" que sirve para mejorar el diseño de la scrollbar
  React.useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(mainPanel.current, {
        suppressScrollX: true,
        suppressScrollY: false
      });
      document.body.style.overflow = "hidden";
    }
    window.addEventListener("resize", resizeFunction);
    // Limpia el proceso de PerfectScrollbar
    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
      }
      window.removeEventListener("resize", resizeFunction);
    };
  }, [mainPanel]);
  return (
    <div className={classes.wrapper}>
        {!user && <Redirect from="/admin" to="/user/conection" />}
      <Sidebar
        routes={dashboardRoutes}
        logoText={"KamIA"}
        logo={logo}
        image={image}
        handleDrawerToggle={handleDrawerToggle}
        open={mobileOpen}
        color={color}
        {...rest}
      />
      <div className={classes.mainPanel} ref={mainPanel}>
        <Navbar
          routes={dashboardRoutes}
          handleDrawerToggle={handleDrawerToggle}
          {...rest}
        />

        {getRoute() ? (
          <div className={classes.content}>
            <div className={classes.container}>{switchRoutes}</div>
          </div>
        ) : (
          <div className={classes.map}>{switchRoutes}</div>
        )}
     

      </div>
    </div>
  );
}
