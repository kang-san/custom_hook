import React from 'react';
import useGif from '../hooks/useGif';
const Random = () => {
  const { gif, fetchGif } = useGif();

  return (
    <div className="container">
      <h1>Random Gif</h1>
      <img src={gif} alt="Random Gif" />
      <button type="button" onClick={fetchGif}>Click For New</button>
    </div>
  );
};

export default Random;
