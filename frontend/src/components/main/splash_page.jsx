import React from 'react';
import NavContainer from "../nav/nav_container";
import Modal from "../modal/modal";
import MainContainer from "./main_container";

class SplashPage extends React.Component {
    render() {
        return (
            <div className="splash-page">
                <Modal />
                <NavContainer />
                <MainContainer />
            </div>
        );
    }
};

export default SplashPage;
