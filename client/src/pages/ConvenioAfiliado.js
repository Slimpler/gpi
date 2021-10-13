import React from 'react'
import Navbar from "../componentsAfiliados/Navbar/Navbar";

import { makeStyles, withStyles } from "@material-ui/core/styles";

import GlobalStyle from "../globalStyles";
import ConvenioF from "../componentsAfiliados/ConvenioF";
import ConvenioC from "../componentsAfiliados/ConvenioC";
import ConvenioD from "../componentsAfiliados/ConvenioD";





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
            
            
            <ConvenioF />
            <ConvenioC />
            
            
            <ConvenioD/> 
            
            
            <center>
               
            </center>
        </div>
    )
}

export default ConvenioAfiliado