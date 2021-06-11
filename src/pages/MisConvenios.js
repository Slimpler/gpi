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
import { Icon, Table } from 'semantic-ui-react'
import _ from 'lodash'
/*import Navbar from "../componentsConvenio/Navbar";*/


  

/*<Navbar />*/

const MisConvenios = () => (

 
    


  <Table celled> 
  


  
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Nombre</Table.HeaderCell>
        <Table.HeaderCell>Estado</Table.HeaderCell>
        <Table.HeaderCell>Comentario</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>Federer Court </Table.Cell>
        <Table.Cell>
        <Icon color='green' name='checkmark' size='large' />
            Habilitado
            </Table.Cell>
        <Table.Cell>Sin comentarios</Table.Cell>
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
        <Table.Cell>Travell</Table.Cell>
        <Table.Cell>
        <Icon color ='red' name='close'  size='large'/>
            No Habilitado
    
        </Table.Cell>
        <Table.Cell>Sin Comentarios</Table.Cell>
      </Table.Row>

      <Table.Row>
        <Table.Cell>Dental Care</Table.Cell>
        <Table.Cell>
        <Icon color='green' name='checkmark' size='large' />
            Habilitado
            </Table.Cell>
        <Table.Cell>Sin Comentarios</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>


  
)


  
 



export default MisConvenios