import React from 'react';
import './home_modal.css';
import '../modal/modal.css';


export class Slide1 extends React.Component {
    render() {
        return (
            <div className='tuto-slide' id='slide1'>
                <div className='tuto-slide-text-container'>
                    <div className='tuto-slide-text'>
                        <h1># 1. START A GROUP</h1>
                        <p>STEP 1: Choose an area for your next gathering.</p>
                        <img src="https://chicken-tinder-seeds.s3-us-west-1.amazonaws.com/CT_Search.gif"/>
                    </div>
                </div>
            </div>
        )
    }
}

export class Slide2 extends React.Component {
    render() {
        return (
            <div className='tuto-slide' id='slide1'>
                <div className='tuto-slide-text-container'>
                    <div className='tuto-slide-text'>
                        <h1># 1. START A GROUP</h1>
                        <div className="tuto-slide-text-inner">
                                <div>
                                    <p>STEP 2: Invite your friends to join.
                                    By adding users, you can add users' food restrictions</p>
                                    <img id="slide-2-img" src="https://chicken-tinder-seeds.s3-us-west-1.amazonaws.com/CT_User.gif"/>
                                </div>
                                <div>
                                    <p>STEP 3: Optionally, add an end time, price limitation, and let your group know if you are covering the cost.</p>
                                    <img id="slide-2-img" src="https://chicken-tinder-seeds.s3-us-west-1.amazonaws.com/CT_Options+(1).gif"/>
                                </div>
                            </div>
                        <span className="tuto-slide-text-span"> Note: You can also click "Demo Group" button to create a random group for exploring Chicken Tinder. </span>
                            <div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export class Slide3 extends React.Component {
    render() {
        return (
            <div className='tuto-slide' id='slide3'>
                <div className='tuto-slide-text-container'>
                    <div className='tuto-slide-text'>
                        <h1># 2. VOTE FOR YOUR FAVORITE SPOTS</h1>
                        <p>You can select or discard each one of the options offered to your group.</p>
                        <img src="https://chicken-tinder-seeds.s3-us-west-1.amazonaws.com/CT_Swipe2.gif" />
                    </div>
                </div>
                <div className='tuto-slide-gif-container'>
                    <div className='tuto-slide-gif'>

                    </div>
                </div>
            </div>
        )
    }
}

export class Slide4 extends React.Component {
    render() {
        return (
            <div className='tuto-slide' id='slide2'>
                <div className='tuto-slide-text-container'>
                    <div className='tuto-slide-text'>
                        <h1># 3. MY GROUPS</h1>
                        <p>If you've been invited to an existing group or finished voting the group event, go to 'My groups' and look it up.
                        </p>
                        <img src="https://chicken-tinder-seeds.s3-us-west-1.amazonaws.com/CT_Mygroups2.gif" />
                    </div>
                </div>
                <div className='tuto-slide-gif-container'>
                    <div className='tuto-slide-gif'>
                    </div>
                </div>
            </div>
        )
    }
}

export class Slide5 extends React.Component {
    render() {
        return (
            <div className='tuto-slide' id='slide4'>
                <div className='tuto-slide-text-container'>
                    <div className='tuto-slide-text'>
                        <h1># 4. GET THE RESULTS</h1>
                        <p>Once everybody in the group has voted or you've reached the deadline.You will get the ranking of the most voted places to help you decide on the venue!</p>
                    </div>
                </div>
                <div className='tuto-slide-gif-container'>
                    <div className='tuto-slide-gif'>
                        <img className="tuto-gif" src="results.png" />
                    </div>
                </div>
            </div>
        )
    }
}