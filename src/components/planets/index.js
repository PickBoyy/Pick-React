import React, { Fragment } from "react";
import Planet from "./planet";

const Planets = () => {
  return (
    <Fragment>
      <h3>Planet List</h3>
      <Planet
        nome="Jupiter"
        // descricao="Júpiter é o maior planeta do Sistema Solar, tanto em diâmetro quanto em massa, e é o quinto mais próximo do Sol. Possui menos de um milésimo da massa solar, contudo tem 2,5 vezes a massa de todos os outros planetas em conjunto"
        link="https://pt.wikipedia.org/wiki/J%C3%BApiter_(planeta)"
        img_url="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Jupiter_and_its_shrunken_Great_Red_Spot.jpg/300px-Jupiter_and_its_shrunken_Great_Red_Spot.jpg"
        gray={true}
      />

      <Planet
        nome="Saturno"
        descricao="Saturno é o sexto planeta a partir do Sol e o segundo maior do Sistema Solar atrás de Júpiter. Pertencente ao grupo dos gigantes gasosos, possui cerca de 95 massas terrestres e orbita a uma distância média de 9,5 unidades astronômicas."
        //link
        img_url="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Saturn_during_Equinox.jpg/300px-Saturn_during_Equinox.jpg"
        title_with_underline = {true}
        gray={false}
      />
    </Fragment>
  );
};
export default Planets;
