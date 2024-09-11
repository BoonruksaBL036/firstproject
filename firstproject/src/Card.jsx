import React, { Component } from "react";
import App from "./App";

export default class Card extends Component {
  render() {
    return (
      <div class="me">
        <img className="img" src={this.props.profile} alt="user" />
        <h3>{this.props.name}</h3>
        <div class="message">
          <p>Name: Boonruksa Winanon </p>
          <p>section: 66/53 </p>
          <p>Major: Software Engineering </p>
          <p>faculty: Science and Technology </p>
          <p>University: Nakhon Pathom Rajabhat</p>
          <p>ID: 664259036</p>
        </div>
      </div>
    );
  }
}
