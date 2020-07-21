//Se importan los archivos necesarios
import React, { useState, useEffect, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "components/CustomButtons/Button.js";
import { Redirect, Link, BrowserRouter, withRouter } from "react-router-dom";

//Se importan los modulos de firebase 
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';
import { useFirebaseApp, useUser } from 'reactfire';


export default function IniciarSesion(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const firebase = useFirebaseApp();
  const user = useUser();

  
  const logout = async () => { await firebase.auth().signOut(); }





  const styles = {
    cardCategoryWhite: {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    cardTitleWhite: {
      color: "#FFFFFF",
      marginTop: "0px",
      minHeight: "auto",
      fontWeight: "300",
      fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
      marginBottom: "3px",
      textDecoration: "none"
    }
  };
  firebase.auth().onAuthStateChanged(function(user) {
    if (!user) {

 window.location = '/user/conection';
    }else{
      
    }
  });
  const useStyles = makeStyles(styles);
  const classes = useStyles();


  return (
    <div>
     
      <br />
    
      {user && <Button onClick={logout} color="primary">Cerrar Sesion</Button>}
     <br/>
  Conectado como: {user && user.email}
    </div>
  );
          }