import React, { useState } from 'react';
import { Typography, InputBase, Grid, Box, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import bg1 from '../../Assests/bg4.jpg';
import { motion } from 'framer-motion';
import axios from 'axios';  // Import axios
import Footer from '../Header/Footer';

const Home = () => {
  // State to store the job updates fetched from the API
  const [jobUpdates, setJobUpdates] = useState([]);
  
  // State for storing the search input
  const [searchTerm, setSearchTerm] = useState('');

  // Function to handle the API call
  const getapiForJob = async () => {
    debugger;
    if (!searchTerm) {
      return;
    }
  
    try {
      // Call the API using Axios
      const response = await axios.get(`http://localhost:8083/api/jobs`);
      setJobUpdates(response.data);
    } catch (error) {
      console.error('Error fetching jobs:', error.message || error);
    }
  };

  // Update the search term as the user types
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      {/* Hero Section */}
      <div
        style={{
          backgroundImage: `url(${bg1})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        {/* Header Text */}
        <Typography
          variant="h3"
          style={{
            color: 'black',
            fontWeight: '700',
            marginBottom: '1.5rem',
            fontFamily: '"Roboto", sans-serif',
          }}
        >
          Find the Career You Deserve
        </Typography>

        {/* Search Bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            backgroundColor: '#fff',
            borderRadius: '30px',
            padding: '10px 20px',
            width: '80%',
            maxWidth: '600px',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
          }}
        >
          <InputBase
            placeholder="Search for jobs..."
            value={searchTerm}
            onChange={handleSearchChange}  // Update the state when user types
            style={{
              flex: 1,
              fontSize: '1rem',
              padding: '10px',
              fontFamily: '"Roboto", sans-serif',
            }}
          />
          <IconButton
            onClick={getapiForJob}  // Trigger the API call when clicked
            variant="contained"
            color="primary"
            style={{
              borderRadius: '50%',
              padding: '10px',
              marginLeft: '10px',
              minWidth: '40px',
              height: '40px',
            }}
          >
            <SearchIcon />
          </IconButton>
        </div>
      </div>

      {/* Daily Updates Section */}
      <Grid
        container
        spacing={4}
        justifyContent="center"
        style={{
          padding: '4rem 1.5rem',
          backgroundColor: '#f5f5f5',
        }}
      >
        <Grid item xs={12}>
          <Typography
            variant="h4"
            align="center"
            style={{
              fontWeight: '600',
              marginBottom: '2rem',
              fontFamily: '"Roboto", sans-serif',
            }}
          >
            Daily Updates
          </Typography>
        </Grid>

        {/* Section Title */}
        <Grid item xs={12}>
          <Typography
            variant="h4"
            align="center"
            style={{
              fontWeight: '600',
              marginTop: '3rem',
              marginBottom: '2rem',
              fontFamily: '"Roboto", sans-serif',
            }}
          >
            Top Companies Hiring Now
          </Typography>
        </Grid>

        {/* Job Updates */}
        {jobUpdates.length > 0 ? (
          jobUpdates.map((job) => (
            <Grid item xs={12} sm={4} key={job.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Box
                  sx={{
                    backgroundColor: 'white',
                    borderRadius: '8px',
                    boxShadow: 3,
                    padding: '2rem',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    textAlign: 'center',
                  }}
                >
                  <Typography
                    variant="h6"
                    style={{
                      fontWeight: '700',
                      color: '#333',
                      marginBottom: '0.5rem',
                    }}
                  >
                    {job.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    style={{
                      color: '#888',
                      marginBottom: '1rem',
                    }}
                  >
                    {job.location}
                  </Typography>
                  <Typography
                    variant="body1"
                    style={{
                      color: '#555',
                      lineHeight: '1.5',
                    }}
                  >
                    {job.description}
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
          ))
        ) : (
          <Grid item xs={12}>
            <Typography variant="h6" align="center">
              No jobs found. Try searching again.
            </Typography>
          </Grid>
        )}
      </Grid>

      <Footer />
    </div>
  );
};

export default Home;
