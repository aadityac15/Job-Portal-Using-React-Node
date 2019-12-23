import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { NavLink } from "react-router-dom";
import SearchJobs from "./SearchJobs";
import PostJobs from "./PostJobs";
import MyProfile from "./MyProfile";
import HomePage from "./HomePage";
import CreateProfile from "./CreateProfile";
import "./JobPortal.css";

const JobPortal = () => {
  return (
    <div>
      <Router>
        <div className="header">
          <div className="container navigation-header navigation-div u-nowrap flex-display-div">
            <NavLink to="/home/">
              <img
                className="log o navbar-brand"
                alt="Logo"
                src={require("./Image.jpg")}
                height="40"
                widht="40"
              />
            </NavLink>

            <div className="link-div flex-display-ul ">
              <ul className="navbar-link u-inline u-vAlignTop padding-top u-padding-unset flex-display-ul">
                <li>
                  <NavLink
                    to="/home/"
                    activeStyle={{
                      color: "red"
                    }}
                  >
                    <b className="border-navlink"> Home </b>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/postjobs/"
                    activeStyle={{
                      color: "red"
                    }}
                  >
                    <b className="border-navlink "> Post a Job </b>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/searchjobs/"
                    activeStyle={{
                      color: "red"
                    }}
                  >
                    <b className="border-navlink ">Search For Jobs</b>
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/myprofile/"
                    activeStyle={{
                      color: "red"
                    }}
                  >
                    <b className="border-navlink ">My Profile</b>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          <Switch>
            <Route path="/searchjobs/" component={SearchJobs} />
            <Route path="/postjobs/" component={PostJobs} />
            <Route path="/createprofile/" component={CreateProfile} />
            <Route path="/myprofile/" component={MyProfile} />
            <Route exact path="/" component={HomePage} />
            <Route path="/home/" component={HomePage} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default JobPortal;