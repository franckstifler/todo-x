import React from "react";
import PropTypes from "prop-types";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Progress from "./Progress";
import Modal from "./Modal";

const style = {
  padding: {
    paddingTop: 10,
    paddingLeft: 30,
    paddingRight: 10
  },
  card: {
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
    borderBottomLeftRadius: 7,
    borderBottomRightRadius: 7,
    marginBottom: 30
  }
};
const Category = ({ category, height }) => {
  return (
    <div
      className="uk-card uk-card-default uk-card-large card"
      style={{ ...style.card, ...style.padding, height: `calc(${height})` }}
    >
      <span className="fa-stack fa-lg uk-position-medium uk-position-top-left">
        <i className="fa fa-square-o fa-stack-2x" />
        <i className="fa fa-twitter fa-stack-1x" />
      </span>
      <div
        className="uk-position-bottom-left uk-margin-large-bottom uk-text-left"
        style={style.padding}
      >
        <span className="uk-text-muted">12 Tasks</span>
        <h2 className="uk-margin-remove-top">
          <span className="uk-text-capitalize">{category.id}</span>
        </h2>
      </div>
      <div className="uk-position-bottom">
        <Progress value={"30"} max={"80"} />
      </div>
    </div>
  );
};

Category.propTypes = {
  category: PropTypes.objectOf(PropTypes.any).isRequired,
  height: PropTypes.string.isRequired
};

class Categories extends React.Component {
  static propTypes = {
    background: PropTypes.func.isRequired,
    categories: PropTypes.objectOf(PropTypes.object).isRequired
  };

  state = {
    height: "",
    categories: []
  };

  componentDidMount() {
    // we wait the component to be mounted and calculate the occupied heigth: navbar (80px) + description
    const sum = document.getElementById("description").clientHeight + 120; // 80 navbar
    const categories = Object.values(this.props.categories);
    this.setState({ height: "100vh - " + sum + "px", categories });
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.categories !== nextProps.categories) {
      const categories = Object.values(nextProps.categories);
      this.setState({ categories });
    }
  }

  settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    focusOnSelect: true
  };

  handleSwipe = event => {
    this.props.background(event);
  };

  handleClick = event => {};

  render() {
    return (
      <div className="">
        <Modal />
        <Slider {...this.settings} afterChange={this.handleSwipe}>
          {this.state.categories.map(category => (
            <div
              data-uk-toggle="target: #my-id"
              key={category.id}
              style={{ paddingLeft: 2, paddingRight: 2 }}
              onClick={() => this.handleClick(category.id)}
            >
              <Category category={category} height={this.state.height} />
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}

export default Categories;
