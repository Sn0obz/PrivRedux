import React, { Component } from "react";
import { connect } from "react-redux";

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: props.username,
      firstname: "",
      lastname: "",
      servers: [],
      password: props.password,
      auth: false
    };
  }
  getAgServer = () => {
    return null;
  };
  getUserName = () => {
    return this.state.username;
  };
  logmein = () => {
    if (this.state.password === "") {
      return "Give Password du Fisch";
    } else {
      return "logged in ";
    }
  };
  isloggedIn;
  render() {
    return <h1>{this.logmein()}</h1>;
  }
}
function mapStateToProps(state) {
  const { myAuth } = false;
  return {
    myAuth
  };
}
const connectedUser = connect(mapStateToProps)(User);
//export default User;
export { connectedUser as User };
