import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl, box }) => {
  var BoxWidth = 0 
  var BoxHeight = 0 
  var tempCanvasWidth = 0;
  var tempCanvasHeight = 0;
if(Object.entries(box).length !== 0){
  BoxWidth = 500 - box.leftCol - box.rightCol
  const image = document.getElementById('inputimage');
  BoxHeight = image.height - box.bottomRow - box.topRow
  tempCanvasWidth = image.width;
  tempCanvasHeight = image.height;
}
  return (
    <div className='center ma'>
      <canvas id="canvasTemp" width={tempCanvasWidth} height={tempCanvasHeight} style={{display:'none'}}> </canvas>
      <canvas id="canvasFace" width={BoxWidth} height={BoxHeight} style={{display:'none'}}> </canvas>
      <div className='absolute mt2'>
        <img id='inputimage' crossOrigin="Anonymous" alt='' src={imageUrl} width='500px' heigh='auto'/>
        {/* <canvas id="myCanvas" width="500px" height="auto" style={{border:'4px solid #d3d3d3'}}>
        Your browser does not support the HTML5 canvas tag.</canvas> */}
        <div id='canvasID' className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
      </div>
    </div>
  );
}

export default FaceRecognition;