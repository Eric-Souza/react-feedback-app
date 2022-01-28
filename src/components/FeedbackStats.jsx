import PropTypes from 'prop-types';

function FeedbackStats({ feedback }) {
  // Calculate ratings average
  let average =
    feedback.reduce(
      (accumulator, current) => {
        return accumulator + current.rating;
      },
      // Default accumulator value
      0
    ) / feedback.length;

  // Fixes only one decimal place and replaces 0s with ''
  average = average.toFixed(1).replace(/[.,]0$/, '');

  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>Average rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  );
}

FeedbackStats.propTypes = {
  feedback: PropTypes.array.isRequired,
};

export default FeedbackStats;
