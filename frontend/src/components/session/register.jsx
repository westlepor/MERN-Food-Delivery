import React from 'react';
import NavContainer from "../nav/nav_container";
import Modal from "../modal/modal";
import OnboardingContainer from "./onboarding_container";

class Register extends React.Component {
    render() {
        return (
            <div className="register">
                <Modal />
                <NavContainer />
                <OnboardingContainer />
            </div>
        );
    }
};

export default Register;
