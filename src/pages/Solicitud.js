
import React, { useEffect, useState } from "react";
import ReactDOM from 'react-dom';
import Navbar from "../components/NavbarSoliticitud/index.js";


class Solicitud extends React.Component {
  
    constructor(props) {
      super(props);
      this.state = { items: [], text: '' };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    
  
    render() {
      return (
        
        <div> 
          <Navbar/>
          
          
           <center>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <h3>Consulte el estado de su solicitud</h3>
          
          <TodoList items={this.state.items} />
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="new-todo">
              Número de seguimiento <span></span>
            </label>
            <input
              id="new-todo"
              onChange={this.handleChange}
              value={this.state.text}
            />
            <span></span>
            <button>
            <span></span>  Aceptar<span></span>
            </button>
            
          </form>
          </center>
        </div>
        
      );
    }
  
    handleChange(e) {
      this.setState({ text: e.target.value });
    }
  
    handleSubmit(e) {
      e.preventDefault();
      if (this.state.text.length === 0) {
        return;
      }
      const newItem = {
        text: this.state.text,
        id: Date.now()
      };
      this.setState(state => ({
        items: state.items.concat(newItem),
        text: ''
      }));
    }
  }
  
  class TodoList extends React.Component {
    render() {
      return (
        <ul>
          {this.props.items.map(item => (
            <li key={item.id}>{item.text}</li>
          ))}
        </ul>
      );
    }
  }
  
/*   ReactDOM.render(
    <Solicitud />,
    document.getElementById('todos-example')
  ); */

  export default Solicitud;