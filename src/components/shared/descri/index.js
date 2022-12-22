import React, { Fragment } from "react";

const Descri = (props) => {
  if(!props.descri)
  return null;

  if (props.link) {
    return (
      <Fragment>
        <p>{props.descri}</p>
        <p>
          <a href={props.link}>{props.link}</a>
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
