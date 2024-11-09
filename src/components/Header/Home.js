import React, { useState } from 'react';
import { Typography, InputBase, Grid, Box, IconButton, CircularProgress } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import bg1 from '../../Assests/bg4.jpg';
import { motion } from 'framer-motion';
import axios from 'axios'; // Import axios
import Footer from '../Header/Footer';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Home = () => {
  const [jobUpdates, setJobUpdates] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false); // Loading state
  const navigate = useNavigate();

  // Function to handle the API call and navigation
  const getapiForJob = async () => {
    if (!searchTerm) {
      toast.warning("Please enter a search term before fetching job data.");
      return;
    }
  
    setLoading(true); // Set loading to true when starting the API request
  
    try {
      const response = await axios.get('http://localhost:8083/api/jobs');
      setJobUpdates(response.data);
  
      // Replace 'software' with searchTerm to dynamically filter based on user's input
      const filteredJobs = response.data.filter((job) =>
        job.jobTitle && job.jobTitle.toLowerCase().includes(searchTerm.toLowerCase())
      );
  
      if (filteredJobs.length > 0) {
        navigate('/jobList', { state: { jobs: filteredJobs } });
      } else {
        toast.info("No jobs found matching your search term.");
      }
  
    } catch (error) {
      console.error('Error fetching jobs:', error.message || error);
      toast.error(`Error fetching jobs: ${error.message || error}`);
    } finally {
      setLoading(false); // Set loading to false when the request completes
    }
  };
  

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
            onChange={handleSearchChange}
            style={{
              flex: 1,
              fontSize: '1rem',
              padding: '10px',
              fontFamily: '"Roboto", sans-serif',
            }}
          />
          <IconButton
            onClick={getapiForJob}
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

      {/* Show loader while data is loading */}
      {loading ? (
        <Box
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <Grid
          container
          spacing={4}
          justifyContent="center"
          style={{
            padding: '4rem 1.5rem',
            backgroundColor: '#f5f5f5',
          }}
        >
          {/* Job Updates Section */}
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

          {jobUpdates.length > 0 ? (
            jobUpdates.map((job) => (
              <Grid item xs={12} sm={4} key={job.jobId}>
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
                    onClick={() => {
                      navigate('/jobList', { state: { job } });
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
                      {job.jobTitle}
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
                      {job.jobType ? job.jobType : 'Job Type not specified'}
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
      )}

      <Footer />
    </div>
  );
};

export default Home;
