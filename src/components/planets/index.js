import { render } from "@testing-library/react";
import React, { Fragment } from "react";
import Planet from "./planet";

class Planets extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      planets: [
        {
          nome: "Jupiter",
          descri:
          "Júpiter é o maior planeta do Sistema Solar, tanto em diâmetro quanto em massa, e é o quinto mais próximo do Sol. Possui menos de um milésimo da massa solar, contudo tem 2,5 vezes a massa de todos os outros planetas em conjunto",
          link: "https://pt.wikipedia.org/wiki/J%C3%BApiter_(planeta)",
          img_url:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Jupiter_and_its_shrunken_Great_Red_Spot.jpg/300px-Jupiter_and_its_shrunken_Great_Red_Spot.jpg",
        },
        {
          nome: "Saturno",
          descri:
            "Saturno é o sexto planeta a partir do Sol e o segundo maior do Sistema Solar atrás de Júpiter. Pertencente ao grupo dos gigantes gasosos, possui cerca de 95 massas terrestres e orbita a uma distância média de 9,5 unidades astronômicas.",
          link: "https://pt.wikipedia.org/wiki/J%C3%BApiter_(planeta)",
          img_url:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Saturn_during_Equinox.jpg/300px-Saturn_during_Equinox.jpg",
        }
      ]
    };
  }
  removeLast = () => {
    let new_planets = [...this.state.planets]
    new_planets.pop()
    this.setState(state => ({
      planets: new_planets
    }))
  }
  duplicateLastPlanet = () => {
    let last_planet = this.state.planets[this.state.planets.length -1]
    this.setState(state => ({
      planets: [...this.state.planets, last_planet]
    }))
  }

  render() {
    return (
      <Fragment>
        <h3>Planet List</h3>
        <button onClick={this.removeLast}>Remove Last</button>
        <button onClick={this.duplicateLastPlanet}>Duplicate Last Planet</button>
        <hr/>
        {this.state.planets.map((planet) =>
        <Planet nome = {planet.nome}
        descricao = {planet.descri}
        img_url = {planet.img_url}
        link = {planet.link}
        />
        )}
      </Fragment>
    )
  }
} 


export default Planets;
