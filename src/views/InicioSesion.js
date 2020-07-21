//Se importan los archivos necesarios
import React, { useState, useEffect, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import TextField from '@material-ui/core/TextField';
import { Redirect, Link, BrowserRouter, withRouter } from "react-router-dom";

//Se importan los modulos de firebase 
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';
import { useFirebaseApp, useUser } from 'reactfire';


export default function IniciarSesion(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const firebase = useFirebaseApp();
  const user = useUser();
  const submit = () => { firebase.auth().createUserWithEmailAndPassword(email, password).catch(err =>{
      
    setError(err.message)

  })
}
  const login = () => { 
    
    firebase.auth().signInWithEmailAndPassword(email, password).catch(err =>{
      
      setError(err.message)

    });

  }
  
  const logout = async () => { await firebase.auth().signOut(); }
   firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
   window.location = '/admin/dashboard';
      }
    });



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
  const useStyles = makeStyles(styles);
  const classes = useStyles();


  return (
    <div>
     
      <br />
      {user && "Email:"} {user && user.email}
      <GridContainer>
        <GridItem xs={12} sm={12} md={8}>
          {user == null &&
            <Card>
              <CardHeader color="primary">
                <h4 className={classes.cardTitleWhite}>Iniciar Sesión</h4>
                <p className={classes.cardCategoryWhite}>También puedes crear una cuenta.</p>
              </CardHeader>
              <CardBody>
                <GridContainer>


                  <GridItem xs={12} sm={12} md={4}>
                    <form className={classes.root} noValidate autoComplete="off">
                      <TextField id="email" label="Email" type="email"
                        onChange={(ev) => setEmail(ev.target.value)} />
                    </form>
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={6}>
                    <form className={classes.root} noValidate autoComplete="off">
                      <TextField id="password" label="Contraseña" type="password"
                        onChange={(ev) => setPassword(ev.target.value)} />
                        
                    </form>
                    {error}
                  </GridItem>
                </GridContainer>
              </CardBody>
              <CardFooter>
                <GridItem>
                  <Button onClick={submit} color="primary">Crear Cuenta</Button>
                  <Button onClick={login} color="primary">Iniciar Sesión</Button>

                </GridItem>
              </CardFooter>
            </Card>}

        </GridItem>
      </GridContainer>
    

    </div>
  );
          }