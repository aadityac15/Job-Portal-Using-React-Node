import React from 'react';
import './postjobs.css'
import HomePage from './HomePage';
import { tsImportEqualsDeclaration } from '@babel/types';


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
        // const newTitle = e.target.value;
        // console.log(newTitle);
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

    render() {
        const { job } = this.state;
        return (
            <div className='container post-jobs-main'>
                <h1>Post a Job</h1>
                <br />
                <div className='post-job-form-div container'>
                    <form onSubmit={(e) => this.addNewActivity(e)}>
                        {/* < form> */}
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
                                    <input type='textarea' onChange={this.addChanges} name='description'  ></input><br />
                                </td>
                                <td>
                                    <button className="btn btn-dark">Submit</button>
                                </td>
                            </tr>
                        </table>
                    </form>
                    <div>
                        {this.state.flag ?
                            <div>
                                {this.state.title} <br />
                                {this.state.description}
                            
                           
                    <HomePage jobTitle = {this.state.title} jobDescription = {this.state.description} ></HomePage>
                    </div>
                    : null}
                    </div>
                </div>
            </div >
        )
    }
}