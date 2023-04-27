import { Component } from 'react';
import PropTypes from 'prop-types';

export class Statistics extends Component {
  static propTypes = {
    options: PropTypes.object.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentag: PropTypes.number,
  };

  render() {
    const { options, total, positivePercentage } = this.props;
    return (
      <ul>
        {Object.keys(options).map(item => {
          return (
            <li key={item}>
              {item}: {options[item]}
            </li>
          );
        })}
        <li>Total: {total}</li>
        <li>Positive feedback: {positivePercentage} %</li>
      </ul>
    );
  }
}
