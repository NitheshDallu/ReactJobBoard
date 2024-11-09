import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Typography, Box, Button, CircularProgress, Grid, Paper, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
const JobList = () => {
  const [loading, setLoading] = useState(true); // Set loading state for the job list page
  const location = useLocation();
  const jobs = location.state?.jobs;
  const navigate = useNavigate();

  useEffect(() => {
    if (jobs) {
      setLoading(false); // Set loading to false when jobs are available
    }
  }, [jobs]);

  if (!jobs || jobs.length === 0) {
    return <Typography variant="h6" align="center">No job data found</Typography>;
  }

  return (
    <Box sx={{ padding: '2rem', backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
        <IconButton onClick={() => navigate(-1)}>
        <ArrowBackIcon/>
        </IconButton>
      <Typography variant="h4" align="center" style={{ fontWeight: '600', marginBottom: '2rem' }}>
        Job Listings
      </Typography>

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
            zIndex: 9999,
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <Grid container spacing={4} justifyContent="center">
          {jobs.map((job, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper
                sx={{
                  padding: '1.5rem',
                  backgroundColor: 'white',
                  borderRadius: '8px',
                  boxShadow: 3,
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: 6,
                  },
                }}
              >
                <Typography variant="h6" style={{ fontWeight: '700', marginBottom: '1rem' }}>
                  {job.jobTitle}
                </Typography>
                <Typography variant="body2" style={{ color: '#888', marginBottom: '0.5rem' }}>
                  Company: {job.companyName}
                </Typography>
                <Typography variant="body2" style={{ color: '#888', marginBottom: '0.5rem' }}>
                  Location: {job.location}
                </Typography>
                <Typography variant="body2" style={{ color: '#555', marginBottom: '0.5rem' }}>
                  Job Type: {job.jobType}
                </Typography>
                <Typography variant="body2" style={{ color: '#555' }}>
                  Salary: {job.salary ? `₹${job.salary}` : 'Not Specified'}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      )}

      <Button
        variant="outlined"
        color="primary"
        style={{ marginTop: '2rem', display: 'block', marginLeft: 'auto', marginRight: 'auto' }}
        onClick={() => navigate(-1)} // Go back to the previous page
      >
        Go Back
      </Button>
    </Box>
  );
};

export default JobList;
