import React, { Component } from 'react';

import API from '../services/api';

class InlineMovieReviews extends Component {

  state = {
    reviews: []
  }

  componentDidMount() {
    API
      .fetchReviews(this.props.match.params.movieId)
      .then(reviews => this.setState({ reviews }));
  }

  render() {
    const {reviews} = this.state;
    return(
      <>
        {reviews.length > 0 
        ? (<ul>
            {reviews.map(review => (
              <li key={review.id}>
                <h2>Author: {review.author}</h2>
                <p>{review.content}</p>
              </li>
            ))}
          </ul>) 
        : (<p>We don't have reviews for this movie</p>)
      }
      </>
    )
  }
}

export default InlineMovieReviews;