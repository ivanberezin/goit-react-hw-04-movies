import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Searchbox from '../components/Searchbox/';
import getQueryParams from '../utils/get-query-params';
import API from '../services/api';

export default class Movies extends Component {
  state = { movies: [], };

  componentDidMount() {
    const {query} = getQueryParams(this.props.location.search);
    if(query){
      this.fetchMovies(query);
      return;
    }
    API.fetchMostPopularMovies().then(movies => this.setState({ movies }));
  }

  componentDidUpdate(prevProps, prevState) {
    const {query: prevQuery} = getQueryParams(prevProps.location.search);
    const {query: nextQuery} = getQueryParams(this.props.location.search);
    if (prevQuery !== nextQuery) {
      this.fetchMovies(nextQuery);
    }
  }

  fetchMovies = query => {
    API.fetchMoviesWithQuery(query)
    .then(movies => this.setState({ movies }));
  }

  handleChangeQuery = query => {
    this.props.history.push({
      ...this.props.location,
      search: `query=${query}`
    })
  }

  render() {
    const { movies } = this.state;
    const { match } = this.props;
    return (
      <>
        <Searchbox onSubmit={this.handleChangeQuery} />
        {movies.length > 0 && (
          <ul>
            {movies.map(movie => (
              <li key={movie.id}>
                <Link to={{pathname: `${match.url}/${movie.id}`, state: {from: this.props.location}}}>{movie.title}</Link>     {/* to={{pathname: `${match.url}/${show.id}`}} <=> to={`${match.url}/${show.id}`} */}
              </li>
            ))}
          </ul>
        )}
      </>
    );
  }
}