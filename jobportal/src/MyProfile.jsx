import React from "react";
import "./homepage.css";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import CreateProfile from "./CreateProfile";
import './MyProfile.css'
export default class MyProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profileCreated: false
    };
  }
  render() {
    return (
      <div className="container flex-display padding-top" style = {{display : "flex",justifyContent : "center"}}>
        {this.state.profileCreated ? (
          <h1>My Profile</h1>
        ) : (
          <h2 >
            <Link to="/createprofile/" className = 'display-border flex-display'>Click here to Create a Profile</Link>
          </h2>
        )}
      </div>
    );
  }
}
