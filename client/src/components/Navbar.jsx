import React, { Component } from "react";

export default class NavBar extends Component {
  render() {
    return (
      <div className="nav-container">
        <div className="home-header">
          <div>
            <a href="/">
              {" "}
              <span className="nav-marvel">
                <img
                  className="nav-marv-logo"
                  src="https://d13ezvd6yrslxm.cloudfront.net/wp/wp-content/images/marvel-logo-550x223.jpg"
                  alt="marvel"
                />
              </span>{" "}
            </a>
          </div>
          <div>
            <a href="/">
              <span className="nav-dc">
                {" "}
                <img
                  className="nav-dc-logo"
                  src="https://i.pinimg.com/originals/80/fb/f0/80fbf0b17d1b79922334f5cccb34f576.png"
                  alt="dc"
                />
              </span>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
