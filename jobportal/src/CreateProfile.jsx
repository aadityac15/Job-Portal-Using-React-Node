import React from "react";
import { BrowserRouter as Link, Route, Router } from "react-router-dom";
import { NavLink } from "react-router-dom";
// import "./CreateProfile.css";
export default class CreateProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profileCreated : false,
      userName: "",
      userEmail: "",
      userResume: undefined,
      userUniversity: ""
    };
  }

  changeFlag = () => {

    this.setState (prevState => {
      return {profileCreated : !prevState.profileCreated}
    })

  }

  addProperty = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log(this.state);
  };
  render() {
    return (
      <div className="container align-center">
        <form
          className="flex-display align-center"
          onSubmit={e => this.addUser(e)}
        >
          <table align="center" className="margin-top">
            <tr>
              <td className="padding-bottom">Name:</td>
              <td className="padding-bottom">
                <input
                  type="text"
                  required
                  name="userName"
                  onChange={this.addProperty}
                />
              </td>
            </tr>
            <tr>
              <td className="padding-bottom">Email:</td>
              <td className="padding-bottom">
                <input
                  type="email"
                  required
                  name="userEmail"
                  onChange={this.addProperty}
                />
              </td>
            </tr>
            <tr>
              <td className="padding-bottom">Resume:</td>
              <td className="padding-bottom">
                <input
                  type="file"
                  name="userResume"
                  onChange={this.addProperty}
                />
              </td>
            </tr>
            <tr>
              <td className="padding">University:</td>
              <td className="padding">
                <input
                  type="text"
                  name="userUniversity"
                  onChange={this.addProperty}
                />
              </td>
            </tr>
            <tr className="padding-bottom">
              <td />
              <td className="padding">
                <button
                  className="btn btn-outline-primary"
                  onClick={this.changeFlag}
                  type="submit"
                >
                  <NavLink
                    to={{
                      pathname: "/myprofile/",
                      state: {
                        userName: this.state.userName,
                        userEmail: this.state.userEmail,
                        userResume: this.state.userResume,
                        userUniversity: this.state.userUniversity,
                        profileCreated: this.state.profileCreated
                      }
                    }}
                  >
                    Submit
                  </NavLink>
                </button>
              </td>
            </tr>
          </table>
          {/*
          <ul>
            <li>
              <div>
                <ul>
                  <li className = 'display-inline'>
                    <label>Name:</label>
                  </li>
                  <li className = 'display-inline'>
                    <label>Email:</label>
                  </li>
                  <li className = 'display-inline'>
                    <label>Resume:</label>
                  </li>
                  <li className = 'display-inline'>
                    <label>University:</label>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <div>
                <ul>
                  <li>
                    <input type="text" name="userName" />
                  </li>
                  <li>
                    <input type="email" name="userEmail" />
                  </li>
                  <li>
                    <input type="file" name="userResume" />
                  </li>
                  <li>
                    <input type="text" name="userUniversity>" />
                  </li>
                </ul>
              </div>
            </li>
            <li>
            <button type="submit" className="btn btn-outline-primary">
            <Link to="/myprofile">Create Profile</Link>
          </button>
            </li>
          </ul> */}
        </form>
      </div>
    );
  }
}
