import React, { Component } from "react";
import axios from "axios";

export default class Character extends Component {
  state = {
    char: [],
    newChar: {
      name: "",
      universe: "",
      description: "",
      firstAppearance: "",
      pic: ""
    },
    charForm: false
  };
  updatePage = () => {
    axios.get("/api/comic").then(res => {
      this.setState({ char: res.data });
      console.log(this.state.char);
    });
  };
  componentDidMount() {
    this.updatePage();
  }
  handleToggleNewForm = () => {
    this.setState(state => {
      return { charForm: !state.charForm };
    });
  };
  handleNewFormChange = evt => {
    const newChar = { ...this.state.newChar };
    newChar[evt.target.name] = evt.target.value;
    this.setState({ newChar });
  };
  handleSubmit = evt => {
    evt.preventDefault();
    axios.post("/api/char", this.state.newChar).then(() => {
      this.setState({
        charForm: false,
        newChar: {
          name: "",
          universe: "",
          description: "",
          firstAppearance: "",
          pic: ""
        }
      });
      this.updatePage();
    });
  };
  render() {
    let characters = this.state.char.map(char => {
      return (
        <div className="char-header">
          <div className="char-item">
            <div className="char-list">
              <h3>{char.name}</h3>
              <img src={this.state.char.pic} alt={this.state.char.name} />
            </div>
          </div>
        </div>
      );
    });
    return (
      <div>
        <h1 className="char-header">Characters</h1>
        <div>
          <button className="btn-char" onClick={this.handleToggleNewForm}>
            Add New Character
          </button>
        </div>
        <br />
        {this.state.charForm ? (
          <form onSubmit={this.handleSubmit}>
            <div className="char-header">
              <label htmlFor="char-name">Name:</label>
              <input
                type="text"
                name="name"
                value={this.state.newChar.name}
                onChange={this.handleNewFormChange}
              />
            </div>
            <br />
            <div className="char-header">
              <label htmlFor="char-description">Description:</label>
              <input
                type="text"
                name="description"
                value={this.state.newChar.description}
                onChange={this.handleNewFormChange}
              />
            </div>
            <br />
            <div className="char-header">
              <label htmlFor="char-image">Image:</label>
              <input
                type="text"
                name="image"
                value={this.state.newChar.image}
                onChange={this.handleNewFormChange}
              />
            </div>
            <br />{" "}
            <div className="char-header">
              <label htmlFor="char-universe">Universe:</label>
              <input
                type="text"
                name="universe"
                value={this.state.newChar.universe}
                onChange={this.handleNewFormChange}
              />
            </div>
            <div className="char-header">
              <label htmlFor="char-first-app">First Appearance:</label>
              <input
                type="text"
                name="firstAppearance"
                value={this.state.newChar.firstAppearance}
                onChange={this.handleNewFormChange}
              />
            </div>
            <input
              className="add-submit"
              type="submit"
              value="Create Character"
            />
          </form>
        ) : (
          characters
        )}
      </div>
    );
  }
}
