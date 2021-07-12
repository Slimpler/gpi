import React, { Component } from "react";
import {
  Button,
  Input,
  Footer,
  Card,
  CardBody,
  CardImage,
  CardTitle,
  CardText
} from "mdbreact";

import blankImg from "./blank.gif";

import "./style.css";
import "./flags.min.css";

import countriesList from "./countries.json";

class App extends Component {
  state = {
    search: ""
  };

  renderCountry = country => {
    const { search } = this.state;
    var code = country.code.toLowerCase();

    /*if( search !== "" && country.name.toLowerCase().indexOf( search.toLowerCase() ) === -1 ){
        return null
    }*/

    return (
      <div className="col-md-4" style={{ marginTop: "20px" }}>
        <Card>
          <CardBody>
            <p className="">
              <img
                src={blankImg}
                className={"flag flag-" + code}
                alt={country.name}
              />
            </p>
            <CardTitle title={country.name}>
              {country.name.substring(0, 20)}
              {country.name.length > 20 && "..."}
            </CardTitle>
          </CardBody>
        </Card>
      </div>
    );
  };

  onchange = e => {
    this.setState({ search: e.target.value });
  };

  render() {
    const { search } = this.state;
    const filteredCountries = countriesList.filter(country => {
      return country.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    });

    return (
      <div className="flyout">
        <main style={{ marginTop: "0rem" }}>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <br></br>
                <center>
              
                </center>
              </div>
              <div className="col">
                <Input
                  label="Buscar"
                  icon="search"
                  onChange={this.onchange}
                />
              </div>
              <div className="col" />
            </div>
            <div className="select">
                <select
                className="custom-select" aria-label="Filter Countries By Countries">
                <option value="All">Filtrar</option>
                <option value="Africa">Salud</option>
                <option value="Americas">Deporte</option>
                <option value="Asia">Crédito</option>
                <option value="Europe">Hogar</option>
            </select> 
            <span className="focus"></span>
          </div>
            <div className="row">
              {filteredCountries.map(country => {
                return this.renderCountry(country);
              })}
            </div>
          </div>
        </main>
        <Footer color="white">
            <br></br>
        </Footer>
      </div>
    );
  }
}

export default App;
