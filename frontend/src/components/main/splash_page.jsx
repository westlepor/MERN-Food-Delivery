import React from 'react';
import NavContainer from "../nav/nav_container";
import Modal from "../modal/modal";
import Main from "./main";

class SplashPage extends React.Component {
    render() {
        return (
            <div className="splash-page">
                <Modal />
                <NavContainer />
                <Main />
            </div>
        );
    }
};

export default SplashPage;
