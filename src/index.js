// Se importan los archivos necesarios
import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import 'firebase/auth';
import {  useUser } from 'reactfire';
// Admin, layour principal
import Admin from "layouts/Admin.js";
import User from "layouts/User.js";
//Se importan los modulos de firebase
import { FirebaseAppProvider } from 'reactfire';
import { DB_CONFIG } from './config/config.js'
import "assets/css/material-dashboard-react.css?v=1.8.0";

const hist = createBrowserHistory();

 //const user = useUser();
ReactDOM.render(




//Se envuelve la aplicación con firebase, para tener la aplicación bajo firebase, y modificar estado del usuario, etc
<FirebaseAppProvider firebaseConfig={DB_CONFIG}>
  
  {//Suspense muestra Conectando... mientras la app se conecta con firebase
  }
  <Suspense fallback={<div>Conectando...</div>}>

    {//Aquí se pasan las rutas a la aplicación con react - router
    }
  <Router history={hist}>
    {//Este Switch fija el marco de trabajo, es decir para todo /admin el componente Admin se renderizara
    }
      <Switch>
      <Route path="/admin" component={Admin} />
      <Route path="/user" component={User} />
      <Redirect from="/" to="/admin/dashboard" />
   

   {/*   {!user && <Redirect from="/admin" to="/user/conection" />} */}

    </Switch>

  </Router>
   </Suspense>
  </FirebaseAppProvider>
  ,
  document.getElementById("root")
);
