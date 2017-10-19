import React from 'react';

export class YelpBars extends React.Component {

    render() {
        console.log(this.props.bar.categories);
      return (
     <div className='row yelp-media my-1'>
        <img
          className='d-flex align-self-center mr-3 img-thumbnail col-2'
          src={this.props.bar.image_url} 
          alt={this.props.bar.name}
        />
          <div className='float-left col-5'>
            <a href={this.props.bar.url} className='pt-1 float-left'>
                <h5>{ this.props.bar.name }</h5>
            </a>
            <br />
            <p className='float-left' >
                Rating: {this.props.bar.rating}, {this.props.bar.review_count} reviews<br />
                {this.props.bar.price}
            </p>
          </div>
          <div className='float-right col-4'>
              <p>
                  {this.props.bar.location.address1}<br />
                  {this.props.bar.location.zip_code}<br />
                  {this.props.bar.phone}
              </p>
          </div>
        </div>
      );
    }
}