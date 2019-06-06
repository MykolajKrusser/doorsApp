import React, {Component} from 'react';
import {connect} from 'react-redux';
import errorHandler from '../hoc/withErrorHandler/withErrorHandler';
import axios from 'axios';

export class Login extends Component{
    render(){
        return(
            <h1>Login</h1>
        );
    }
}
const mapStateToProps = state =>{
    return {
        
    };
};
const mapDispatchToProps = dispatch =>{
    return{
        
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(errorHandler(Login, axios));