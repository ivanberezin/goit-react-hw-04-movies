import React, { Component, Suspense, lazy } from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import API from '../../services/api';
import routes from '../../routes';
import styles from './MovieDetails.module.css';

let stateFrom;

export default class MovieDetails extends Component {

  state = { movie: null };

  componentDidMount() {
    stateFrom = this.props.location.state.from;
    API
      .fetchShowDetails(this.props.match.params.movieId)
      .then(movie => this.setState({ movie }));
  }

  handleGoBack = () => {
    const {state} = this.props.location;
    if (state && state.from) {
        this.props.history.push(stateFrom);
        return
      }
    this.props.history.push(routes.movies);
  }

  render() {
    const { match } = this.props;
    return (
      <div className={styles.wrapper}>
        <button type="button" onClick={this.handleGoBack} className={styles.button}>Back to movies list</button>
        {this.state.movie && (
          <>
          <div className={styles.movieCard}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${this.state.movie.poster_path}`}
              alt={this.state.movie.title}
              width="350"
            />
            <div className={styles.movieCardInfo}>
              <h1>{this.state.movie.title}</h1>
              <p>User Score: {`${this.state.movie.vote_count}`}</p>
              <h2>Overview</h2>
              <p>{this.state.movie.overview}</p>
              <h3>Genres</h3>
              <p>{this.state.movie.genres.map(genre => `${genre.name + ' '}`)}</p>
            </div>
          </div>
          <div className={styles.movieAddInfo}>
            <hr/>
            <h2>Additional information</h2>
            <ul className={styles.addInfoList}>
              <li className={styles.addInfoLink}>
                <Link to={{pathname: `${match.url}/cast`, state: {from: this.props.location}}} >Actors</Link><br/>
              </li>
              <li className={styles.addInfoLink}>
                <Link to={{pathname: `${match.url}/reviews`, state: {from: this.props.location}}}>Reviews</Link>
              </li>
            </ul>
            <hr/>
          </div>
          <Suspense fallback={<h2>Loading inline info...</h2>}>
            <Switch>
              <Route path={`${match.path}/cast`} component={lazy(() => import('../InlineMovieCast' /* webpackChunkName: "movie-cast-view" */))} />
              <Route path={`${match.path}/reviews`} component={lazy(() => import('../InlineMovieReviews' /* webpackChunkName: "movie-reviews-view" */))} />
            </Switch>
          </Suspense>
          </>                  
        )}
      </div>
    );
  }
}