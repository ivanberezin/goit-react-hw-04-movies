import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import getQueryParams from '../utils/get-query-params';
import API from '../services/api';


export default class Home extends Component {
  state = { movies: [], };

  componentDidMount() {
    const {query} = getQueryParams(this.props.location.search);
    if(query){
      this.fetchMovies(query);
      return;
    }
    API.fetchMostPopularMovies().then(movies => this.setState({ movies }));
  }

  fetchMovies = query => {
    API.fetchMoviesWithQuery(query)
    .then(movies => this.setState({ movies }));
  }

  render() {
    const { movies } = this.state;
    const { match } = this.props;
    return (
      <>
        <h1>Trending today</h1>
        {movies.length > 0 && (
          <ul>
            {movies.map(movie => (
              <li key={movie.id}>
                <Link to={{pathname: `${match.url}movies/${movie.id}`, state: {from: this.props.location}}}>{movie.title}</Link>
              </li>
            ))}
          </ul>
        )}
      </>
    );
  }
}