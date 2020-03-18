import "./nav.css";
import React from 'react';

class NavBar extends React.Component {


    render() {

        return (
            <section className="header-container">
                <div className="header-logo">
                    <h1>⌘</h1>
                    <h2>gather</h2>
                </div>
                <button>LOG IN</button>
            </section>
        );
    }


};

export default NavBar;