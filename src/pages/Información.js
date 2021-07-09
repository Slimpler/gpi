//import React from 'react'
import Navbar from "../componentsConvenio/Navbar/Navbar";
import _ from 'lodash'
import React, { Component } from 'react'
import { Button, Card, Divider, Image, Placeholder, Icon, List } from 'semantic-ui-react'

const cards = [
  {
    width: '300%',
    top: '400%',
    Icon: 'id badge',
    date: 'Joined in 2013',
    header: 'Helen',
    description: 'Primer Contacto' ,
  },
  {
    Icon: 'id badge',
    date: 'Joined in 2013',
    header: 'Matthew',
    description: 'Segundo Contacto ',
    
  },
  {
    Icon: 'id badge',
    date: 'Joined in 2013',
    header: 'Molly',
    description: 'Tercer Contacto',
  },
]

export default class PlaceholderExampleCard extends Component {
  state = { loading: false }

  handleLoadingClick = () => {
    this.setState({ loading: true })

    setTimeout(() => {
      this.setState({ loading: false })
    }, 3000)
  }

  render() {
    const { loading } = this.state

    return (
      <>
      
      <center>
      <Navbar />
        <Button loading={loading} onClick={this.handleLoadingClick} primary>
          Actualizar
        </Button>
        <Divider />

        <Card.Group doubling itemsPerRow={1} stackable>
          {_.map(cards, (card) => (
            <Card key={card.header}>
              {loading ? (
                <Placeholder>
                  <Placeholder.Image square />
                </Placeholder>
              ) : (
                <Image src={card.avatar} />
              )}

              <Card.Content>
                {loading ? (
                  <Placeholder>
                    <Placeholder.Header>
                      <Placeholder.Line length='very short' />
                      <Placeholder.Line length='medium' />
                    </Placeholder.Header>
                    <Placeholder.Paragraph>
                      <Placeholder.Line length='short' />
                    </Placeholder.Paragraph>
                    
                  </Placeholder>
                ) : (
                  <>
                    <Card.Header>{card.header}</Card.Header>
                    <Card.Meta>{card.date}</Card.Meta>
                    <Card.Description>{card.description}</Card.Description>
                    
                  </>
                )}
              </Card.Content>

              <Card.Content extra>
                
                <Icon name='phone' size='large' />
                :+56975447793
                <div>
                <Icon name='envelope outline' size='large' />
                <a href='mailto:jack@semantic-ui.com'>:feliperojasgonzalez@hotmail.com</a>
                

                </div>
  
                
              </Card.Content>

              
            </Card>
          ))}
        </Card.Group>
        </center>
        <Navbar/>
      </>
    )
  }
}