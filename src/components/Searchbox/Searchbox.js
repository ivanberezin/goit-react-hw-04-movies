import React, { Component } from 'react';

import PropTypes from 'prop-types';

import styles from './Searchbox.module.css';

export default class Searchbox extends Component {

  static propTypes = { onSubmit: PropTypes.func }

  state = { value: '' };

  handleChange = e => {
    this.setState({
      value: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.value);
    this.setState({ value: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={styles.form}>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
          className={styles.input}
        />
        <button type="submit" className={styles.button}>Search</button>
      </form>
    );
  }
}