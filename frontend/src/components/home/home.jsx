import "./home.css";
import React from 'react';

class Home extends React.Component {

    constructor(props) {
        super(props);
        
    }

    render() {
        
        return (
            <div className="home-page">
                <section className="home-nav-bar">
                    <div className="home-search-bar">
                        <input type="search" />
                    </div>
                    <div>
                        Welcome, {this.props.user.username}
                    </div>
                    {/* <div>
                        mapnav controlls?
                    </div> */}
                    <button>Start a Group</button>
                    <button>Join a Group</button> 
                    <button>Logout</button>
                </section>
                <section className="home-map-section">
                    <div className="home-map-container">
                        <iframe
                            src='https://api.mapbox.com/styles/v1/mapbox/streets-v11.html?title=false&zoomwheel=true&access_token=pk.eyJ1IjoiY2hyaXN0eDg2IiwiYSI6ImNrN3o5MzZkYTA0MTYzZG1zcXlicmV3ODYifQ.f3TP4Ewd27ht76l2HDPoRw#15/37.771/-122.436' />
                    </div>
                </section>
            </div>
        );
    }
};

export default Home;
