import React from 'react';
import './postjobs.css'
import HomePage from './HomePage';
import { tsImportEqualsDeclaration } from '@babel/types';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


export default class PostJobs extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            description: '',
            flag: false,
        }
    }

    addChanges = (e) => {
        e.preventDefault();
        console.log(e.target.name);
        this.setState({
            [e.target.name]: e.target.value
        });
        console.log("The State : ", this.state);
    }

    addNewActivity = (e) => {
        e.preventDefault();
        this.setState(prevState => {
            return { flag: !prevState.flag }
        });
        console.log(e);
        console.log(this.state);
    }

    changeFlag = () => {
       this.setState(prevState => {
            return { flag: !prevState.flag }
        });
       alert('New Job added');
    }

    render() {
        // const { job } = this.state;
        return (
            <Router>
            {this.state.flag ? 
                <HomePage jobTitle = {this.state.title} jobDescription = {this.state.description} />
            :
            <div className='container post-jobs-main'>
                <h1>Post a Job</h1>
                <br />
                <div className='post-job-form-div container'>
                    <form onSubmit={(e) => this.addNewActivity(e)}>
                        <table align='center' >
                            <tr>
                                <td>
                                    Job Title :
                                </td>
                                <td>
                                    <input type='text' name='title' onChange={this.addChanges} /><br />
                                </td>
                                <td />
                                <td>
                                    Description:
                                </td>
                                <td>
                                    <input type='textarea' onChange={this.addChanges} name='description'></input><br />
                                </td>
                                <td>
                                    <button className="btn btn-dark" onClick = {this.changeFlag}> <Link to = '/home/'>Submit</Link></button>
                                </td>
                            </tr>
                        </table>
                    </form>
                    
                </div>
            </div >
         }
        </Router>

        )
    }
}