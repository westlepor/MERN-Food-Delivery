import React from 'react';
import { Link } from 'react-router-dom';
import './main.css';

class Main extends React.Component {
    render(){
        return(
            <div className="main">
                <section className="background-container">
                    <video playsInline autoPlay muted loop id="background-video">
                        <source src="https://videos.ctfassets.net/7m90b3o5uk7x/1blO3VWJKwMQGKgCe2Oue6/47c3186699639d6d1a248f08eed60c50/COTE_VIDEO_4.mp4" type="video/mp4" />
                    </video>
                </section>
                <section>
                    <div className="splash-content">
                        <h1>Eat Right</h1>
                        <h4>Choosing a restaurant or bar for a group of people can be challenging, location, price, distance; you want to take everyones preferences into consideration. This can be time consuming and complicated, MealMatch will help the group make their decision.</h4>
                        <div className="main-buttons-container">
                            <button className='main-button-signup'> <Link to="/onboarding">SIGN UP</Link></button>
                            <button className='main-button-login' onClick={() => this.props.openModal('login')}>LOG IN</button>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
};

export default Main;
