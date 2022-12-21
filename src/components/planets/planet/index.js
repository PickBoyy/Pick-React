import React from "react";
import GrayImg from "../../shared/gray_img";
import Descri from "../../shared/descri";

const Planet = (props) => {
    return (
        <div onClick={() => props.clickOnPlanet(props.nome)}>
            <hr/>
            <h4>{props.nome}</h4>
            <hr/>
            <Descri descri = {props.descricao} link = {props.link}/>
            <GrayImg img_url ={props.img_url}/>,
        </div>
    )
}
export default Planet;