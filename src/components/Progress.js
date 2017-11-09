import React from "react";
import PropTypes from "prop-types";

const progress = {
  marginLeft: "auto",
  marginRight: "auto",
  width: "90%",
  height: 5
};
const Progress = ({ value, max }) => {
  return (
    <progress
      id="js-progressbar"
      className="uk-progress"
      value={value}
      style={progress}
      max={max}
    />
  );
};

Progress.defaultProps = {
    max: "100"
}

Progress.propTypes = {
    value: PropTypes.string.isRequired,
    max: PropTypes.string
}

export default Progress;
