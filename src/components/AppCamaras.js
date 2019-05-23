import React, { useState } from 'react';
import SwipeableViews from 'react-swipeable-views';
import LoginForm from './LoginForm'
import VideoPlayer from './VideoPlayer';

const styles = {
  slide: {
    padding: 15,
    minHeight: 100,
    color: '#fff',
  },
  slide1: {
    minHeight:'100vh',
  },
  slide2: {
    minHeight:'100vh',
  },
};

function AppCamaras() {
  const [cameraUrl, setCameraUrl] = useState('');
  const [index, setIndex] = useState(0);

  function setCamera(urlCam1) {
    setIndex(1);
    setCameraUrl(urlCam1)
  }
  function onBtnVolverClk() {
    setIndex(0);
    setCameraUrl('')
  }

  return (
    <SwipeableViews disabled="true" index={index} onChangeIndex={() => setIndex}> 
      <div style={Object.assign({}, styles.slide, styles.slide1)}>
        <h1>Iniciar sesión</h1>
        <LoginForm onclick={(url) => setCamera(url)} />
      </div>
      <div style={Object.assign({}, styles.slide, styles.slide3)}>
        <VideoPlayer cameraUrl={cameraUrl} onback={() => onBtnVolverClk()}/>
      </div>
    </SwipeableViews>
  );
}

export default AppCamaras;