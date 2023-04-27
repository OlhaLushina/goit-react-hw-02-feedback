import { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, List } from './FeedbackOptions.styled';

export class FeedbackOptions extends Component {
  static propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
  };

  render() {
    const { options, onLeaveFeedback } = this.props;
    return (
      <List>
        {options.map(item => {
          return (
            <Button
              type="button"
              key={item}
              onClick={() => onLeaveFeedback(item)}
            >
              {item}
            </Button>
          );
        })}
      </List>
    );
  }
}
