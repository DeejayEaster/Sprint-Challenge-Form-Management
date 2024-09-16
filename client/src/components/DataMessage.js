import React, { Component } from "react";

export default class DataMessage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="ui card">
        <div class="content">
          <div class="header">{this.props.item.name}</div>
          <div class="meta">
            <span class="date">{this.props.item.course}</span>
          </div>
          <div class="description">{this.props.item.technique}</div>
        </div>
      </div>
    );
  }
}
