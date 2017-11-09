import React from "react";
import PropTypes from "prop-types";

const Todo = () => {
  return (
    <div className="uk-grid-small" data-uk-grid>
      <div className="uk-width-1-6">
        <input className="uk-checkbox" type="checkbox" />
      </div>
      <div className="uk-width-5-6">
        <span>This is a single todo</span>
        <hr />
      </div>
    </div>
  );
};

export default Todo;
