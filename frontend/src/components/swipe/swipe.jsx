import React from 'react';
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
                        <h1>⌘</h1>
                        <h2>gather</h2>
                        </div>
                        <h2 className="welcome-swipe">Hi Henry!</h2>
                        {/* <div className="welcome-swipe">{props.currentUser.username}</div> */}
                        <span>
                            <FontAwesomeIcon
                                icon={faSignOutAlt}
                                color="white"
                                size="2x"
                            />
                        </span>
                    </nav>
                    <div className="caroussel">CAROUSSEL</div>
                    <div className="business-info">BUSINESS INFO</div>
                    <div className="likes">
                    <span>
                            <FontAwesomeIcon
                                icon={faCheck}
                                color="white"
                                size="7x"
                            />
                            
                    </span>
                    <span>
                            <FontAwesomeIcon
                                icon={faTimes}
                                color="white"
                                size="7x"
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