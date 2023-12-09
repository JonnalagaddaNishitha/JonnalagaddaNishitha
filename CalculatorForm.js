import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setTollDetails } from '../store/actions';
import { calculateToll } from '../utils/api';

const CalculatorForm = () => {
  const dispatch = useDispatch();
  const [waypoints, setWaypoints] = useState(['', '']);

  const handleCalculateToll = async () => {
    try {
      const tollDetails = await calculateToll(waypoints);
      dispatch(setTollDetails(tollDetails));
    } catch (error) {
      // Handle error
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter Source"
        value={waypoints[0]}
        onChange={(e) => setWaypoints([e.target.value, waypoints[1]])}
      />
      <input
        type="text"
        placeholder="Enter Destination"
        value={waypoints[1]}
        onChange={(e) => setWaypoints([waypoints[0], e.target.value])}
      />
      <button onClick={handleCalculateToll}>Calculate Toll</button>
    </div>
  );
};

export default CalculatorForm;
