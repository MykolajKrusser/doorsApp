import React, {Component} from 'react';
import {connect} from 'react-redux';
import Wrap from '../Wrap/Wrap';
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/ToolBar/ToolBar';

class Layout extends Component {

  render(){
    return (
      <Wrap>
        <Toolbar
          isAuth={this.props.isAuthenticated}
        />
        <main className={classes.Content}>
          {this.props.children}
        </main>
    </Wrap>
    );
  };
};

const mapStateToProps = state =>{
  return {
    isAuthenticated : true
  }
}
export default connect(mapStateToProps)(Layout);