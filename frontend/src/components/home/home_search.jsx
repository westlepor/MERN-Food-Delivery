import React from 'react';
import './home_search.css';
import { faSearch, faInfo, faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Zipcode } from './zipcode';
import "balloon-css";

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
            const regex = new RegExp(`${value.toLowerCase()}`, 'i');
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

    currentCenter (){
        const curLng = this.props.coordinates._sw.lng + this.props.coordinates._ne.lng / 2;
        const curLat = this.props.coordinates._sw.lat + this.props.coordinates._ne.lat / 2;

        this.curCoordinates = {
            lng: curLng,
            lat: curLat
        }
        const zipcodeKeys = Object.values(Zipcode);
        console.log(Zipcode);

    }   
    
    render(){
        console.log(this.props, "props in home search");
        console.log(this.props.coordinates, "props in home search");
        this.currentCenter();

        const neighborhoodList = "The List of Neighborhoods in SF \n - " + Zipcode.map(
          zipcode => zipcode.neighborhood
        ).join("\n - ");

        return (
          <form className="home-search-section" onSubmit={this.handleSubmit}>
            <div className="home-search-section-title">
              <span>Search by neighborhood</span>
              <span
                data-balloon-break
                aria-label={neighborhoodList}
                data-balloon-pos="down"
              >
                <FontAwesomeIcon
                  icon={faInfoCircle}
                  style={{ color: "lightgray" }}
                />
              </span>
            </div>
            <div className="home-search-bar">
              <div className="home-search-bar-container">
                <input
                  type="search"
                  placeholder="Filter by neighborhood"
                  onChange={this.inputChange}
                  value={this.state.searchText}
                />
                <div className="auto-complete-options">
                  {this.renderOptions()}
                </div>
              </div>
              <button className="home-search-icon" onSubmit={this.handleSubmit}>
                <FontAwesomeIcon icon={faSearch} style={{ color: "black" }} />
              </button>
            </div>

            <div className="home-search-selection">
              <div className="home-search-bounds">
                  Current Coordinate: {}
                  Near Neighborhood: 
                </div>
              <div className="home-search-selected-restaurants">Number of Selcted Businesses: </div>
            </div>
          </form>
        );
    }
}

export default HomeSearch;
