import React from "react";
import Description from "./Description";
import Categories from "./Categories";

class Home extends React.Component {
  state = {
    backgrounds: [
      "#6ed3cf",
      "#9068be",
      "#98dafc",
      "#e1e8f0",
      "#e62739",
      "#c5d5cb",
      "#9fa8a3",
      "#22264b"
    ],
    background: "#6ed3cf"
  };

  changeBackground = id => {
    console.log("Changing background", id);
    const { backgrounds } = this.state;
    console.log(backgrounds)
    let index;
    // verify the index is inside the array
    id > backgrounds.length ? (index = id % backgrounds.length) : index = id;
    const color = backgrounds[index];
    console.log(color)
    this.setState({ background: color });
  };
  render() {
    return (
      <div
        className="uk-background-default"
        style={{ backgroundColor: this.state.background }}
      >
        <div className="uk-container">
          <div className="uk-width-1-1@s">
            <Description
              cite={"Looks like feel good"}
              todos={5}
              username={"franckstifler"}
            />
          </div>
          <div className="uk-width-1-1">
            <Categories background={this.changeBackground} />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
