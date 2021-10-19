import React, { useState } from "react";
import Navbar from "../componentsAdministrador/Navbar/Navbar";

import { makeStyles, withStyles } from "@material-ui/core/styles";

import GlobalStyle from "../globalStyles";
import AdmSolicitud1 from "../componentsConvenio/AdmSolicitud/AdmSolicitud1";






const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },
  }));

function AdmSolicitud() {

  const classes = useStyles();
  const [buttonPopup, setButtonPopup] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

 return (

        <div className='admsolicitud'>

            <Navbar />
            <GlobalStyle />
            
            
            <AdmSolicitud1 />
           
            
            
            <center>
               
            </center>
        </div>
    )
}

export default AdmSolicitud