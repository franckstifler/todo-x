import React from "react";
import PropTypes from "prop-types";
import Progress from "./Progress";
import Todo from "./Todo";
const Modal = () => {
  return (
    <div id="my-id" data-uk-modal>
      <div className="uk-modal-dialog uk-modal-body">
        <h2 className="uk-modal-title" />
        <div className="uk-text-left">
          <span className="fa-stack fa-lg uk-margin-small">
            <i className="fa fa-square-o fa-stack-2x" />
            <i className="fa fa-twitter fa-stack-1x" />
          </span>
          <h4 className="uk-text-muted uk-margin-small">12 tasks</h4>
          <h2 className="uk-margin-small">Title here</h2>
          <Progress value={"40"} max={"100"} />
          <p>Today</p>
          <Todo />
          <Todo />
          <Todo />
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {};

export default Modal;
