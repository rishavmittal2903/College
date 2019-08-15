import React from 'react';
import {connect} from 'react-redux';
import{changeName} from '../Actions/SampleAction';
import signinimg from '../Images/signup-image.jpg';
class SignIn extends React.Component
{
    constructor()
    {
        super();
    }
    render()
    {
        return(
            <div className="main">
            <div className="container">
                <div className="signup-content">
                    <div className="signup-img">
                        <img src={signinimg} alt="background image"/>
                    </div>
                    <div className="signup-form">
                        <form method="POST" className="register-form" id="register-form">
                            <h2>student registration form</h2>
                            <div className="form-row">
                                <div className="form-group">
                                    <label for="name">Name :</label>
                                    <input type="text" name="name" id="name" required/>
                                </div>
                                <div className="form-group">
                                    <label for="father_name">Father Name :</label>
                                    <input type="text" name="father_name" id="father_name" required/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label for="address">Address :</label>
                                <input type="text" name="address" id="address" required/>
                            </div>
                            <div className="form-radio">
                                <label for="gender" className="radio-label">Gender :</label>
                                <div className="form-radio-item">
                                    <input type="radio" name="gender" id="male" checked/>
                                    <label for="male">Male</label>
                                    <span className="check"></span>
                                </div>
                                <div className="form-radio-item">
                                    <input type="radio" name="gender" id="female"/>
                                    <label for="female">Female</label>
                                    <span className="check"></span>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group">
                                    <label for="state">State :</label>
                                    <div className="form-select">
                                        <select name="state" id="state">
                                            <option value=""></option>
                                            <option value="us">America</option>
                                            <option value="uk">English</option>
                                        </select>
                                        <span className="select-icon"><i className="zmdi zmdi-chevron-down"></i></span>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label for="city">City :</label>
                                    <div className="form-select">
                                        <select name="city" id="city">
                                            <option value=""></option>
                                            <option value="losangeles">Los Angeles</option>
                                            <option value="washington">Washington</option>
                                        </select>
                                        <span className="select-icon"><i className="zmdi zmdi-chevron-down"></i></span>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label for="birth_date">DOB :</label>
                                <input type="text" name="birth_date" id="birth_date"/>
                            </div>
                            <div className="form-group">
                                <label for="pincode">Pincode :</label>
                                <input type="text" name="pincode" id="pincode"/>
                            </div>
                            <div className="form-group">
                                <label for="course">Course :</label>
                                <div className="form-select">
                                    <select name="course" id="course">
                                        <option value=""></option>
                                        <option value="computer">Computer Operator & Pragramming Assistant</option>
                                        <option value="desiger">Designer</option>
                                        <option value="marketing">Marketing</option>
                                    </select>
                                    <span className="select-icon"><i className="zmdi zmdi-chevron-down"></i></span>
                                </div>
                            </div>
                            <div className="form-group">
                                <label for="email">Email ID :</label>
                                <input type="email" name="email" id="email" />
                            </div>
                            <div className="form-submit">
                                <input type="submit" value="Reset All" className="submit" name="reset" id="reset" />
                                <input type="submit" value="Submit Form" className="submit" name="submit" id="submit" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
    
        </div>
                    
                
        )
    }
}

const mapStateToProps=(state)=>{
    return {
        user:state.sampleReducer    
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        setName:(name)=>{
            dispatch(changeName(name))
        }   
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(SignIn);
