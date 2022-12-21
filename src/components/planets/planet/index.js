import React from "react";
import GrayImg from "../../shared/gray_img";
import Descri from "../../shared/descri";

const Planet = (props) => {
    return (
        <div>
            <hr/>
            <h4>{props.nome}</h4>
            <hr/>
            <Descri descri = {props.descricao}/>
            <GrayImg img_url ={props.img_url}/>,
        </div>
    )
}
export default Planet;