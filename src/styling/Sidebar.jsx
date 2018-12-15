import React, { Component } from "react";
import { User } from "../class/user";
class SideBar extends Component {
  state = {};
  render() {
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

export default SideBar;
