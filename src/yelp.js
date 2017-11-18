import React from 'react';

export class YelpBars extends React.Component {

    render() {
        const yStars = {
            0: <img src='./yelp_stars/web_and_ios/small/small_0.png' alt={this.props.bar.rating} />,
            1: <img src='./yelp_stars/web_and_ios/small/small_1.png' alt={this.props.bar.rating} />,
            1.5: <img src='./yelp_stars/web_and_ios/small/small_1_half.png' alt={this.props.bar.rating} />,
            2: <img src='./yelp_stars/web_and_ios/small/small_2.png' alt={this.props.bar.rating} />,
            2.5: <img src='./yelp_stars/web_and_ios/small/small_2_half.png' alt={this.props.bar.rating} />,
            3: <img src='./yelp_stars/web_and_ios/small/small_3.png' alt={this.props.bar.rating} />,
            3.5: <img src='./yelp_stars/web_and_ios/small/small_3_half.png' alt={this.props.bar.rating} />,
            4: <img src='./yelp_stars/web_and_ios/small/small_4.png' alt={this.props.bar.rating} />,
            4.5: <img src='./yelp_stars/web_and_ios/small/small_4_half.png' alt={this.props.bar.rating} />,
            5: <img src='./yelp_stars/web_and_ios/small/small_5.png' alt={this.props.bar.rating} />
        };
        const stars = yStars[this.props.bar.rating];
      return (
     <div className='row yelp-media my-1'>
        <img
          className='d-flex align-self-center mr-3 img-thumbnail col-2'
          src={this.props.bar.image_url} 
          alt={this.props.bar.name}
        />
          <div className='col-6 left'>
            <h5 className='pt-1'>
                { this.props.id +'* '}
                <a href={this.props.bar.url} target='_blank'>
                    { this.props.bar.name }
                </a>
            </h5>
            <p className='left' >
                Rating: <span>{stars}</span>, {this.props.bar.review_count} reviews<br />
                Price: {' '+this.props.bar.price}
            </p>
          </div>
          <div className='right col-3'>
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