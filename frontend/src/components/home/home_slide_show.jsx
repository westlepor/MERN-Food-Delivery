import React from 'react';
import { Slide1, Slide2, Slide3, Slide4, Slide5, Slide6 } from './home_slides';





class HomeSlideShow extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            stage: this.props.stage
        }

    }

    render() {

        let stage = this.props.stage;
        let component;

        switch (stage) {
            case 0:
                component = <Slide1 />
                break;
            case 1:
                component = <Slide2 />
                break;
            case 2:
                component = <Slide3 />
                break;
            case 3:
                component = <Slide4 />
                break;
            case 4:
                component = <Slide5 />
                break;
            case 5:
                component = <Slide6 />
                break;
            default:
                return null
        }

        return (
            <div className='tuto-main'>
                {component}
            </div>
        )
    }
}

export default HomeSlideShow;





