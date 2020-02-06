import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, withRouter } from 'react-router-dom';

import MovieDetailsArticle from '../MovieDetailsArticle/MovieDetailsArticle';

import styles from './MovieDetails.module.css';

const locationReturn = location => {
  if (!location.state) return null;

  return { from: location.state.from };
};

const MovieDetails = ({ movie, match, history, location }) => {
  const handleGoBack = () => {
    const { state } = location;

    if (state) {
      history.push(location.state.from);
      return;
    }

    history.push('/movies');
  };

  return (
    <>
      <section className={styles.movieDetails}>
        <button
          type="button"
          className={styles.movieDetails__button}
          onClick={handleGoBack}
        >
          Go back
        </button>
        <MovieDetailsArticle movie={movie} />
        <ul className={styles.movieDetails__options}>
          <li className={styles.movieDetails__items}>
            <NavLink
              className={styles.movieDetails__links}
              to={{
                pathname: `${match.url}/cast`,
                state: locationReturn(location),
              }}
            >
              Cast
            </NavLink>
          </li>
          <li className={styles.movieDetails__items}>
            <NavLink
              className={styles.movieDetails__links}
              to={{
                pathname: `${match.url}/reviews`,
                state: locationReturn(location),
              }}
            >
              Reviews
            </NavLink>
          </li>
        </ul>
      </section>
    </>
  );
};

MovieDetails.propTypes = {
  movie: PropTypes.shape().isRequired,
  match: PropTypes.shape().isRequired,
  history: PropTypes.shape().isRequired,
  location: PropTypes.shape().isRequired,
};

export default withRouter(MovieDetails);
