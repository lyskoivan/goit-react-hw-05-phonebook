import React, { Component } from 'react';

import styles from './Cast.module.css';

import movieAPI from '../../services/api';

const getIdFromProps = props => props.match.params.movieId;

export default class Cast extends Component {
  state = {
    movieCast: [],
  };

  componentDidMount() {
    this.getMovieCast();
  }

  getMovieCast = () => {
    const id = getIdFromProps(this.props);

    movieAPI
      .getMvoieCredits(id)
      .then(data => this.setState({ movieCast: data.cast }));
  };

  render() {
    const { movieCast } = this.state;
    console.log(movieCast);
    return (
      <>
        {movieCast.length > 0 ? (
          <ul className={styles.CastList}>
            {movieCast.map(cast => (
              <li key={cast.id} className={styles.CastList__item}>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${cast.profile_path}`}
                  alt=""
                  className={styles.CastList__img}
                />
                <div>
                  <p>Name: {cast.name}</p>
                  <p>Character: {cast.character}</p>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>We dont have info about cast for this movie</p>
        )}
      </>
    );
  }
}
