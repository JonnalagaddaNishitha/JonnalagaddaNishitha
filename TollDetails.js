import { useSelector } from 'react-redux';

const TollDetails = () => {
  const tollDetails = useSelector((state) => state.tollDetails);

  return (
    <div>
      {tollDetails && (
        <div>
          <h2>Toll Details</h2>
          <p>Total Cost: {tollDetails.summary.totalCost}</p>
          {/* Add more details as needed */}
        </div>
      )}
    </div>
  );
};

export default TollDetails;
