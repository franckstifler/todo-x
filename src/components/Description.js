import React from "react";
import logo from "../logo.svg";
const Description = ({ cite, todos, username }) => (
  <div className="uk-container uk-flex-left@s uk-flex-wrap-top">
    <div className="uk-width-1-1">
      <img className="uk-text-left" src={logo} alt="user icon" width={50} height={50} />
    </div>
    <div className="uk-width-1-1">
      <h3 className="uk-margin-small">Hello, {username}.</h3>
    </div>
    <div className="uk-width-1-1">
      <p className="uk-text-left uk-text-small uk-text-muted uk-margin-remove">{cite}</p>
      <p className="uk-text-left uk-text-small uk-text-muted uk-margin-remove">You have { todos } tasks today.</p>
      <p className="uk-text-left uk-margin-xlarge-top uk-text-uppercase uk-text-bold">
        Today: October 12, 2017
      </p>
    </div>
  </div>
);

export default Description;
