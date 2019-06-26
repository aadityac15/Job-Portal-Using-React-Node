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
                        <div className='navigation-header container' id = 'bootstrap-overrrides'>
                            <div className='navigation-div u-inlineBlock u-nowrap'>
                                <span>
                                    <ul className='navbar-link u-inline u-vAlignTop u-padding-unset' >
                                        <li>
                                            <Link to="/" ><img className='logo navbar-brand' alt='Logo' src={require("./Image.jpg")} height='80' widht='80' /></Link>
                                        </li>
                                        <div className = 'link-div'>
                                        <li>
                                            <Link to="/"><b className = 'navbar-text'>Home</b></Link>
                                        </li>
                                        <li>
                                            <Link to='/postjobs/'><b className='navbar-text'>Post a Job</b></Link>
                                        </li>
                                        <li>
                                            <Link to='/searchjobs/' ><b className='navbar-text'>Search For Jobs</b></Link>
                                        </li>
                                        
                                        <li>
                                            <Link to='/myprofile/'><b className='navbar-text b-spacing'>My Profile</b></Link>
                                        </li>
                                        </div>
                                    </ul>
                                </span>
                            </div>
                        </div>
                        <Route path="/" exact component={HomePage} />
                        <Route path="/searchjobs/" component={SearchJobs} />
                        <Route path="/postjobs/" component={PostJobs} />
                        <Route path="/myprofile/" component={MyProfile} />

                    </div>
                </Router >
            </div >
        );
    };

}