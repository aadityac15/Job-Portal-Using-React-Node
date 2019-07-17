import React from "react";
import { BrowserRouter as Link, Route, Router } from "react-router-dom";

export default class CreateProfile extends React.Component {
  render() {
    return (
      <div className="container">
        <form>
          <table>
            <tr>
              <td>Name:</td>
              <td>
                <input type="text" name="userName" />
              </td>
            </tr>
            <tr>
              <td>Email:</td>
              <td>
                <input type="email" name="userEmail" />
              </td>
            </tr>
            <tr>
              <td>Resume:</td>
              <td>
                <input type="file" name="userResume" />
              </td>
            </tr>
            <tr>
              <td>University:</td>
              <td>
                <input type="text" name="userUniversity" />
              </td>
            </tr>
          </table>
        </form>
      </div>
    );
  }
}
