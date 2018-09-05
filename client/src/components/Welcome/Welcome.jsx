import React from "react";
import "./Welcome.css";
import API from "../../utils/API";
import Typeahead from "../Typeahead";

class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: [],
    };
    this.ingredientCB = this.ingredientCB.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  // Callback to get ingredients from typeahead and store in state
  ingredientCB(selectValue) {
    this.setState({ ingredients: selectValue });
  }

  // Search drinks
  handleSearch(event) {
    event.preventDefault();
    const ingId = this.state.ingredients.map((ing) => {
      return ing.value;
    });
    console.log(ingId);
    // TODO: make api call
    API.getDrinksByIngs(ingId)
      .then((res) => {
        if (res) {
          console.log(res);
        } else {
          console.log("no results found");
        }
      });
  }

  render() {
    return (
      <div className="row typeaheadDiv">
        <div className="col-6">
          <h1>Welcome! Let's get started.</h1>
          <h3>Find recipes by letting us know which ingredients you have on hand.</h3>
          <div className="welcome-typeahead">
            <Typeahead ingredientCB={this.ingredientCB} />
          </div>
          <button type="button" className="button float-right" onClick={this.handleSearch}>
            Search Recipes
          </button>
        </div>
      </div>
    );
  }
}

export default Welcome;