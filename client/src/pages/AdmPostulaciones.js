import React, { useState } from "react";
import Navbar from "../componentsAdministrador/Navbar/Navbar";

import { makeStyles, withStyles } from "@material-ui/core/styles";

import GlobalStyle from "../globalStyles";
import AdmPostulaciones1 from "../componentsConvenio/AdmPostulaciones/AdmPostulaciones1";




const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },
  }));

function AdmPostulaciones() {

  const classes = useStyles();
  const [buttonPopup, setButtonPopup] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

 return (

        <div className='admsolicitud'>

            <Navbar toggle={toggle} /> 
            <GlobalStyle />
            
           
            <AdmPostulaciones1 />
           
            
            
            <center>
               
            </center>
        </div>
    )
}

export default AdmPostulaciones