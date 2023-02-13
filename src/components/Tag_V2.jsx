import React, { useState } from 'react';
import useGif from '../hooks/useGif';

const Tag = () => {
  const [tag, setTag] = useState('dog');
  const {gif, fetchGif} = useGif(tag);

  return (
    <div className="container">
      <h1>Tag Gif</h1>
      <img src={gif} alt="Random Gif" />
      <input type="text" value={tag} onChange={(e) => setTag(e.target.value)} />
      <button type="button" onClick={fetchGif(tag)}>Click For New</button>
    </div>
  );
};

export default Tag;
