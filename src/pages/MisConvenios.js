/*import React from 'react'

function Misconvenios() {
    return (
        <div className='misconvenios'>
            <h1>Mis Convenios</h1>
        </div>
    )
}

export default Misconvenios

*/

import React from 'react'
import { Icon, Table, Button } from 'semantic-ui-react'
import _ from 'lodash'
import Navbar from "../componentsConvenio/Navbar/Navbar";
import Formulario1 from "../documentos/formulario-empresa.docx";
import {
  EmpresasBtn,
  EmpresasBtnLink,

} from "../components/Empresas/EmpresasElements.js";



const MisConvenios = () => (

  

<left>
<Navbar/>
<Table celled>
  <center>
  <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Nombre</Table.HeaderCell>
        <Table.HeaderCell>Estado</Table.HeaderCell>
        <Table.HeaderCell>Comentario</Table.HeaderCell>
        <Table.HeaderCell>Cupón
        <Icon color ='black' name='vcard'  size='large'/>
        </Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>Coopeuch </Table.Cell>
        <Table.Cell>
        <Icon color='green' name='checkmark' size='large' />
            Habilitado
            </Table.Cell>
        <Table.Cell>Sin comentarios
        </Table.Cell>
        <Table.Cell>
        <EmpresasBtn>
          <EmpresasBtnLink href= {Formulario1} download="formulario">Descargar Voucher</EmpresasBtnLink> {/*Aquí descargar a los requisitos para la empresa */}
        </EmpresasBtn>
        
        </Table.Cell>
      </Table.Row>

      <Table.Row warning>
        <Table.Cell>Cosmetica y Belleza</Table.Cell>
        <Table.Cell>
          <Icon name='attention' size='large' />
          Pendiente
        </Table.Cell>
        <Table.Cell>Sin Comentarios</Table.Cell>
      </Table.Row>
      <Table.Row warning >
        <Table.Cell>Quintero Camping</Table.Cell>
        <Table.Cell>
            <Icon name='attention' size ='large' />
            Pendiente
        </Table.Cell>
        
        <Table.Cell>
          Sin comentarios
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Caja Los Andes</Table.Cell>
        <Table.Cell>
        <Icon color ='red' name='close'  size='large'/>
            No Habilitado
    
        </Table.Cell>
        <Table.Cell>Sin Comentarios</Table.Cell>
      </Table.Row>

      <Table.Row>
        <Table.Cell>Optica Viña del Mar </Table.Cell>
        <Table.Cell>
        <Icon color='green' name='checkmark' size='large' />
            Habilitado
            </Table.Cell>
        <Table.Cell>Sin Comentarios</Table.Cell>
        <Table.Cell>
        <EmpresasBtn>
          <EmpresasBtnLink href= {Formulario1} download="formulario">Descargar Voucher</EmpresasBtnLink> {/*Aquí descargar a los requisitos para la empresa */}
        </EmpresasBtn>

    
        </Table.Cell>
      </Table.Row>
    </Table.Body>
    </center>
  </Table>
  </left>
)

export default MisConvenios