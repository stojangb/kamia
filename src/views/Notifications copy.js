//Se importan los archivos necesarios
import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AddAlert from "@material-ui/icons/AddAlert";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Button from "components/CustomButtons/Button.js";
import SnackbarContent from "components/Snackbar/SnackbarContent.js";
import Snackbar from "components/Snackbar/Snackbar.js";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";

const styles = {
  button: {
    borderRadius: 30,
    textAlign: 'center',
  },
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
    }
  },
  cardTitleWhite: {
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  }
};
const useStyles = makeStyles(styles);
/**
 * Este componente sirve para que el usuario configure las notificaciones de Kamia
 **/












 
export default function Notifications() {
  const classes = useStyles();
  return (
    <Card>
      <GridItem>
        <Card>
          <CardHeader color="success">
            <h4 className={classes.cardTitleWhite}>Últimas notificaciones</h4>
            <p className={classes.cardCategoryWhite}>
            </p>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="success"
              tableHead={["Nombre", "Número"]}
              tableData={[
                ["Alertas de movimiento", " 2"],
                ["Reconocimiento de patente", " 1"],
                ["Movimiento nocturno", " 7"],
                ["Agitación inesperada de la cámara", " 2"]
              ]}
            />
          </CardBody>
        </Card>
      </GridItem>
      <GridItem center alignItems="center" justify="center">
        <Button className={classes.button} variant="contained" color="primary">
          Ver detalles
</Button>
      </GridItem>
      <GridItem>
        <Card>
          <CardHeader color="warning">
            <h4 className={classes.cardTitleWhite}>Configuración</h4>
            <p className={classes.cardCategoryWhite}>
              ¿Cómo desea recibir las notificaciones?
              </p>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="warning"
              tableHead={["Nombre", "A través de"]}
              tableData={[
                ["Alertas de movimiento", "sms"],
                ["Reconocimiento de patente", "Correo"],
                ["Movimiento nocturno", "sms"],
                ["Agitación inesperada de la cámara", "Llamada"]
              ]}
            />
          </CardBody>
        </Card>
      </GridItem>
    </Card>
  );
}
