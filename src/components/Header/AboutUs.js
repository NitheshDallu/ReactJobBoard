    import React from 'react';
    import { Card, CardContent, Typography } from '@mui/material';
    import bg1 from '../../Assests/aboutmebg1.jpg';
import Footer from './Footer';

    const AboutUs = () => {
    return (
        <div>
        <div  style={{
            backgroundImage: `url(${bg1})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100vh',
          }} className="flex justify-center items-center min-h-screen ">
        <Card style={{
            backgroundColor: 'rgba(255, 255, 255, 0)', // 0.2 for 20% transparency
            backdropFilter: 'blur(5px)', // optional: adds a subtle blur effect
            }} className="w-96 p-6 shadow-lg rounded-lg ">
            <CardContent>
            <Typography variant="h5" className="text-center mb-4 font-semibold">
                About Me
            </Typography>
            <Typography variant="body1" className="text-center mb-2">
                <strong>Name:</strong> Nithesh Dalwai
            </Typography>
            <Typography variant="body1" className="text-center mb-2">
                <strong>Semester:</strong> Third Semester (MCA)
            </Typography>
            <Typography variant="body1" className="text-center mb-2">
                <strong>Institution:</strong> Amrita Vishwa Vidyapeetham, Mysuru
            </Typography>
            <Typography variant="body1" className="text-center">
                <strong>Year:</strong> 2022-2024
            </Typography>
            </CardContent>
        </Card>
        </div>
        <Footer/>
        </div>
    );
    };

    export default AboutUs;
