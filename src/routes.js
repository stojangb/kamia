//Importar Archivos necesarios de material-ui
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import CameraAlt from "@material-ui/icons/CameraAlt";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
import PresentToAll from "@material-ui/icons/PresentToAll";
import GetApp from "@material-ui/icons/GetApp";
import Share from "@material-ui/icons/Share";
import Equalizer from "@material-ui/icons/Equalizer"
import PowerSettingsNewOutlinedIcon from '@material-ui/icons/PowerSettingsNewOutlined';
//Importar componentes necesarios
import DashboardPage from "views/Dashboard.js";
import UserProfile from "views/UserProfile.js";
import MisCamaras from "views/MisCamaras.js";
import Maps from "views/Maps.js";
import Descargar from "views/Descargar.js";
import Entrenamiento from "views/Entrenamiento.js";
import Compartir from "views/Compartir.js";
import NotificationsPage from "views/Notifications.js";
import InicioSesion from "views/InicioSesion.js";
import Datos from "views/Datos.js";
import CerrarSesion from "views/CerrarSesion";
import MostrarCamara from "views/MostrarCamara";
import shareQrCode from "views/shareQrCode";


//Estos son los elementos del menú
export const dashboardRoutes = [
  {
    //icono panel
    path: "/dashboard",
    name: "Panel",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin"
  },

  {
    //icono camaras
    path: "/miscamaras",
    name: "Mis Cámaras",
    icon: CameraAlt,
    component: MisCamaras,
    layout: "/admin"
  },
  {
    //icono equalizer
    path: "/Datos",
    name: "Datos",
    icon: Equalizer,
    component: Datos,
    layout: "/admin"
  },
  {
    //icono compartir
    path: "/Compartir",
    name: "Compartir",
    icon: Share,
    component: Compartir,
    layout: "/admin"
  },
  {
    //icono descarga
    path: "/descargar",
    name: "Descargar vídeos",
    icon: GetApp,
    component: Descargar,
    layout: "/admin"
  },
  {
    //icono mapas
    path: "/Maps",
    name: "Ubicación de cámaras",
    icon: LocationOn,
    component: Maps,
    layout: "/admin"
  },
  {
    //icono entrenamiento
    path: "/entrenamiento",
    name: "Entrenamiento",
    icon: PresentToAll,
    component: Entrenamiento,
    layout: "/admin"
  },
 
    {
    //icono perfil
    path: "/user",
    name: "Perfil",
    icon: Person,
    component: UserProfile,
    layout: "/admin"
  } ,
  {
    //icono notificaciones
    path: "/notifications",
    name: "Notificaciones",
    icon: Notifications,
    component: NotificationsPage,
    layout: "/admin"
  },
  {
    //icono notificaciones
    path: "/desconection",
    name: "Cerrar sesión",
    icon: PowerSettingsNewOutlinedIcon,
    component: CerrarSesion,
    layout: "/admin"
  }
];


export const dashboardRoutes2 = [
  {
    //Conection!
    path: "/conection",
    name: "Por favor inicia sesión desde la página principal: www.daikiry.cl",
    icon: Notifications,
    component: InicioSesion,
    layout: "/user"
  }]
//SubRutas, acceso por componentes
  export const dashboardRoutes3 = [
    {
      //Camara Seleccionada
      path: "/camara/:id",
      name: "hola",
      component: MostrarCamara,
      layout: "/admin"
    },
    {
      //Camara Seleccionada
      path: "/camaracompartir",
      name: "hola",
      component: shareQrCode,
      layout: "/admin"
    }
  ]