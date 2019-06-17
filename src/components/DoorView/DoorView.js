import React, {Component} from 'react';
import classes from './DoorView.css';

class DoorView extends Component{

  render(){
    let post =[];
    let beem = [];
    for (let i = 0; i < this.props.posts; i++) {
      post[i] = i+1
    }
    
    for (let i = 0; i < this.props.beems; i++) {
      beem[i] = i-1
    }
    return(
      <div className={classes.DoorView}>
        <div className={classes.Door}>
          {post.map(post => <div key={post} className={classes.DoorPost}></div>)}
        </div>
        <div className={classes.Door2}>
          {beem.map(beem => <div key={beem} className={classes.DoorBeem}></div>)}
        </div>
      </div>
    )
  };
};
  
export default DoorView;