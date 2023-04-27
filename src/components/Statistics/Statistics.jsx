import { Component } from 'react';
import PropTypes from 'prop-types';
import { Item, List } from './Statistics.styled';

export class Statistics extends Component {
  static propTypes = {
    options: PropTypes.object.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentag: PropTypes.number,
  };

  render() {
    const { options, total, positivePercentage } = this.props;
    return (
      <List>
        {Object.keys(options).map(item => {
          return (
            <Item key={item}>
              {upperFirstLetter(item)}: {options[item]}
            </Item>
          );
        })}
        <Item>Total: {total}</Item>
        <Item>Positive feedback: {positivePercentage} %</Item>
      </List>
    );
  }
}

/* Перша літера  заглавна */
function upperFirstLetter(str) {
  if (!str) return str;

  return str[0].toUpperCase() + str.slice(1);
}
