import React from 'react';
import { Typography, InputBase,Grid2 } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import bg1 from '../../Assests/bg4.jpg';

const Home = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bg1})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
      }}
      className="flex flex-col items-center justify-center"
    >
      <Typography variant="h4" className="mb-4 text-center text-black">
        Find the career you deserve
      </Typography>
      <div className="flex items-center border border-gray-300 bg-white rounded-lg p-2 w-80">
        <InputBase placeholder="Search..." className="w-full text-gray-700" />
        <SearchIcon className="text-gray-500" />
      </div>
      {/* <Grid2>
        Daily Updates
          <div>

          </div>
      </Grid2> */}
    </div>
  );
};

export default Home;
