import React from 'react';
import './home_modal.css';
import '../modal/modal.css';

export class Slide1 extends React.Component {
    render() {
        console.log('SLIDE 1')
        return (
            <div className='tuto-slide' id='slide1'>
                <div className='tuto-slide-text-container'>
                    <div className='tuto-slide-text'>
                        <h1>STEP 1: CREATE A GROUP</h1>
                        text
                    </div>
                </div>
                <div className='tuto-slide-gif-container'>
                    <div className='tuto-slide-gif'>
                        GIF
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
                SLIDE 2
            </div>
        )
    }
}


export class Slide3 extends React.Component {
    render() {
        return (
            <div className='tuto-slide' id='slide3'>
                SLIDE 3
            </div>
        )
    }
}


export class Slide4 extends React.Component {
    render() {
        return (
            <div className='tuto-slide' id='slide4'>
                SLIDE 4
            </div>
        )
    }
}