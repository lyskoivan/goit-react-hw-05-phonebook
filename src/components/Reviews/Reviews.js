import React, { Component } from 'react';

import movieAPI from '../../services/api';

import styles from './Reviews.module.css';

const getIdFromProps = props => props.match.params.movieId;

export default class Reviews extends Component {
  state = {
    movieReviews: [],
  };

  componentDidMount() {
    this.getReviews();
  }

  getReviews = () => {
    const id = getIdFromProps(this.props);

    movieAPI
      .getMvoieReviews(id)
      .then(reviews => this.setState({ movieReviews: reviews.results }));
  };

  render() {
    const { movieReviews } = this.state;

    return (
      <>
        {movieReviews.length > 1 ? (
          <ul className={styles.ReviewsList}>
            {movieReviews.map(review => (
              <li key={review.id} className={styles.ReviewsList__item}>
                <h4>Author: {review.author}</h4>
                <p>{review.content}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>We dont have any review for this movie</p>
        )}
      </>
    );
  }
}
