import React from 'react';
import './home_modal.css';
import '../modal/modal.css';
import HomeSlideShow from './home_slide_show';

class HomeModal extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            stage: 0
        }
    }

    handleStage(num) {
        let currentStage = this.state.stage;
        this.setState({ stage: currentStage + num });
    }

    render(){
        return (
            <div className="modal-background" onClick={this.props.handleModal}>
                <div className="modal-child" onClick={e => e.stopPropagation()}>
                    <div className='tuto-modal'>
                        <HomeSlideShow stage={this.state.stage} />
                        <div className='tuto-footer'>
                            <div className='tuto-skip-container'>
                                <button className='tuto-button-skip' onClick={() => this.props.handleModal()}>SKIP </button>
                            </div>
                            <div className='tuto-prev-next-container'>
                                {this.state.stage === 0 ? null :
                                <button className='tuto-button-prev' onClick={() => this.handleStage(-1)}>PREVIOUS</button> }
                                {this.state.stage === 4 ? null :
                                <button className='tuto-button-next' onClick={() => this.handleStage(1)}>NEXT</button> }
                                {this.state.stage === 4 ? 
                                    <button className='tuto-button-next' onClick={() => this.props.handleModal()}>CLOSE </button> : null}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomeModal;

