import { Link } from "react-router-dom";
import React from "react";

function HeaderNavLink(props) {
  return (
    <Link to={props.link}>
      <i className={`fad ${props.classname}`}></i>
      <span>{props.title}</span>
    </Link>
  );
}

export default HeaderNavLink;
