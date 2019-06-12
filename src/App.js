import React, { Component } from 'react';
import {Route, Switch, withRouter, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import Layout from './container/Layout/Layout';
import asyncComponent from './hoc/asyncComponent/asyncComponent';

import Login from './container/Login/Login';
import ProgressBar from './components/UI/ProgressBar/ProgressBar';

const asyncDoorsConstructor = asyncComponent(()=>{
  return import ('./container/DoorsConstructor/DoorsConstructor')
});


class App extends Component {
  render() {
    let progressBar;
    let routes = (
      <Switch>
        <Route path='/' exact component={Login}/>
        <Redirect to='/'/>
      </Switch>
    );

    if (this.props.isAuthenticated){
      routes = (
        <Switch>
          <Route path='/' exact component={asyncDoorsConstructor}/>
          <Redirect to='/'/>
        </Switch>
      );
    };

    if(this.props.loading){
      progressBar = <ProgressBar/>
    };

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
    loading: state.auth.loading,
    isAuthenticated: state.auth.token != null
  };
};

const mapDispatchToProps = dispatch=>{
  return{
    
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));