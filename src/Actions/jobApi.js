import axios from 'axios';

export const getJob = async () => {
  try {
    const response = await axios.get('http://localhost:8081/api/jobs');
    return response.data; 
  } catch (error) {
    console.error('Error fetching jobs:', error);
    throw error; 
  }
};
