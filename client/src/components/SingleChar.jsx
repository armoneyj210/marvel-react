import React, { Component } from "react";
import axios from "axios";

export default class SingleChar extends Component {
  state = {
    char: {
      name: "",
      universe: "",
      description: "",
      firstAppearance: "",
      pic: ""
    },
    editForm: false,
    returnHome: false
  };
  componentDidMount() {
    this.updatePage();
  }

  updatePage = () => {
    axios.get(`/api/comic/${this.props.match.params.comicId}`).then(res => {
      this.setState({ char: res.data });
    });
  };

  editFormChange = evt => {
    const newChar = { ...this.state.char };
    newChar[evt.target.name] = evt.target.value;
    this.setState({ char: newChar });
  };

  render() {
    return <div></div>;
  }
}
