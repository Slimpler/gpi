//Aquí está todo lo que tiene que ver con generar un préstamo

import * as React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import styled from "styled-components";
import Formulario3 from "../../documentos/formulario-prestamo.docx";
import Typography from '@material-ui/core/Typography';

const PrestamosBtnLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  background: #7cf1b6;
  white-space: nowrap;
  padding: 10px 25px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #90ee90;
    color: #010606;
  }
`;


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  boton: {
    margin: '30px 220px 10px'
  },
}));

const textStyle = {
  width: '100%',
  margin: '0px 10px 50px'
};

function PagosAsociacion() {
  
  const classes = useStyles();

  return (
      <div>
        <div style={textStyle}>
          <Typography variant="h4" gutterBottom>
            TEST DE TÍTULO
          </Typography>
          <Typography variant="body1" gutterBottom>
            Test de descripcion tipo body1
          </Typography>
        </div>

      <form className={classes.root} noValidate autoComplete="off">
          <TextField id="standard-basic" label="RUT" variant="outlined" />
          <TextField id="filled-basic" label="Monto" variant="outlined" />
          <TextField id="outlined-basic" label="Cuotas" variant="outlined" />
          <div className={classes.boton}>
          <PrestamosBtnLink href= {Formulario3} download="formulario-prestamo.docx"> Generar Voucher </PrestamosBtnLink>
          </div>
      </form>
    </div>
  );
}


export default PagosAsociacion;

