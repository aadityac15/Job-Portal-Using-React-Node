import React from "react";
import "./postjobs.css";
import HomePage from "./HomePage";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Route, Redirect } from "react-router-dom";

const PostJobs = () =>{
  

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
                  <button className="btn btn-outline-primary" type="submit">
                    Submit
                  </button>
                </td>
              </tr>
            </table>
          </form>
        </div>
      </div>
    );
  }
}
