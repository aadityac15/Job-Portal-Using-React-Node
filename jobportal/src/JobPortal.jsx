import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


export default class JobPortal extends React.Component {
    render() {
        return (
            <Router>
                <div className="navigation-header">
                    <nav>
                        <Link to='/'><b>Home</b></Link>
                        <Link to='/searchjobs/'><b>Search For Jobs</b></Link>
                        <Link to='/postjobs/'><b>Post a Job</b></Link>
                        <Link to='/myprofile/'><b>My Profile</b></Link>
                    </nav>

                    <Route path="/" exact component={JobPortal} />
                    {/* <Route path="/searchjobs/" component={About} />
                    <Route path="/users/" component={Users} /> */}
                </div>
            </Router>
        )
    }

}