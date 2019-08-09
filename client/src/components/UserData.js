import React, { Component } from "react";
import axios from "axios";
import DataMessage from "./DataMessage";

class UserData extends Component {
  state = {
    userData: []
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/restricted/data")
      .then(res => {
        console.log("res: ", res);
        this.setState({ userData: res.data });
      })
      .catch(error => {
        console.log("Error", error);
      });
  }

  render() {
    console.log(this.state.userData);
    return (
      <div>
        {this.state.userData.map(item => (
          <DataMessage item={item} />
        ))}
      </div>
    );
  }
}

export default UserData;
