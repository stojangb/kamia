//Se importan los componentes necesarios
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: 'none',
  },
}));
/**
 * Este componente sirve para entrenar a Kamia, así podrá reconocer a una persona específica.
 **/
export default function Entrenamiento() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridItem xs={12} sm={12} md={4}>
        <CustomInput
          labelText="Etiqueta Ej: Persona, Objeto, Animal"
          id="country"
          formControlProps={{
            fullWidth: true
          }}
        />
      </GridItem>
      <GridItem xs={12} sm={12} md={4}>
        <CustomInput
          labelText="Nombre Ej: Alfonso Jaramillo, Silla, Perro Blanco"
          id="country"
          formControlProps={{
            fullWidth: true
          }}
        />
      </GridItem>


      <input
        accept="image/*"
        className={classes.input}
        id="contained-button-file"
        multiple
        type="file"
      />

      <input accept="image/*" className={classes.input} id="icon-button-file" type="file" />
      <label htmlFor="icon-button-file">
        <IconButton color="primary" aria-label="upload picture" component="span">
          <PhotoCamera />
        </IconButton>
      </label>

      <Button size="small" color="primary">
        Guardar
        </Button>

    </div>
  );
}


