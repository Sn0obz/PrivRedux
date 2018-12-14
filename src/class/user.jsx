import React, { Component } from "react";
import { connect } from "react-redux";

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticated: false,
      user: { username: "", firstname: "", lastname: "", servers: [] }
    };
  }

  render() {
    const yuser = this.props;
    console.log("THISUSER");
    console.log(this.props);
    if (this.props.username === "") {
      console.log("EMPTY");
      console.log(this.state);
      return <h1>empty</h1>;
    } else {
      console.log("RENDER");
      console.log(this.state);
      return <h1>{this.props.username}</h1>;
    }
  }
}
const mapStateToProps = state => {
  if (state.user != null) {
    const yuser = state.user.user;
    console.log("myuser");
    console.log(yuser);
    return yuser;
  } else {
    return state;
  }
};
const connectedUser = connect(mapStateToProps)(User);
//export default User;
export { connectedUser as User };
