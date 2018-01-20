import React, { Component } from 'react';
import './App.css';
import { AllTeams } from './allteams.js';
import { StadiumPage } from './stadiumpage.js';

const stadium = require('./stadium.json');

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      venues: stadium,
      selectedVenue: [],
      teamPageShown: false
    };
    this.teamHandler = this.teamHandler.bind(this);
    this.returnAllTeams = this.returnAllTeams.bind(this);
  }

  teamHandler(team){
    this.setState({
      teamPageShown: true,
      selectedVenue: { team }
    });
  }

  returnAllTeams(e) {
    this.setState({ 
      teamPageShown: false,
      selectedVenue: []
    });
  }

  render() {
    return (
      <div className="App">
        {
          (this.state.teamPageShown === true) ?
            (<StadiumPage
              venue={ this.state.selectedVenue }
              back={ this.returnAllTeams }
               />) : (
          <div>
            <div className='header'>
              <h1 className="display-3 text-white fuzzy"><strong>MLB Tailgates</strong></h1>
              <p className="lead text-white fuzzy">
                <strong>Select the team's stadium you wish to visit!</strong>
              </p>
            </div>
            <div className='row px-3 justify-content-center'>
                {(this.state.venues.map(venue => (
                  <AllTeams
                    onTeam={ this.teamHandler }
                    venue= { venue }
                    key= { venue.id }
                    name= { venue.name }
                    src= { venue.src }
                />)))}
            </div>
          </div>
            )
        }
      </div>
    );
  }
}

export default App;
