import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import moviesAPI from '../../services/api';

import MovieDetails from '../../components/MovieDetails/MovieDetails';

import Cast from '../../components/Cast/Cast';
import Reviews from '../../components/Reviews/Reviews';

const getIdFromProps = props => props.match.params.movieId;

const movieObjectMapper = movie => {
  return {
    title: movie.title,
    userScore: `${movie.vote_average * 10}%`,
    overview: movie.overview,
    img: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
    genres: movie.genres,
  };
};

class MovieDetailsPage extends Component {
  static propTypes = {
    match: PropTypes.shape().isRequired,
  };

  state = {
    movie: null,
  };

  componentDidMount() {
    const id = getIdFromProps(this.props);

    this.getMovie(id);
  }

  getMovie = id => {
    moviesAPI
      .getMovieById(id)
      .then(data => this.setState({ movie: movieObjectMapper(data) }));
  };

  render() {
    const { movie } = this.state;
    const { match } = this.props;

    return (
      <div>
        {movie && (
          <>
            <MovieDetails movie={movie} />
            <Route path={`${match.path}/cast`} component={Cast} />
            <Route path={`${match.path}/reviews`} component={Reviews} />
          </>
        )}
      </div>
    );
  }
}

export default MovieDetailsPage;
