import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import LoginForm from './LoginForm'

const scope = {
  videoSrc: window.Configs.urlCam1
}
const styles = {
  slide: {
    padding: 15,
    minHeight: 100,
    color: '#fff',
  },
  slide1: {
    minHeight:'100%',
  },
  slide2: {
    minHeight:'100%',
  },
};

function setCamera() {
  scope.videoSrc = window.Configs.urlCam2;
}

function DemoSimple() {
  return (
    <SwipeableViews enableMouseEvents > 
      <div style={Object.assign({}, styles.slide, styles.slide1)}>
        <h1>Iniciar sesión</h1>
        <LoginForm />
        <h1>
          <button onClick={() => setCamera() }>Test setCamera()</button>
        </h1>
      </div>
      <div style={Object.assign({}, styles.slide, styles.slide3)}>
        <video id="videoPlayer" controls muted="muted" autoPlay>
          <source src={scope.videoSrc} type="video/mp4" />
        </video>
      </div>
    </SwipeableViews>
  );
}

export default DemoSimple;