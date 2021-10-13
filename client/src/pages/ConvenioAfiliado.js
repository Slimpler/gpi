import React from 'react'
import Navbar from "../componentsAfiliados/Navbar/Navbar";
import ConveniosAfiliados1 from "../componentsAfiliados/ConveniosAfiliados/ConveniosAfiliados1";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import FormDialog from "../componentsConvenio/AgregarConvenioFinanciero";
import FormDialog1 from "../componentsConvenio/AgregarConvenioComercial";
import FormDialog2 from "../componentsConvenio/AgregarConvenioDescuento";
import GlobalStyle from "../globalStyles";
import ConvenioComercial from "../componentsConvenio/componentsComercial/convenioComercial";
import AgregarConvenioDescuento from "../componentsConvenio/componentsDescuento/convenioDescuento";
import ConvenioFinanciero from "../componentsConvenio/componentsFinanciero/convenioFinanciero";


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
            
            <FormDialog />
            <ConvenioFinanciero />
            <FormDialog1 />
            <ConvenioComercial />
            <FormDialog2 />
            <AgregarConvenioDescuento /> 
            
            
            <center>
               
            </center>
        </div>
    )
}

export default ConvenioAfiliado