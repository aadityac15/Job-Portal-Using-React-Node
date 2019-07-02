import React from 'react';
import './homepage.css';
export default class HomePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            flag: false,
            jobs: [],
        }
    }

    showJobs = () => {

        this.setState((prevState) => (
            {
                flag: !(prevState.flag)
            }));

    }

    render() {
        const jobs =
            <>

                <div className='home-div-list'>
                    <li>
                        <h4>Graphic Designer</h4>
                        <p>Need someone to create a logo!</p>
                    </li>
                </div>
                <div className='home-div-list'>
                    <li>
                        <h4>Programmer</h4>
                        <p>Need someone to create my startup site!</p>
                    </li>
                </div>
                <div className='home-div-list'>
                    <li>
                        <h4>Marketer</h4>
                        <p>Need someone to promote my startup site!</p>
                    </li>
                </div>
                <div className='home-div-list'>
                    <li>
                        <h4>Security Engineer</h4>
                        <p>Security for the website.</p>
                    </li>
                </div>

                <div className='home-div-list'>
                    <li>
                        <h4>Network Engineer</h4>
                        <p>Network Maintenance for the website.</p>
                    </li>
                </div>
            </>



        return (
            <div className="home-div-main container">
                <div className='home-div-sub container'>
                    <div className='jumbotron' id="jumbotron-changes">
                        <h1>Job Portal</h1>
                    </div>
                    <h5><button className='btn-link' onClick={this.showJobs}>Click here to check Current Jobs</button></h5>
                </div>
                <div>
                    {this.props.jobTitle}<br />
                    {this.props.jobDescription} <br />
                </div>
                <div>
                    {this.state.flag ?
                        <ol className='container'>

                            {jobs}

                        </ol>
                        : null}
                </div>
            </div>
        )
    }
}