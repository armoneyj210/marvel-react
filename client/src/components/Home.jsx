import React, { Component } from "react";

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="home-container">
          <div>
            <h1 className="home-item">
              Learn about your favorite Marvel and DC characters
            </h1>
          </div>

          <div>
            <a href="/comic">
              <button className="home-cta">Get Started</button>
            </a>
          </div>
        </div>
        <div className="footer"></div>
      </div>
    );
  }
}
