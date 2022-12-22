import React, { Fragment } from "react";

const Descri = (props) => {


  if (props.link) {
    return (
      <Fragment>
        <p>{props.descri}</p>
        <p>
          <a href={props.link} target= "_blank">{props.link}</a>
        </p>
      </Fragment>
    );
  } else {
    return (
        <Fragment>
      <p>
        <u>{props.descri}</u>
      </p>
    </Fragment>
    )
  }
};
export default Descri;
