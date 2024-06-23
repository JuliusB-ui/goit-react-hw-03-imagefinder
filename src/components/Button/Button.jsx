import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

class Button extends Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
  };

  render() {
    return (
      <div className={styles.BtnCont}>
        <button className={styles.Button} onClick={this.props.onClick}>
          Load more
        </button>
      </div>
    );
  }
}

export default Button;
