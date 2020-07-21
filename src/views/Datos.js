//Se importan los archivos necesarios
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(25),
      height: theme.spacing(25),
    },
  },
}));
/**
 * Este componente muestra los objetos reconocidos por las cámaras
 **/
export default function SimplePaper() {
  const classes = useStyles();
  //Objetos reconocidos:
  return (
    <div className={classes.root}>
      <Paper elevation={10} >
        <p>Objetos reconocidos:  "25/5/2025" <br />
          -Patente: kh jl 25<br />

          -Persona: Luis Muñoz  <br />
        </p>

      </Paper>
      <Paper elevation={10} >
        <p>Objetos reconocidos: "25/5/2015"<br />
          -Patente: kh jl 25<br />
          -Persona: Luis Muñoz   <br />
        </p>

      </Paper>
      <Paper elevation={10} >
        <p>Objetos reconocidos: "25/5/2005"<br />
          -Patente: kh jl 25<br />
          -Persona: Luis Muñoz  <br />
        </p>

      </Paper>
      <Paper elevation={10} >
        <p>Objetos reconocidos: "25/5/2020"<br />
          -Patente: kh jl 25<br />
          -Persona: Luis Muñoz <br />
        </p>

      </Paper>
      <Paper elevation={10} >
        <p>Objetos reconocidos: "25/4/2015"<br />
          -Patente: kh jl 25<br />
          -Persona: Luis Muñoz  <br />
        </p>

      </Paper>
      <Paper elevation={10} >
        <p>Objetos reconocidos: "25/5/2025"<br />
          -Patente: kh jl 25<br />
          -Persona: Luis Muñoz     <br />
        </p>

      </Paper>

    </div>
  );
}