import React, { Fragment } from "react";

const Descri = (props) => {
    return (
     <Fragment>
        <p>{props.descri}</p>
        <p><a href={props.link}>{props.link}</a></p>
     </Fragment>
    )
}
export default Descri