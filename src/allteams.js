import React from 'react';

export class AllTeams extends React.Component {
    constructor(props){
        super(props);
        this.state = props.venue;
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.props.onTeam(this.state);
    }
    render() {
        return (
            <div className='col-2 text-center my-2 team-button' name={this.props.name} onClick={this.handleClick}>
               <img className='img-thumbnail' alt={this.props.name} src={this.props.src} />
            </div>
        );
    }
}