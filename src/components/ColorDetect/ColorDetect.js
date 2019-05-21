import React from 'react';
// import ProgressBar from 'react-bootstrap/ProgressBar'
import {ProgressBar} from 'react-bootstrap' 
import { withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
// import './FaceRecognition.css';
import { Progress } from 'reactstrap';
const ColorDetect = ({ dominateColor }) => {
  var isResult = 'block'
  var hex = '#fff'
  var name = ''
  var Redpercentage=0
  var progressBarLable='0%'
  if (Object.entries(dominateColor).length !== 0) {
    hex = dominateColor.hex
    name = dominateColor.name
    Redpercentage = Math.round(dominateColor.red * 100)
    progressBarLable = Redpercentage.toString() + " % "
  }
  return (
    <div className='center ma' style={{ display: 'inline-block'}}>
      <canvas width='200' height='200' style={{ display: isResult, backgroundColor: hex}}> </canvas>
      <h3>{name}</h3>
      {/* <Progress value="25" /> */}
      {/* <LinearProgress color="secondary" /> */}
      <ProgressBar animated variant="danger" now={Redpercentage} label={progressBarLable}/>
    </div>
  );
}

export default ColorDetect;