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
                        <div className='navigation-header container'>
                            <div className='navigation-div .nav nav-tabs'>
                                <span className='navigation-span'>
                                    <Link to="/" ><img src="../public/Image.jpg" alt="Logo" /> </Link> &nbsp;
                                    <Link to="/" ><b className = '.nav-justified'>Home</b></Link>
                                    <Link to='/searchjobs/'     ><b>Search For Jobs</b></Link>
                                    <Link to='/postjobs/'><b>Post a Job</b></Link>
                                    <Link to='/myprofile/'><b>My Profile</b></Link>
                                </span>
                            </div>
                        </div>
                        <Route path="/" exact component={HomePage} />
                        <Route path="/searchjobs/" component={SearchJobs} />
                        <Route path="/postjobs/" component={PostJobs} />
                        <Route path="/myprofile/" component={MyProfile} />

                    </div>
                </Router>
            </div>
        );
    };

}