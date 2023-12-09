import axios from 'axios';

const API_KEY = process.env.NEXT_PUBLIC_TOLLGURU_API_KEY;
const TOLLGURU_API_URL = 'https://api.tollguru.com/v1/calculate';

const calculateToll = async (waypoints) => {
  try {
    const response = await axios.post(TOLLGURU_API_URL, {
      source: waypoints[0],
      destination: waypoints[1],
      vehicleType: '2AxlesAuto',
      api_key: API_KEY,
    });

    return response.data;
  } catch (error) {
    console.error('Error calculating toll:', error);
    throw error;
  }
};

export { calculateToll };
