import React from "react";
import Description from "./Description";
import Categories from "./Categories";

import { getUserName, setUserName, getCategories } from "../api/server";

const backgrounds = [
  "#F1F3F9",
  "#F69661",
  "#98dafc",
  "#e1e8f0",
  "#e62739",
  "#c5d5cb",
  "#9fa8a3",
  "#22264b"
];

class Home extends React.Component {
  state = {
    background: "#F1F3F9",
    user: "",
    categories: {}
  };

  componentDidMount() {
    let user = getUserName();
    while (!user) {
      user = prompt("Please enter your name: ").trim();
      setUserName(user);
    }
    const categories = getCategories();
    this.setState({ user, categories });
  }

  changeBackground = id => {
    // verify the index is inside the array and ensure it is an integer
    let index = parseInt(id, 10);
    if (id > backgrounds.length) {
      index = index = index % backgrounds.length;
    }
    // ensure index is an integer
    const color = backgrounds[+index];
    this.setState({ background: color });
  };
  render() {
    return (
      <div
        className="uk-background-default"
        style={{ backgroundColor: this.state.background, height: "100%" }}
      >
        <div className="uk-container">
          <div className="uk-width-1-1@s">
            <Description
              cite={"Looks like feel good"}
              todos={5}
              username={this.state.user}
            />
          </div>
          <div className="uk-width-1-1">
            <Categories categories={this.state.categories} background={this.changeBackground} />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
