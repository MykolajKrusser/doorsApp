import React, {Component}  from 'react';
import {connect} from 'react-redux';
import classes from './ToolBar.css';
import Tools from '../../components/Tools/Tools';
import Logo from '../../components/UI/Logo/Logo';

class ToolBar extends Component {
  
  render(){
    console.log(this.props.organization)
    return (
      <header className={classes.ToolBar}>
        <Logo/>
        <nav>
          <Tools 
            isAuth={this.props.isAuth}
            organization= {this.props.organization}
          />
        </nav>
      </header>
    );
  }
}

const mapStateToProps = state =>{
  return {
    organization: state.auth.organization,
    isAuth: state.auth.token != null
  }
}
export default connect(mapStateToProps)(ToolBar);