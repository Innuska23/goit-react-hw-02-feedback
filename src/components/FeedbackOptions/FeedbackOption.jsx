import PropTypes from 'prop-types';
import { Reaction, Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (

        <Reaction>
            {options.map(reaction => (
                <Button
                    key={reaction}
                    onClick={() => onLeaveFeedback(reaction)}>
                    {reaction}
                </Button>
            ))}
        </Reaction>
    );
};

FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
};