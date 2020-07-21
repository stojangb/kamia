//Se importan los Archivos necesarios
import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";
import { makeStyles } from "@material-ui/core/styles";
import {dashboardRoutes2 } from "routes.js";
import styles from "assets/jss/material-dashboard-react/layouts/userStyle.js";
import 'firebase/auth';
import {  useUser } from 'reactfire';

let ps;
const switchRoutes = (

  <Switch>
    
{dashboardRoutes2.map((prop, key) => {
      if (prop.layout === "/user") {
        return (
          <Route
            path={prop.layout}
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


  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const getRoute = () => {
    return window.location.pathname !== "/admin/maps";
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
    // Limpia el proceso de PerfectScrollbar
    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
      }
    };
  }, [mainPanel]);
  // Fin "PerfectScroller
  return (
    <div className={classes.wrapper}>
      
      {/*     {!user && <Redirect from="/admin" to="/admin/conectate" />}
 */}
      
         
         
     
      <div className={classes.mainPanel} ref={mainPanel}>
  

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
