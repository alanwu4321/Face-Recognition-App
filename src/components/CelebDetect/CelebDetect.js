import React from 'react';
// import './FaceRecognition.css';

const CelebDetect = ({ celebMatch }) => {
  var name = ''
  if (Object.entries(celebMatch).length !== 0) {
    name = celebMatch.name
  }

  return (
    <div className='center ma' style={{ display: 'block'}}>
      <h3>{name}</h3>
    </div>
  );
}

export default CelebDetect;