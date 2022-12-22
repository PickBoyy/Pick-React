import React from "react";
import GrayImg from "../../shared/gray_img";
import Descri from "../../shared/descri";

const Planet = (props) => {
    const nomes = ['a','b','c','d']

  let title = ''
  if (props.title_whith_underline)
    title = 
      <h4>
        <u>{props.nome}</u>
      </h4>
    
  else title = <h4>{props.nome}</h4>;
  return (
    <div>
      {title}
      <hr />
      <Descri descri={props.descricao} link={props.link} />
      <GrayImg img_url={props.img_url} gray={props.gray} />,
    </div>
  );
};
export default Planet;
