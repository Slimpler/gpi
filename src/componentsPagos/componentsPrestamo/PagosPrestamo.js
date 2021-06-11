//Aquí se muestra todo lo que tiene que ver con los ingresos
//de la asociación distintos de los pagos que hacen los afiliados
//Ejemplo: Subvenciones.

import * as React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import styled from "styled-components";
import Formulario3 from "../../documentos/formulario-prestamo.docx";

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
}));



function PagosAsociacion() {
  
  const classes = useStyles();

  return (
      <form className={classes.root} noValidate autoComplete="off">
          <TextField id="standard-basic" label="RUT" variant="outlined" />
          <TextField id="filled-basic" label="Monto" variant="outlined" />
          <TextField id="outlined-basic" label="Cuotas" variant="outlined" />

          <PrestamosBtnLink href= {Formulario3} download="formulario"> Imprimir formulario </PrestamosBtnLink>
      </form>
  );
}


export default PagosAsociacion;

