import React from 'react';
import './home_modal.css';
import '../modal/modal.css';


export class Slide1 extends React.Component {
    render() {
        return (
            <div className='tuto-slide' id='slide1'>
                <div className='tuto-slide-text-container'>
                    <div className='tuto-slide-text'>
                        <h1>STEP 1: CREATE A GROUP</h1>
                        <p>Create a group and invite your friends to join. 
                         Choose an area for your next gathering.
                          Each member of your group will vote on the selected spots.</p>
                    </div>
                </div>
                <div className='tuto-slide-gif-container'>
                    <div className='tuto-slide-gif'>
                        <img className="tuto-gif" src="create_group.gif"/>
                    </div>
                </div>
            </div>
        )
    }
}

export class Slide2 extends React.Component {
    render() {
        return (
            <div className='tuto-slide' id='slide2'>
                <div className='tuto-slide-text-container'>
                    <div className='tuto-slide-text'>
                        <h1>STEP 2: JOIN A GROUP</h1>
                        <p>If you've been invited to an existing group, go to 'My groups' and look it up.
                        </p>
                    </div>
                </div>
                <div className='tuto-slide-gif-container'>
                    <div className='tuto-slide-gif'>
                        <img className="tuto-gif" src="join_group.png" />
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
                        <h1>STEP 3: VOTE FOR YOUR FAVORITE SPOTS</h1>
                        <p>You can select or discard each one of the options offered to your group.</p>
                    </div>
                </div>
                <div className='tuto-slide-gif-container'>
                    <div className='tuto-slide-gif'>
                        <img className="tuto-gif" src="vote.png" />
                    </div>
                </div>
            </div>
        )
    }
}


export class Slide4 extends React.Component {
    render() {
        return (
            <div className='tuto-slide' id='slide4'>
                <div className='tuto-slide-text-container'>
                    <div className='tuto-slide-text'>
                        <h1>STEP 4: GET THE RESULTS</h1>
                        <p>Once everybody in the group has voted or you've reached the deadline.
                             You will get the ranking of the most voted places to help you decide on the venue!</p>
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