import React, { Component } from "react";

export default class Nav extends Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-light bg-dark nav-menu-bar fixed-top ">
          <a class="navbar-brand"><img src="https://www.gpsdashboard.com/wp-content/uploads/2014/07/GPSDashboard_Check-in_Logo_72dpi2.png"  width="200" height="60"/></a>
          <form class="form-inline">
            <button class="btn my-2 my-sm-0 btn-menu btn-register" type="submit">
              Register
            </button>
            <button class="btn my-2 my-sm-0 btn-menu btn-login" type="submit">
              Login
            </button>
          </form>
        </nav>
      </div>
    );
  }
}
