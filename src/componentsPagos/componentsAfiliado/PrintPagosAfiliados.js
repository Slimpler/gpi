import * as React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Box from '@material-ui/core/Box';

import styled from "styled-components";
import Pagos from "../../documentos/pagos.docx";
import FormDialog from "../../componentsPagos/componentsAfiliado/AgregarEmail"

/*
const PrintBtnLink = styled.a`
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
<PrintBtnLink href= {Pagos} download="pagos.docx"> Descargar Planilla </PrintBtnLink>
*/

const useStyles = makeStyles((theme) => ({
  /*root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },*/
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));



function PrintPagos() {
  
  const classes = useStyles();

  return (
        <Box display="flex" justifyContent="center" m={1} p={1}>
          <div className={classes.root}>
          
            <ButtonGroup
                orientation="vertical"
                color="primary"
                aria-label="vertical contained primary button group"
            >
            <Button variant="contained" href={Pagos} download="pagos.docx"> Descargar Planilla </Button>
            </ButtonGroup>
            <FormDialog/>
            
            </div>
            </Box>
  );
}


export default PrintPagos;

