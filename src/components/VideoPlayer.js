import React from 'react';

function VideoPlayer(props) {
  return (
    <div>
        <div>
          <p>Camara URL: {props.cameraUrl}</p>
        <button className="btnVolver" onClick={props.onback}>Salir</button>
        </div>
        <video id="videoPlayer" key={props.cameraUrl} controls muted="muted" autoPlay>
            <source src={props.cameraUrl} type="video/mp4" />
        </video>
    </div>
  );
}

export default VideoPlayer;