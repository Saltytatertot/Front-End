import React, { useEffect, useState } from 'react';
import { Typography } from '@mui/material';
import Footer from '../components/footer';

const Map = () => {

  const [img, setImg] = useState();

  const fetchMap = async () => {
    const number = process.env.REACT_APP_ROOM_NUMBER.toString()[0];
    const result = await fetch(`${process.env.REACT_APP_BASE_URL}/MFloor${number}.png`);
    const blob = await result.blob();
    const imageObjectUrl = URL.createObjectURL(blob);
    setImg(imageObjectUrl);
  }

  useEffect(() => {
    fetchMap();
  }, []);

  return (
    <Typography variant="h3" backgroundcolor="#FFFFFF" className="text-center">
      {/* Should be in its own object. Probably a span? */}
      <img className="fitHeight text-center" src={img} alt=":(" />
      <Footer></Footer>
    </Typography> 
  );
};
  
export default Map;