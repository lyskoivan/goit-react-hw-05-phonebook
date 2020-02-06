import React from 'react';
import PropTypes from 'prop-types';

import styles from './MovieDetailsArticle.module.css';

const MovieDetailsArticle = ({ movie }) => {
  return (
    <article className={styles.movieDetails__wrapper}>
      <img src={movie.img} className={styles.movieDetails__img} alt="" />
      <div className={styles.movieDetails__right_wrapper}>
        <h1>{movie.title}</h1>
        <p>User Score: {movie.userScore}</p>
        <h2>Overview</h2>
        <p>{movie.overview}</p>
        <h2>Generes</h2>
        <ul className={styles.movieDetails__list}>
          {movie.genres.map(genre => (
            <li key={genre.id} className={styles['movieDetails__list-item']}>
              {genre.name}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};

MovieDetailsArticle.propTypes = {
  movie: PropTypes.shape({
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    userScore: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
      }),
    ).isRequired,
  }).isRequired,
};

export default MovieDetailsArticle;
