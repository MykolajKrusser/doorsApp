import React, {Component}  from 'react';
import {connect} from 'react-redux';
import classes from './ToolBar.css';
import Tools from '../../components/Tools/Tools';
import Logo from '../../components/UI/Logo/Logo';

class ToolBar extends Component {

  render(){
    return (
      <header className={classes.ToolBar}>
        <Logo/>
        <nav>
          <Tools/>
        </nav>
      </header>
    );
  }
}

const mapStateToProps = state =>{
  return {
    organization: state.auth.organization
  }
}
export default connect(mapStateToProps)(ToolBar);