import React from "react";
import GrayImg from "../../shared/gray_img";

const Planet = (props) => {
    return (
        <div>
            <hr/>
            <h4>{props.nome}</h4>
            <hr/>
            <p>{props.descricao}</p>
            <GrayImg img_url ={props.img_url}/>,
        </div>
    )
}
export default Planet;