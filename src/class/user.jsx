import React, { Component } from "react";
import { connect } from "react-redux";
import { Login, Logout } from "../redux/actions";

class User extends Component {
  constructor(props) {
    super(props);
    console.log("MyConstructor")
    console.log(this.props)
    this.state = {
      username: "",
      password: ""
    };
  }
  handleSubmit = event => {
    event.preventDefault();
    const { dispatch } = this.props;
    dispatch(Login(this.state.username, this.state.password));
  };
  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  handleLogout = event => {
    const { dispatch } = this.props;
    this.setState({ username: "", password: "" });
    console.log("LOG ME OUT")
    dispatch(Logout());
  };
  render() {
    const { username, password } = this.state;
    if (this.props.user === null) {
      return (
        <form>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              className="form-control"
              name="username"
              id="username"
              placeholder="Enter Username"
              value={username}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-check">
            <button
              type="submit"
              className="btn btn-primary"
              onClick={this.handleSubmit}
            >
              Submit
            </button>
          </div>
        </form>
      );
    } else {
      console.log("RENDER");
      console.log(this.state);
      return (

        <div>
          <p>
            Signed in as <a href="/profile">{this.props.user.username}</a>
          </p>
          <form>
            <button
              type="logout"
              className="btn btn-primary"
              onClick={this.handleLogout}
            >
              Logout
            </button>
          </form>
        </div>
      );
    }
  }
}
function mapStateToProps(state) {
  if (state.user != null) {
    const yuser = state.user;
    return yuser;
  } else {
    return state;
  }
};
const connectedUser = connect(mapStateToProps)(User);
//export default User;
export { connectedUser as User };
