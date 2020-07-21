//Se importan los componentes necesarios
import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

//Se define el estilo
const styles = {
  root: {
    maxWidth: 345,
    flexGrow: 1,
    marginTop: 20,
    padding: 20,
  },
  media: {
    height: 180,
  },
  button: {

    marginTop: 20,
  },
};
const useStyles = makeStyles(styles);

/** 
 * Este componente guarda los siguientes datos de la cámara, ID, IP, Nombre, Ubicación, Usuario, Contraseña
 **/
export default function ComponenteCamara(props) {
  const camId = props.camId;
  const ubicacionCam = props.ubicacionCam;
  const ipCam = props.ipCam;
  const camaraUsuario = props.camaraUsuario;
  const camaraContraseña = props.camaraContraseña;
  function handleRemove(id) {
    props.removeCamera(id);
  }
  const classes = useStyles();
  return (
    <div>

      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={require('../img/fotoseg.jpg')}
            title="segcam"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {ipCam}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Cámara enfocando petrolera y gas. <br />
                  Ubicacion: {ubicacionCam}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Ver
        </Button>

          <Button onClick={() => handleRemove(camId)} size="small" color="primary">
            Borrar
        </Button>
        </CardActions>
      </Card>


    </div>

  );
};
ComponenteCamara.propTypes = {
  name: PropTypes.string
};

