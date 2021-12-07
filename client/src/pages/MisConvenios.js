import React from 'react'
import Navbar from "../componentsAfiliados/Navbar/Navbar";

import { makeStyles, withStyles } from "@material-ui/core/styles";

import GlobalStyle from "../globalStyles";
import MConvenios from "../componentsAfiliados/MConvenios";


const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },
  }));

function ConvenioAfiliado() {

 return (

        <div className='convenioafiliado'>

            <Navbar />
            <GlobalStyle />

            <MConvenios />
        
            <center>
            </center>
        </div>
    )
}

export default ConvenioAfiliado