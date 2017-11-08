import React, { Component } from "react";
import Home from "./components/Home.js";
// import logo from "./logo.svg";
import "./App.css";


class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <nav className="uk-navbar-container" data-uk-navbar>
            <div className="uk-navbar-left">
              <ul className="uk-navbar-nav">
                <li className="uk-active">
                  <a href="/home">Active</a>
                </li>
              </ul>
            </div>

            <div className="uk-navbar-center">
              <a href="/home" className="uk-navbar-item uk-logo">
                TodoAM
              </a>
            </div>
            <div className="uk-navbar-right">
              <div className="uk-navbar-item">
                <form className="uk-search uk-search-navbar">
                  <span data-uk-search-icon />
                  <input
                    className="uk-search-input"
                    type="search"
                    placeholder="Search..."
                  />
                </form>
              </div>
            </div>
          </nav>
        </div>
        <div className="">
          <Home />
        </div>
      </div>
    );
  }
}

export default App;
