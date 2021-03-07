import React, { Component } from 'react';

import API from '../../services/api';
import styles from './InlineMovieCast.module.css';

import failImg from '../../assets/noPhotoAvailable.jpg'

class InlineMovieCast extends Component {
  state = { actors: [] }

  componentDidMount() {
    API
      .fetchCast(this.props.match.params.movieId)
      .then(actors => this.setState({ actors }));
  }

  render() {
    const {actors} = this.state;
    return(
      <ul className={styles.castList}>
        {actors.map(actor => (
          <li key={actor.id} className={styles.castItem}>
            <img src={actor.profile_path ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}` : `${failImg}`} className={styles.castImg} alt={actor.name} height="320"/>
            <p className={styles.castName}>{actor.name}</p>
            <p className={styles.castRole}>Character: {actor.character}</p>
          </li>
        ))}
      </ul>
    )
  }
}

export default InlineMovieCast;