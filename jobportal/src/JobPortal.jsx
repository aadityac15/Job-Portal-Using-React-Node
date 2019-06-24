import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SearchJobs from './SearchJobs';
import PostJobs from './PostJobs';
import MyProfile from './MyProfile';
import HomePage from './HomePage';
import './JobPortal.css';

export default class JobPortal extends React.Component {
    render() {
        return (
            <div>
                <Router>
                    <div className="header">
                        <div className='navigation-link'>

                            <div className='navigation-div full-height display-flex align-items-center'>

                                <Link to="/"><img src="../public/Image.jpg" alt="Logo" /> </Link>
                                <Link to='/searchjobs/'><b>Search For Jobs</b></Link>
                                <Link to='/postjobs/'><b>Post a Job</b></Link>
                                <Link to='/myprofile/'><b>My Profile</b></Link>

                            </div>

                        </div>
                        <div>
                            <Route path="/" exact component={HomePage} />
                            <Route path="/searchjobs/" component={SearchJobs} />
                            <Route path="/postjobs/" component={PostJobs} />
                            <Route path="/myprofile/" component={MyProfile} />
                        </div>
                    </div>
                </Router>
            </div>
        );
    };

}