import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import photo from "./images/photo.jpg";
import dark from "./images/dark.jpg";
import light from "./images/light.jpg";

const Category = ({ category }) => {
  return (
    <div className="uk-card uk-card-secondary uk-card-large uk-card-body">
      <h3>{category.title}</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione unde
        quidem neque aut ab commodi!
      </p>
    </div>
  );
};

class Categories extends React.Component {
  state = {
    

    categories: [
      { id: 1, title: "Personal" },
      { id: 2, title: "Work" },
      { id: 3, title: "Personal" },
      { id: 4, title: "Work" },
      { id: 5, title: "Personal" },
      { id: 23, title: "Work" }
    ]
  };

  settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1.07,
    centerPadding: "60px",
    focusOnSelect: true
  };

  handleClick = event => {
    this.props.background(event);
  };

  render() {
    return (
      <div className="">
        <Slider {...this.settings} afterChange={this.handleClick}>
          {this.state.categories.map(category => (
            <div
              key={category.id}
              style={{ padding: 2 }}
              onClick={() => this.handleClick(category.id)}
            >
              <Category category={category} />
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}

export default Categories;
