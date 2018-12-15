import React, { Component } from "react";
import { User } from "../class/user";
import { store } from "../redux/store";
import { connect } from "react-redux";
class SideBar extends Component {
  constructor(props) {
    super(props);
    console.log("PROPS");
    console.log(props);
    this.state = {
      loggedIn: false
    };
  }
  render() {
    console.log(this.state);
    return (
      <React.Fragment>
        <nav className="col-md-2 d-none d-md-block bg-light sidebar">
          <div className="sidebar-sticky">
            <ul className="nav flex-column">
              <li className="nav-item">
                <User />
              </li>
            </ul>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}
function mapStateToProps(state) {
  if (state.user != null) {
    console.log(state);
    console.log("I Return");
    const myProps = {
      loggedIn: true
    };
    return myProps;
  }
  return state;
}
const connectedSidebar = connect(mapStateToProps)(SideBar);
export { connectedSidebar as Sidebar };
//export default SideBar;
