import React, { Component } from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';

import moviesAPI from '../../services/api';

import MoviesSearchForm from '../../components/MoviesSearchForm/MoviesSearchForm';
import MoviesList from '../../components/MoviesList/MoviesList';

const getCategoryFromLocation = location =>
  queryString.parse(location.search).category;

export default class MoviesPage extends Component {
  static propTypes = {
    history: PropTypes.shape().isRequired,
    location: PropTypes.shape().isRequired,
  };

  state = {
    movies: [],
  };

  componentDidMount() {
    const { location } = this.props;
    const query = getCategoryFromLocation(location);

    if (query) {
      this.getMovies();
    }
  }

  componentDidUpdate(prevProps) {
    const { location } = this.props;

    const prevCategory = getCategoryFromLocation(prevProps.location);
    const currentCategory = getCategoryFromLocation(location);

    if (prevCategory !== currentCategory) {
      this.getMovies();
    }
  }

  getMovies = () => {
    const { location } = this.props;
    const searchQuery = getCategoryFromLocation(location);

    moviesAPI
      .getMoviesByQuery(searchQuery)
      .then(data => this.setState({ movies: data.results }));
  };

  handleCategoryChange = category => {
    const { history, location } = this.props;

    if (category) {
      history.push({
        ...location.pathname,
        search: `category=${category}`,
      });
    }
  };

  handleChangeSearchQuery = query => {
    this.handleCategoryChange(query);
  };

  render() {
    const { movies } = this.state;
    const { location } = this.props;
    const searchQuery = getCategoryFromLocation(location);

    return (
      <section>
        <MoviesSearchForm onSubmit={this.handleChangeSearchQuery} />
        {searchQuery && <MoviesList movies={movies} />}
      </section>
    );
  }
}
