import React, { Component } from 'react';
import {Route, Switch, withRouter, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import Layout from './hoc/Layout/Layout';

import Login from './container/Login';
import ProgressBar from './components/UI/ProgressBar/ProgressBar';



class App extends Component {
  render() {
    let routes = (
      <Switch>
        <Route path='/' exact component={Login}/>
        <Redirect to='/'/>
      </Switch>
    );

    let progressBar;
    if(this.props.loading){
      progressBar = <ProgressBar/>
    }

    return (
      <div>
        <Layout>
            {progressBar}
            {routes}
        </Layout>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return{
    loading: state.auth.loading
  };
};

const mapDispatchToProps = dispatch=>{
  return{
    
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));