import React from 'react';
import './home_search.css';
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Zipcode } from './zipcode';

class HomeSearch extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            searchText: "",
            neighborhoods: Zipcode.map(el => el.neighborhood),
            options: []
        }

        this.zipcode = Zipcode;
        this.optionSelected = this.optionSelected.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.inputChange = this.inputChange.bind(this);
    }

    handleSubmit(e){    
        e.preventDefault();
        const selectedNeighborhood = this.zipcode.filter((zipcode) => zipcode.neighborhood === this.state.searchText)
        if (selectedNeighborhood.length !== 0){
            this.props.updateZoom(selectedNeighborhood[0]);
        }
    }

    inputChange(e){
        const value = e.target.value;
        let options = [];
        if (value.length > 0) {
            const regex = new RegExp(`^${value.toLowerCase()}`, 'i');
            options = this.state.neighborhoods.sort().filter(nh => regex.test(nh.toLowerCase()));
        }
        this.setState({
            options,
            searchText: value
        })
    }

    optionSelected(e) {
        this.setState({
            searchText: e.nativeEvent.target.innerText,
            options: []
        })
    }

    renderOptions() {
        const { options } = this.state;
        if (options.length === 0) return null;
        return (
            <div className="auto-complete-options-container">
                {options.slice(0, 5).map((item, idx) => <li onClick={this.optionSelected} key={idx}><span>{item}</span></li>)}
            </div>
        )
    }
    
    render(){
        return (
            <form className="home-search-section" onSubmit={this.handleSubmit}>
                <h1>⌘</h1>
                <div className="home-search-bar">
                    <input type="search" placeholder="Filter by neighborhood" onChange={this.inputChange} value={this.state.searchText} />
                    <div className="auto-complete-options">
                        {this.renderOptions()}
                    </div>
                </div>
                <button className="home-search-icon" onSubmit={this.handleSubmit}>
                    <FontAwesomeIcon icon={faSearch} style={{ color: 'black' }} />
                </button>
            </form>
        )
    }
}

export default HomeSearch;
