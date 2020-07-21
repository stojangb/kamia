//Se importan los modulos necesarios
import React, { useState } from "react";
import Map from 'pigeon-maps'
import Marker from 'pigeon-marker'
import Overlay from 'pigeon-overlay'

/**
 * Este componente muestra un mapa del mundo con la ubicación de todas las cámaras públicas disponibles en Kamia. 
 **/


 //Se muestra el mapa
export default function Maps () {

const [zoom, setZoom] = useState(5);


function mapTilerProvider (x, y, z, dpr) {
  return `https://b.tile.openstreetmap.org/${z}/${x}/${y}.png`
}
return (<div style={{textAlign: 'center'}}> 
   <Map provider={mapTilerProvider}  center={[-41.47, -72.94]} zoom={zoom} width={600} height={400}>
  <Marker anchor={[-41.47, -72.94]} payload={1} onClick={({ event, anchor, payload }) => {}} />

</Map>
<br/>
<form >
    <div>
    </div>
    <button></button>
  </form>
</div>)

}


