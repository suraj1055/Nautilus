import React from 'react';
import '../assets/custom-stylesheet/login_style.css';

import { withRouter } from "react-router";
import {Email,Resetpassword,Forgotpassword,SignUp2} from '../constant';


const Logins = ({history}) => {
    
    const loginAuth = () => {
        history.push(`${process.env.PUBLIC_URL}/dashboard/default`);
    }
    
    return (
        <div>
            <div className="page-wrapper">
                <div className="container-fluid p-0">
                    {/* <!-- login page start--> */}
                    <div className="authentication-main">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="auth-innerright">
                                    <div className="authentication-box">
                                        
                                        <div className="card mt-4">
                                        <div className="bg_txture"></div>
                                            <div className="card-body">
                                                <div className="text-center">
                                                    <h5>{Forgotpassword}</h5>                                                    
                                                </div>
                                                <form className="theme-form">
                                                    <div className="form-group">
                                                        <label className="col-form-label pt-0">{Email}</label>
                                                        <input className="form-control" type="email" required="" />
                                                    </div>
                                                    
                                                    <div className="form-group form-row mt-3 mb-0">
                                                        <button className="btn btn-primary btn-block" type="button" onClick={() => loginAuth()}>{Resetpassword}</button>
                                                    </div>                                                    
                                                                                            
                                                    <div className="login_links text-center">
                                                        <div className="mt-2">{"Don't have an Account?"} <a className="btn-link text-capitalize" href="signup.js">{SignUp2}</a></div>                                                                                                   
                                                    </div>
                                                    
                                                </form>
                                            </div> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default withRouter(Logins);