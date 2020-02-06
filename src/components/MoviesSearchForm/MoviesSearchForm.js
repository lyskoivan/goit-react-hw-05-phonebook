import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './MoviesSearchForm.module.css';

export default class MoviesSearchForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    searchValue: '',
  };

  handleChange = e => {
    this.setState({ searchValue: e.target.value });
  };

  handleClick = e => {
    e.preventDefault();
    const { searchValue } = this.state;

    if (!searchValue) {
      console.log('type some name');
      return;
    }

    this.props.onSubmit(searchValue);

    this.setState({ searchValue: '' });
  };

  render() {
    const { searchValue } = this.state;
    return (
      <form className={styles.searchForm}>
        <input
          onChange={this.handleChange}
          value={searchValue}
          placeholder="Finde..."
          className={styles.searchForm__search}
        />
        <button
          type="submit"
          onClick={this.handleClick}
          className={styles.searchForm__button}
        >
          <span className={styles.searchForm__icon}>Search</span>
        </button>
      </form>
    );
  }
}
