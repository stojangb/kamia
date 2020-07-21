//Se importan los archivos necesarios
import React, { useState, useEffect  } from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import avatar from "assets/img/faces/marc.jpg";
import TextField from '@material-ui/core/TextField';
//Se importan los modulos de firebase 
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';
import { useFirebaseApp, useUser } from 'reactfire';
//Se crea la función que Guarda la información del usuario.
//Se definen los estilos
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


/**
 * Este componente sirve para configurar el usuario, además tener un usuario con datos fiables te permitirá acceder a más características de Kamia.
 **/

/*  Modificar */
function useGuardarDatosUsuario() {
  const [datosUsuario, setDatosUsuario] = useState([])
  const firebase = useFirebaseApp();
  const user = useUser();
  useEffect(() => {
    const unsubscribe = firebase
      .firestore()
      .collection('users')
      .doc(user.uid)
      .collection('informacionPersonal')
      .onSnapshot((snapshot) => {
        const nuevosDatos = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }))
        setDatosUsuario(nuevosDatos)
      })
    return () => unsubscribe()
  }, [])
  return datosUsuario
}

/* Fin modificar */




export default function UserProfile() {
  const user = useUser();
/* modificado */
const guardarDatosUsuario = useGuardarDatosUsuario('');
const firebase = useFirebaseApp();
const [nombre, setNombre] = useState('');
const [apellido, setApellido] = useState('');
const [ciudad, setCiudad] = useState('');
const [telefono, setTelefono] = useState('');
const [pais, setPais] = useState('');
const [codigopostal, setCodigoPostal] = useState('');
  /* fin modificado */


/*   modificado 2 */
  //Se guardan en la base de datos los datos de la Cámara.
   function onSubmit(e) {
    e.preventDefault()
    firebase
      .firestore()
      .collection('users')
      .doc(user.uid)
      .collection('informacionPersonal')
      .add({
      telefono, codigopostal, nombre, pais, apellido, ciudad, h  : parseInt(guardarDatosUsuario)
      })
      .then(() => {
        setNombre('')
        setApellido('')
        setCiudad('')
        setPais('')
        setTelefono('')
        setCodigoPostal('')
      })
  }
const db = firebase.firestore();
function borrarDatos(id,e){
  e.preventDefault();
db.collection('users').doc(user.uid).collection('informacionPersonal').doc(id).delete();
} 
/*   fin modificado 2 */
  const classes = useStyles();
  return (
    <div>
    
  
         
            
              <GridContainer> 
                
                    <GridItem xs={12} sm={12} md={8}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Editar Perfil</h4>
              <p className={classes.cardCategoryWhite}>Revisa los datos antes de guardar.</p>
            </CardHeader>
            <CardBody>
              <GridContainer>
              

              <form onSubmit={onSubmit} noValidate autoComplete="off">
       
              <GridItem xs={12} sm={12} md={12}>
                <TextField id="text" label="Nombre" type="text" value={nombre} onChange={e => setNombre(e.currentTarget.value)} />
              </GridItem>
              <GridItem xs={12} sm={12} md={12}>
                <TextField id="text" label="Apellido" type="text" value={apellido} onChange={e => setApellido(e.currentTarget.value)} />
              </GridItem>
              <GridItem xs={12} sm={12} md={12}>
                <TextField id="text" label="Teléfono" type="text" value={telefono} onChange={e => setTelefono(e.currentTarget.value)} />
              </GridItem>
              <GridItem xs={12} sm={12} md={12}>
                <TextField id="text" label="Ciudad" type="text" value={ciudad} onChange={e => setCiudad(e.currentTarget.value)} />
              </GridItem>       
              <GridItem xs={12} sm={12} md={12}>
                <TextField id="text" label="Pais" type="text" value={pais} onChange={e => setPais(e.currentTarget.value)} />
              </GridItem>
              <GridItem xs={12} sm={12} md={12}>
                <TextField id="text" label="Código Postal" type="text" value={codigopostal} onChange={e => setCodigoPostal(e.currentTarget.value)} />
              </GridItem>
              <br/>
                   <Button type="submit()" color="primary">Guardar</Button>
            </form> 

              </GridContainer>


            </CardBody>
            <CardFooter>
      
            </CardFooter>
          </Card>

       



      

        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card profile>
            <CardAvatar profile>
              <a href="#pablo" onClick={e => e.preventDefault()}>
                <img src={avatar} alt="..." />
              </a>
            </CardAvatar>
            <CardBody profile>    <ol>
            {guardarDatosUsuario.map((datosUsuario) =>
              <li key={datosUsuario.id}>
                <div className="informacion-entry">
                  <code className="informacion">
                 <br />   
              <p className={classes.description}> Nombre: {datosUsuario.nombre}</p>
              <p className={classes.description}> Apellido: {datosUsuario.apellido}<br /></p>
              <p className={classes.description}> Teléfono: {datosUsuario.telefono}<br /></p>
              <p className={classes.description}> Ciudad: {datosUsuario.ciudad}<br /></p>
              <p className={classes.description}> País: {datosUsuario.pais}<br /></p>
              <p className={classes.description}> Código Postal: {datosUsuario.codigopostal}<br /></p>
              <p className={classes.description}>{user.email}</p>
              <Button onClick={(e) => borrarDatos(datosUsuario.id, e)}   color="primary">Borrar información</Button>  
 
                  </code>
                </div>
              </li>
            )}
          </ol>
             
              
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
