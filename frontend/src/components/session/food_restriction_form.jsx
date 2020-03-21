import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faCheck } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './login.css';
import './form_restriction_form.css';
import _ from 'lodash';

class FoodRestrictionsForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedFoodRestrictions: [],
            changed: false
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.toggleFoodRestiction = this.toggleFoodRestiction.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        e.stopPropagation();
        this.props.receiveSelectedFoodRestrictions(this.state.selectedFoodRestrictions);
        this.props.closeModal();
    }

    toggleFoodRestiction(e){
        e.preventDefault();
        const curFoodRestriction = e.currentTarget.firstElementChild.innerText;        
        let newState = _.merge([], this.state.selectedFoodRestrictions);
        if (this.state.selectedFoodRestrictions.includes(curFoodRestriction)){
            newState = newState.filter((item)=>{
                return item !== curFoodRestriction
            })
        } else {
            newState.push(curFoodRestriction);
        }
        this.setState({
            selectedFoodRestrictions: newState,
            changed: true
        });
    }

    componentDidMount(){
        this.props.fetchFoodRestrictions()
    }

    componentWillUpdate() {
        if (this.state.selectedFoodRestrictions.length === 0 && this.state.changed === false) {
            this.setState({ 
                selectedFoodRestrictions: this.props.selectedFoodRestrictions,
                changed: true
            });
        }
    }

    render() {
        let curSelectedFoodRestrictions;
        if (this.state.selectedFoodRestrictions.length === 0 && this.state.changed === false){
            curSelectedFoodRestrictions = this.props.selectedFoodRestrictions;
        } else {
            curSelectedFoodRestrictions = this.state.selectedFoodRestrictions; 
        }
        
        let fetchedfoodRestictions = this.props.foodRestrictions
        if (_.isEmpty(fetchedfoodRestictions)){
            fetchedfoodRestictions = [];
        } else {
            fetchedfoodRestictions = Object.values(fetchedfoodRestictions);
        }

        return (
            <form className="FR-form" onSubmit={this.handleSubmit}>
                <div className="x-mark" onClick={()=>this.props.closeModal()}>
                    <FontAwesomeIcon icon={faTimes} color="#2c2c2c30" size="1x" />
                </div>
                <h1 className="form-title">My food restrictions are</h1>
                <div className="FR-subtitle">Select multiples</div>
                <div className="form-top FR-items">
                    {fetchedfoodRestictions.map((restriction, idx)=>{
                        let curClassName = `FR-item-container `
                        if (curSelectedFoodRestrictions.includes(restriction.restriction)){
                            curClassName += "checked-v"
                        }
                        return (
                            <div className="FR-item" key={idx}>
                                <div className={curClassName} onClick={this.toggleFoodRestiction}>
                                    <div>{restriction.restriction}</div>
                                    <div>
                                        <FontAwesomeIcon icon={faCheck} size="1x" />
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="form-bottom">
                    <input className="login-button" type="submit" value="Continue" />
                </div>
            </form>
        );
    }
}

export default FoodRestrictionsForm;
