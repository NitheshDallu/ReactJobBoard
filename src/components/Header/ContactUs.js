    import React from 'react';
    import { Card, CardContent, Typography } from '@mui/material';
    import bg1 from '../../Assests/contactbg1.jpg';
import Footer from './Footer';

    const ContactUs = () => {
    return (
        <div>
 <div
        style={{
            backgroundImage: `url(${bg1})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100vh',
        }}
        className="flex justify-center items-center min-h-screen"
        >
        <Card
            style={{
            backgroundColor: 'rgba(255, 255, 255, 0)', // 0.2 for 20% transparency
            backdropFilter: 'blur(5px)', // optional: adds a subtle blur effect
            }}
            className="w-96 p-6 shadow-lg rounded-lg"
        >
            <CardContent>
            <Typography variant="h5" className="text-center mb-4 font-semibold ">
                Contact
            </Typography>
            <Typography variant="body1" className="text-center mb-2 ">
                <strong>Number:</strong> 9611065981
            </Typography>
            <Typography variant="body1" className="text-center mb-2 ">
                <strong>Email Id:</strong> nitheshdallu@gmail.com
            </Typography>
            </CardContent>
        </Card>
        </div>
        <Footer/>
        </div>
       
    );
    };

    export default ContactUs;
