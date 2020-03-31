import React from 'react';
import './home_modal.css';

class HomeModal extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            stage: 1,
            openModal: this.props.openModal
        }
    }


    render(){
        console.log(this.props, "props in home_modal");
        return (
            <>
                <div className="home-modal">

                </div>

                <div className="home-modal-background">

                </div>
            </>
        )
    }
}

export default HomeModal;