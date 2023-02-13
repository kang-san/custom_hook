import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;
const Random = () => {
  const [gif, setImage] = useState('');

  const fetchData = async () => {
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    const { data } = await axios.get(url);
    const imageSrc = data.data.images.downsized_large.url;
    setImage(imageSrc);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleClick = () => {
    fetchData();
  };

  return (
    <div className="container">
      <h1>Random</h1>
      <img src={gif} alt="Random Gif" />
      <button type="button" onClick={handleClick}>Click For New</button>
    </div>
  );
};

export default Random;
