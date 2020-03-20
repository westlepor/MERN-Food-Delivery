import React from 'react';
import { Link } from 'react-router-dom';
import { logout } from '../../actions/session_actions'
import './swipe.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

class Swipe extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div id="swipe">
                <aside>
                    <nav><div className="nav-logo">
                        <Link to="/home">⌘</Link>
                        {/* <h1>⌘</h1> */}
                        {/* <h2>gather</h2> */}
                        </div>
                        <h2 className="welcome-swipe">Hi Henry!</h2>
                        {/* <div className="welcome-swipe">{props.currentUser.username}</div> */}
                        <Link className="logout" onClick={this.props.logout} to="/">    
                            <FontAwesomeIcon
                                icon={faSignOutAlt}
                                color="white"
                                size="2x"
                            />
                        </Link>
                    </nav>
                    <div className="caroussel">CAROUSSEL</div>
                    <div className="business-info">BUSINESS INFO</div>
                    <div className="likes">
                    <span className="like">
                            <FontAwesomeIcon
                                icon={faCheck}
                                color="white"
                                size="5x"
                            />
                            
                    </span>
                    <span className="dislike">
                            <FontAwesomeIcon
                                icon={faTimes}
                                color="white"
                                size="5x"
                            />
                    </span>
                    </div>
                </aside>
                <main >
                    This is main
                </main>
            </div>
        );
    }
};

export default Swipe;