import React from 'react';
import './postjobs.css'
import HomePage from './HomePage';


export default class PostJobs extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            job: {
                title: [],
                description: []
            }
        }
    }

    addNewActivity = (e) =>
        {
                
        }




    render() {
        return (
            <div className='container post-jobs-main'>
                <h1>Post a Job</h1>
                <div className='post-job-form-div container'>
                    <form onSubmit={(e) => {this.addNewActivity(e)}}>
                        <table align='center'>
                            <tr>
                                <td>
                                    Job Title :
                                </td>
                                <td>
                                    <input type='text'></input><br />
                                </td>


                                <td>
                                    Description:
                        </td>
                                <td>
                                    <input type='textarea' ></input><br />
                                </td>
                                <td>
                                    <input type='submit' value = 'Submit' />
                                </td>
                            </tr>
                        </table>
                    </form>
                    <div>
                        {/* <HomePage /> */}

                    </div>
                </div>
            </div >
        )
    }
}