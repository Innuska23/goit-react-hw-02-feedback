import { Component } from 'react';
import { Section } from './Section';
import { FeedbackOptions } from './FeedbackOptions';
import { Statistics } from './Statistics';
import { Notification } from './Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleReaction = reaction => {
    this.setState(state => ({ [reaction]: state[reaction] + 1 }));
  };

  countTotalFeedback = () =>
    Object.values(this.state).reduce((acc, el) => acc + el, 0);

  countPositiveFeedbackPercentage = () => {
    const totalReaction = this.countTotalFeedback();

    if (!totalReaction) return 0;

    return (100 * this.state.good) / totalReaction;
  };

  render() {
    const totalFeedback = this.countTotalFeedback();
    const positiveFeedbackPercentage = this.countPositiveFeedbackPercentage();
    const { good, neutral, bad } = this.state;

    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          fontSize: 22,
          color: '#010101',
          padding: '1rem',
        }}
      >
        <Section title="Please leave feedback">
          <>
            <FeedbackOptions
              onLeaveFeedback={this.handleReaction}
              options={Object.keys(this.state)}
            />
          </>

        </Section>

        <Section title="Statistics">
          <div>
            {!totalFeedback ? (
              <Notification message="There is no feedback" />
            ) : (
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={totalFeedback}
                positivePercentage={positiveFeedbackPercentage}
              />
            )}
          </div>
        </Section>
      </div>
    );
  }
}

export { App };