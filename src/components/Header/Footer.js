import React from 'react';
import { Typography, Grid, Box, Link, IconButton, Button } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AppleIcon from '@mui/icons-material/Apple';
import GoogleIcon from '@mui/icons-material/Google';

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#1f1f1f',
        color: 'white',
        padding: '4rem 1.5rem',
        mt: 6,
        borderTop: '1px solid #333',
      }}
    >
      <Grid container spacing={4} justifyContent="center">
        {/* Logo and Social Media Icons */}
        <Grid item xs={12} sm={3} textAlign="center">
          <Typography
            variant="h6"
            sx={{ fontWeight: 'bold', color: '#0065ff', mb: 2 }}
          >
            Job Board
          </Typography>
          <Typography variant="body2" sx={{color:'white'}} gutterBottom>
            Connect with us
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
            <IconButton color="inherit">
              <FacebookIcon />
            </IconButton>
            <IconButton color="inherit">
              <InstagramIcon />
            </IconButton>
            <IconButton color="inherit">
              <TwitterIcon />
            </IconButton>
            <IconButton color="inherit">
              <LinkedInIcon />
            </IconButton>
          </Box>
        </Grid>

        {/* Links Section */}
        <Grid item xs={12} sm={6} textAlign={{ xs: 'center', sm: 'left' }}>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={6} sm={3}>
              <Link href="#" color="primary" sx={{ display: 'block' }}>
                Privacy Policy
              </Link>
              <Link href="#" color="primary" sx={{ display: 'block' }}>
                Terms & Conditions
              </Link>
              <Link href="#" color="primary" sx={{ display: 'block' }}>
                Fraud Alert
              </Link>
              <Link href="#" color="primary" sx={{ display: 'block' }}>
                Trust & Safety
              </Link>
            </Grid>
          </Grid>
        </Grid>

        {/* Download App Section */}
        <Grid item xs={12} sm={3} textAlign="center">
          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
            Download Our App
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
            <Button
              variant="outlined"
              sx={{
                color: '#fff',
                borderColor: '#fff',
                '&:hover': { borderColor: '#fff' },
              }}
            >
              <AppleIcon sx={{ mr: 1 }} /> App Store
            </Button>
            <Button
              variant="outlined"
              sx={{
                color: '#fff',
                borderColor: '#fff',
                '&:hover': { borderColor: '#fff' },
              }}
            >
              <GoogleIcon sx={{ mr: 1 }} /> Google Play
            </Button>
          </Box>
        </Grid>
      </Grid>

      {/* Footer Bottom */}
      <Box sx={{ mt: 4, textAlign: 'center', fontSize: '0.875rem' }}>
        <Typography variant="body2" sx={{color:'white'}}>
          © 2024 Job Board. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
