import React from "react";
import "./homepage.css";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import CreateProfile from "./CreateProfile";
export default class MyProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profileCreated: false
    };
  }
  render() {
    return (
      <div className="container align-center">
        <Router>
          {this.state.profileCreated ? (
            <h1>My Profile</h1>
          ) : (
            <>
              <Link to="/createprofile/">Click here to Create a Profile</Link>
            </>
          )}
        </Router>
      </div>
    );
  }
}
