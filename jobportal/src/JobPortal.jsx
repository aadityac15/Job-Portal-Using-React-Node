import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SearchJobs from './SearchJobs';
import PostJobs from './PostJobs';
import MyProfile from './MyProfile';
export default class JobPortal extends React.Component {
    render() {
        return (
            <div>
            <Router>
                <div className="navigation-header">
                    <nav>
                        <Link to='/'><b>Home</b></Link>
                        <Link to='/searchjobs/'><b>Search For Jobs</b></Link>
                        <Link to='/postjobs/'><b>Post a Job</b></Link>
                        <Link to='/myprofile/'><b>My Profile</b></Link>
                    </nav>

                    <Route path="/" exact component={JobPortal} />
                    <Route path="/searchjobs/" component={SearchJobs} />
                    <Route path="/postjobs/" component={PostJobs} />
                    <Route path='/myprofile/' component={MyProfile} />

                </div>
            </Router>
            </div>
        )
    }

}