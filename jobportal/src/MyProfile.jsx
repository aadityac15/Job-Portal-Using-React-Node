import React from "react";
import "./MyProfile.css";
import { BrowserRouter as Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

export default class MyProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profileCreated: false,
      profile: {
        userEmail: "",
        userResume: undefined,
        userName: "",
        userUniversity: ""
      }
    };
  }
  componentDidMount = () => {
    if (this.props.location.state) {
      const {
        profileCreated,
        userName,
        userResume,
        userEmail,
        userUniversity
      } = this.props.location.state;

      console.log(userName);
      // const profileState = this.state.profile/;

      this.setState({
        profile: {
          profileCreated: profileCreated,
          userName: userName,
          userEmail: userEmail,
          userUniversity: userUniversity,
          userResume: userResume
        }
      });
    }
    console.log(this.state);
  };
  render() {
    return (
      <div
        className="container flex-display padding-top"
        style={{ display: "flex", justifyContent: "center" }}
      >
        {this.state.profileCreated ? (
          <div>
            <h1>My Profile</h1>
            <h3>{this.state.profile.userName}</h3>
          </div>
        ) : (
          <h2>
            <NavLink
              to="/createprofile/"
              className="display-border flex-display"
            >
              Click here to Create a Profile
            </NavLink>
          </h2>
        )}
      </div>
    );
  }
}
