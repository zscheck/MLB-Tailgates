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
        const yelpRequestUrl = 'http://localhost:4080/api/yelp/latitude/' + search.latLng[0] + '/longitude/' + search.latLng[1];
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
                <div className='header'>
                    <h1 className='display-3 text-white'>{ this.state.team.team.stadium }</h1>
                    <button type='button' className='btn btn-primary' onClick={ this.backToHomepage }>Home</button>
                </div>
                <div className='row'>
                    <div className='col-8'>
                        {(this.state.yelpResults.length ===0)? <div />: (
                        this.state.yelpResults.map(bar =>(
                        <YelpBars
                          bar= {bar}
                          key= {bar.id}
                        />)))}
                    </div>
                    <div className='col-4'>
                      <figure className='figure mr-5 gmap'>
                        <div className='figure-img img-fluid rounded google mb-0'>
                            <Map
                              lat={ this.state.team.team.latLng[0] }
                              lng={ this.state.team.team.latLng[1] }
                            />
                        </div>
                        <figcaption className='figure-caption text-right text-white pr-2'>
                        { this.state.team.team.address+', '+this.state.team.team.city+', '+this.state.team.team.zip }
                        </figcaption>
                      </figure>
                    </div>
                </div>
            </div>
        );
    }
}