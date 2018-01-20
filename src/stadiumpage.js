import React from 'react';
import { Map } from './map.js';
import { YelpBars } from './yelp.js';

const axios = require('axios');

export class StadiumPage extends React.Component {
    constructor(props){
        super(props);
        this.state= {
            team: props.venue,
            yelpResults: []
        };
        this.backToHomepage = this.backToHomepage.bind(this);
    }

    backToHomepage(){
        this.props.back(this.state);
    }

    componentWillMount() {
        const search = this.state.team.team;
        const yelpRequestUrl = '/api/yelp/latitude/' + search.latLng[0] + '/longitude/' + search.latLng[1];
        axios.get(yelpRequestUrl)
            .then(res => res.data)
            .then(yelpResults => {
                this.setState({
                    yelpResults: yelpResults
                });
            });
    }

    render() {
        return(
            <div className='container-fluid'>
                <div className='header fuzzy'>
                    <h1 className='display-3 text-white'>{ this.state.team.team.stadium }</h1>
                    <br />
                </div>
                <div className='row'>
                    <div className='col-8'>
                        {(this.state.yelpResults.length == null)? <div><i class="fas fa-sync fa-spin"></i></div>: (
                        this.state.yelpResults.map((bar, index) =>(
                        <YelpBars
                          bar= {bar}
                          id= {index + 1}
                        />)))}
                    </div>
                    <div className='col-4'>
                      <figure className='figure mr-5 gmap'>
                        <div className='figure-img img-fluid rounded google mb-0'>
                            <Map
                              lat={ this.state.team.team.latLng[0] }
                              lng={ this.state.team.team.latLng[1] }
                              yelpResults={this.state.yelpResults}
                            />
                        </div>
                        <figcaption className='figure-caption text-right text-white pr-2'>
                        { this.state.team.team.address+', '+this.state.team.team.city+', '+this.state.team.team.zip }
                        </figcaption>
                      </figure>
                      <div className='text-center my-2' name={this.state.team.team.name}>
                            <img className='img-thumbnail' alt={this.state.team.team.name} src={this.state.team.team.src} />
                      </div>
                      <div>
                        <button type='button' className='btn btn-primary' onClick={ this.backToHomepage }>Back Home</button>
                      </div>
                    </div>
                </div>
            </div>
        );
    }
}