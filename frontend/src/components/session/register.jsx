import React from 'react';
import NavContainer from "../nav/nav_container";
import Modal from "../modal/modal";
import Onboarding from "./onboarding";

class Register extends React.Component {
    render() {
        return (
            <div className="register">
                <Modal />
                <NavContainer />
                <Onboarding />
            </div>
        );
    }
};

export default Register;
