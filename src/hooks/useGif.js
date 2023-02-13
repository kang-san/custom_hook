import React, { useEffect, useState } from "react";
import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

const useGif = (tag) => {
  const [gif, setImage] = useState('');

  const fetchGif = async (tag) => {
    const { data } = await axios.get(tag ? `${url}&tag=${tag}` : url);
    const imageSrc = data.data.images.downsized_large.url;
    setImage(imageSrc);
  };

  useEffect(() => {
    fetchGif(tag);
  }, [tag]);

  return {gif, fetchGif}
};

export default useGif;
