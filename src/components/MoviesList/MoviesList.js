import React from 'react';
import PropTypes from 'prop-types';

import MoviesListItem from '../MoviesListItem/MoviesListItem';

import styles from './MoviesList.module.css';

const MoviesList = ({ movies }) => {
  return (
    <ul className={styles.MoviesList}>
      {movies.map(movie => (
        <MoviesListItem
          key={movie.id}
          title={movie.title}
          id={movie.id}
          src={movie.poster_path}
        />
      ))}
    </ul>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape().isRequired).isRequired,
};

export default MoviesList;
