import React from 'react'
import Navbar from "../componentsAfiliados/Navbar/Navbar";
import Search from "../Search";

function BuscarConvenios() {
 return (
        <div className='buscarconvenios'>
            <Navbar />
            <center>
            <Search />
            </center>
        </div>
    )
}

export default BuscarConvenios