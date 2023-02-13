import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;
const Tag = () => {
  const [tag, setTag] = useState('dog');
  const [gif, setImage] = useState('');

  const fetchData = async (tag) => {
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
    const { data } = await axios.get(url);
    const imageSrc = data.data.images.downsized_large.url;
    setImage(imageSrc);
  };

  useEffect(() => {
    fetchData(tag);
  }, []);

  const handleClick = () => {
    fetchData(tag);
  };

  return (
    <div className="container">
      <h1>Tag Gif</h1>
      <img src={gif} alt="Random Gif" />
      <input type="text" value={tag} onChange={(e) => setTag(e.target.value)} />
      <button type="button" onClick={handleClick}>Click For New</button>
    </div>
  );
};

export default Tag;
