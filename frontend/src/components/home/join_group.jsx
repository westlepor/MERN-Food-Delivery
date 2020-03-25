import React from 'react';
import _ from 'lodash';
import './join_group.css'
import { Link } from "react-router-dom"

class JoinGrorup extends React.Component {
  constructor(props) {
    super(props);
    
  }

  render(){
    return(
      <div className="join-group-form">
        <div className="join-group-content">
          <div>
            <div className="optional-divider">
              <div className="get-started-bar"></div>
              <h2>My Groups</h2>
              <div className="get-started-bar"></div>
            </div>
            <div className="join-group-headers">
              <h2>Group Name</h2>
              <h2>Decide By</h2>
            </div>
            <div>
              {this.props.user.groups.map((group) => (
                <div >
                  <Link to={`/swipe/${group._id}`} className="join-group-item" >
                    <h2>{group.groupName}</h2>
                    <h2>{group.endTime}</h2>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default JoinGrorup;