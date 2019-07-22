import React from "react";
import "./postjobs.css";
import HomePage from "./HomePage";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Route, Redirect } from "react-router";

export default class PostJobs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      flag: false,
      displayFlag: false
    };
  }
  addChanges = e => {
    e.preventDefault();
    console.log(e.target.name);
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log("The State : ", this.state);
  };
  addNewActivity = e => {
    e.preventDefault();
    // alert("New Activity");
    this.setState({
      flag: !this.state.flag
    });
    this.setState({
       title : "",
        description: ""
    })
    console.log("in add new", this.state);
  };

  render() {
    return (
      <div className="container post-jobs-main">
        <h1> Post a Job </h1> <br />
        <div className="post-job-form-div container">
          <form onSubmit={e => this.addNewActivity(e)}>
            <table align="center">
              <tr>
                <td> Job Title: </td>
                <td>
                  <input
                    type="text"
                    name="title"
                    value={this.state.title}
                    onChange={this.addChanges}
                    onFocu
                  />
                  <br />
                </td>
                <td />
                <td />
                <td> Description: </td>
                <td>
                  <input
                    type="textarea"
                    onChange={this.addChanges}
                    name="description"
                    value={this.state.description}
                  />
                  <br />
                </td>
                <td>
                  <Link
                    to={{
                      pathname: "/home/",
                      state: {
                        title: this.state.title,
                        description: this.state.description
                      }
                    }}
                  >
                    <button className="btn btn-outline-primary" type="submit">
                      Submit
                    </button>
                  </Link>
                </td>
              </tr>
            </table>
          </form>
        </div>
      </div>
    );
  }
}
