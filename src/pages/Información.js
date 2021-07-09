

//import React from 'react'
import Navbar from "../componentsConvenio/Navbar";

import React from 'react'
import { Item, Icon, Container, Header, Grid, Segment, Image } from 'semantic-ui-react'


const ItemExampleContents = () => (
  <center>
    <div>
    <Container fluid>
      <Header as='h2'>  Contactos Recomendados</Header>
      <p>
        
      </p>
      
    </Container>
  </div>

  <Grid.Column width={6}>
        <Segment>
        <Item>
    <Item.Image size='tiny' src='https://react.semantic-ui.com/images/wireframe/image.png' />
      <Item.Content verticalAlign='middle'> 
      
      <Icon name='phone' size='large' />
                :+56975447793
                <div>
                <Icon name='envelope outline' size='large' />
                <a href='mailto:jack@semantic-ui.com'>:feliperojasgonzalez@hotmail.com</a>
                
                </div> 
      
      </Item.Content>  
    
    </Item>
  
        </Segment>

        <Segment>

        <Item>
    <Item.Image size='tiny' src='https://react.semantic-ui.com/images/wireframe/image.png' />
      <Item.Content verticalAlign='middle'> 
      
      <Icon name='phone' size='large' />
                :+56975447793
                <div>
                <Icon name='envelope outline' size='large' />
                <a href='mailto:jack@semantic-ui.com'>:feliperojasgonzalez@hotmail.com</a>
                

                </div> 
      
      </Item.Content>  
    
    </Item>

        </Segment>

        <Segment>
        <Item>
    <Item.Image size='tiny' src='https://react.semantic-ui.com/images/wireframe/image.png' />
      <Item.Content verticalAlign='middle'> 
      
      <Icon name='phone' size='large' />
                :+56975447793
                <div>
                <Icon name='envelope outline' size='large' />
                <a href='mailto:jack@semantic-ui.com'>:feliperojasgonzalez@hotmail.com</a>
                

                </div> 
      
      </Item.Content>  
    
    </Item>
    
        </Segment>
      </Grid.Column>

  <Navbar/>

  </center>
  
)


export default ItemExampleContents