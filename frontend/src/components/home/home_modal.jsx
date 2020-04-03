import React from 'react';
import './home_modal.css';
import '../modal/modal.css';
import HomeSlideShow from './home_slide_show';

class HomeModal extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            stage: 1
        }
        
    }

    handleStage(num) {
        let currentStage = this.state.stage;

        if (currentStage + num < 1) {
            currentStage = 5
        } else if (currentStage + num > 4) {
            currentStage = 0
        }

        this.setState({ stage: currentStage + num });
    }

    render(){
        return (
            <>

                <div className="modal-background" onClick={this.props.handleModal}>
                    <div className="modal-child" onClick={e => e.stopPropagation()}>
                        <div className='tuto-modal'>
                            <HomeSlideShow stage={this.state.stage} />
                            <div className='tuto-footer'>
                                <div className='tuto-skip-container'>
                                    <button className='tuto-button-skip' onClick={() => this.props.handleModal()}>SKIP </button>
                                </div>
                                <div className='tuto-prev-next-container'>
                                    <button className='tuto-button-prev' onClick={() => this.handleStage(-1)}>PREVIOUS</button>
                                    <button className='tuto-button-next' onClick={() => this.handleStage(1)}>NEXT</button>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </>
        )
    }
}

export default HomeModal;

