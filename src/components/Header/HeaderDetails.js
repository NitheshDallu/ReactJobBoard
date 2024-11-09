    import React from 'react';
    import { Typography, Link } from '@mui/material';
    import { Link as RouterLink, useLocation } from 'react-router-dom'; // Import useLocation

    const HeaderDetails = () => {
    
    const location = useLocation();

    const navStyle = (isActive) => {
        return {
        fontWeight: isActive ? "bold" : "normal",
        textDecoration: isActive ? "none" : "none",
        color: isActive ? "#fff" : "#ccc", 
        };
    };

    return (
        <div  style={{
            position: 'sticky', // makes the header sticky
            top: 0, // sticks the header at the top of the page
            zIndex: 1000 // ensures it stays above other elements
          }} className="flex justify-between items-center p-4 bg-sky-950">
        <div>
            <Typography sx={{ color: 'white' }} variant="h6">
            Job Board
            </Typography>
        </div>
            <nav className="flex gap-6">
                <Link
                style={navStyle(location.pathname === '/home')}
                component={RouterLink}
                to="/"
                variant="body1"
                >
                <Typography>Home</Typography>
                </Link>
                <Link
                style={navStyle(location.pathname === '/about')}
                component={RouterLink}
                to="/about"
                variant="body1"
                >
                <Typography>About Us</Typography>
                </Link>
                <Link
                style={navStyle(location.pathname === '/contact')}
                component={RouterLink}
                to="/contact"
                variant="body1"
                >
                <Typography>Contact Us</Typography>
                </Link>
            </nav>
            
        </div>
    );
    };

    export default HeaderDetails;
