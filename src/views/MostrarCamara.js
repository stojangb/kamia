//Se importan los archivos necesarios
import React, { useState, useEffect, Component } from "react";
import Iframe from 'react-iframe'
//Se importan los modulos de firebase 
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';
import { useFirebaseApp, useUser } from 'reactfire';

import * as tf from '@tensorflow/tfjs';
//Importando modelo TensorFlow


import * as mobilenet from '@tensorflow-models/mobilenet';


const img = require('../img/daniela.jpg')



 



class TensionFlow extends React.Component{
    async componentDidMount()  { 
    
    const model = await mobilenet.load();
    const predictions = await model.classify(img);

    console.log('Predictions: ');
console.log(predictions);
  }
  
  componentWillUnmount(){
    this.abortController.abort();
  }
}

export default function MostrarCamara(props){


  //Inicializando firebase
  const firebase = useFirebaseApp();
  const db = firebase.firestore();
  const user = useUser();
  //Declarando variables necesarias para obtener la IP de la cámara
  let posibleCamara = props.location.pathname  
  let empiezaIp = posibleCamara.indexOf(":");
  let terminaIp = posibleCamara.length;
  let ip = posibleCamara.substring(empiezaIp+1,terminaIp);
  
  //creando el objeto camara para la sesión.
  const [camaraSesion, setCamaraSesion] = useState([])


  let collectionCamaras = db.collection('users').doc(user.uid).collection('camaras');
  let listadoCamara = collectionCamaras.where('ip', '==', ip).get()
  .then(snapshot => {
    if (snapshot.empty) {
      console.log('No se han encontrado documentos');
      return;

    }
    snapshot.forEach(doc => {
     
const nuevaCamara = snapshot.docs.map((doc) => ({
  id: doc.id,
  ...doc.data()
}))
setCamaraSesion(nuevaCamara)

    });
    
  })
  .catch(err => {
    console.log('Error al obtener los documentos. ', err);
  });

  return(
    <div>



<ol>
            {camaraSesion.map((camara) =>
              <li key={camara.id}>
                <div className="camara-entry">
                  <code className="camara">
                Nombre: {camara.nombre} <br />
                IP: {camara.ip}<br />
                Ubicación: {camara.ubicacion}  <br />    
               
                  </code>
                </div>
              </li>
            )}
          </ol>
<Iframe 
url={'http://'+ip}
 width="720"
  height="560" 
  frameborder="0" 
  scrolling="yes"
  
/>

otra opcion: 
<a rel="nofollow" href="http://185.10.80.33:8082/" target="new">
<img id="image0" src="http://185.10.80.33:8082/cgi-bin/faststream.jpg?stream=half&fps=15&rand=COUNTER" class="img-responsive img-rounded detailimage" alt="" title="Click here to enter the camera located in Spain, region Catalonia, Sant Feliu De Guixol" />
</a>
    </div>
  )
}

