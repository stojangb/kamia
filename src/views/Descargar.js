//Se importan los componentes necesarios
import React from "react";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import { makeStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';


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
 * Este componente muestra los vídeos de las cámaras y una opción para descargarlos.
 **/
export default function MisCamaras() {
  const classes = useStyles();
  return (
    <div>
      <GridContainer>
        <GridItem xs spacing={3}>

          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={require('../img/fotoseg.jpg')}
                title="segcam"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Cámara 1
          </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Cámara enfocando petrolera y gas.
          </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Descargar
        </Button>
              <Button size="small" color="primary">
              </Button>
            </CardActions>
          </Card>
        </GridItem>
        <GridItem xs>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                height0="200px"
                image={require('../img/fotoseg2.jpg')}
                title="segcam"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Cámara 4
          </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Cámara enfocando fierros de empresa.
          </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Descargar
        </Button>
              <Button size="small" color="primary">

              </Button>
            </CardActions>
          </Card>


        </GridItem>

      </GridContainer>

      <Button className={classes.button} variant="outlined" color="secondary">
        Descargar Todos los vídeos
</Button>


    </div>
  );
}
