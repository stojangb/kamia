//Se importan los archivos necesarios
import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import TextField from '@material-ui/core/TextField';
//Se importan los modulos de firebase 
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';
import { useFirebaseApp, useUser } from 'reactfire';
//Se crea la función que muestra los datos de las cámaras
//user es el usuario de Kamia mientras que usuario es el usuario de las camaras.
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
function useCamaras() {
  const [camara, setCamara] = useState([])
  const firebase = useFirebaseApp();
  const user = useUser();
  useEffect(() => {
    const unsubscribe = firebase
      .firestore()
      .collection('users')
      .doc(user.uid)
      .collection('camaras')
      .onSnapshot((snapshot) => {
        const nuevaCamara = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }))
        setCamara(nuevaCamara)
      })
    return () => unsubscribe()
  }, [])
  return camara
}


/**
 * Este componente permite mostrar y agregar cámaras.
 **/
export default function MostrarCamaras(props) {
  const user = useUser();
  const camaras = useCamaras();
  const firebase = useFirebaseApp();
  const [ip, setIp] = useState('');
  const [nombre, setNombre] = useState('');
  const [ubicacion, setUbicacion] = useState('');
  const [usuario, setUsuario] = useState('');
  const [contraseña, setContraseña] = useState('');

  //Se guardan en la base de datos los datos de la Cámara.
  function onSubmit(e) {
    e.preventDefault()
    firebase
      .firestore()
      .collection('users')
      .doc(user.uid)
      .collection('camaras')
      .add({
        ip, nombre, ubicacion, usuario, contraseña: parseInt(camaras)
      })
      .then(() => {
        setIp('')
        setNombre('')
        setUbicacion('')
        setUsuario('')
        setContraseña('')
      })
  }
const db = firebase.firestore();
function borrarCamara(id,e){
  e.preventDefault();
db.collection('users').doc(user.uid).collection('camaras').doc(id).delete();
}



function mostrarCamara(e,nombre){
  e.preventDefault();
  window.location = '/admin/camara/:'+ nombre;
}

  const classes = useStyles();
  return (
    <div>
      <Card>
        <CardHeader color="primary">
          <h4 className={classes.cardTitleWhite}>Agregar Cámaras</h4>
          <p className={classes.cardCategoryWhite}>Revisa los datos antes de guardar.</p>
        </CardHeader>
        <CardBody>
          <GridContainer>
            <form onSubmit={onSubmit} noValidate autoComplete="off">
              <GridItem xs={12} sm={12} md={12}>
                <TextField id="text" label="IP" type="text" value={ip} onChange={e => setIp(e.currentTarget.value)} />
              </GridItem>
              <GridItem xs={12} sm={12} md={12}>
                <TextField id="text" label="Nombre" type="text" value={nombre} onChange={e => setNombre(e.currentTarget.value)} />
              </GridItem>
              <GridItem xs={12} sm={12} md={12}>
                <TextField id="text" label="Ubicación" type="text" value={ubicacion} onChange={e => setUbicacion(e.currentTarget.value)} />
              </GridItem>
              <GridItem xs={12} sm={12} md={12}>
                <TextField id="text" label="Usuario" type="text" value={usuario} onChange={e => setUsuario(e.currentTarget.value)} />
              </GridItem>
              <GridItem xs={12} sm={12} md={12}>
                <TextField id="text" label="Contraseña" type="text" value={contraseña} onChange={e => setContraseña(e.currentTarget.value)} />
              </GridItem>
              <br/>
              <Button type="submit()" color="primary">Agregar cámara</Button>
            </form>    
          </GridContainer>
          {/* Aquí se muestran las cámaras */}
          <ol>
            {camaras.map((camara) =>
              <li key={camara.id}>
                <div className="camara-entry">
                  <code className="camara">
                Nombre: {camara.nombre} <br />
                IP: {camara.ip}<br />
                Ubicación: {camara.ubicacion}  <br />    
                <Button onClick={(e) => mostrarCamara(e,camara.ip)}   color="primary">Mostrar cámara</Button>
     <Button onClick={(e) => borrarCamara(camara.id, e)}   color="primary">Borrar cámara</Button>  
                  </code>
                </div>
              </li>
            )}
          </ol>
        </CardBody>
      </Card>
       </div>
  )
};
