import React from "react";
import "./style.css"

const GrayImg = (props) => {
    return (
        <img className = {props.img ? 'img' : 'cimg'} alt="planeta" src={props.img_url} ></img>
    )
}
export default GrayImg