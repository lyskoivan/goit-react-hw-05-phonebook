import React, { Component } from 'react';

import moviesAPI from '../../services/api';

import MoviesList from '../../components/MoviesList/MoviesList';

export default class HomePage extends Component {
  state = {
    popularMovies: [],
  };

  componentDidMount() {
    moviesAPI
      .getPopularMovies()
      .then(data => this.setState({ popularMovies: data.results }));
  }

  render() {
    const { popularMovies } = this.state;
    return (
      <section>
        <MoviesList movies={popularMovies} />
      </section>
    );
  }
}
