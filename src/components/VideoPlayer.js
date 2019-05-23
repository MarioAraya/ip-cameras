import React from 'react';

function VideoPlayer(props) {
  var cameraUrl = props.cameraUrl;
  if (!cameraUrl || cameraUrl === "") {
    return <div></div>
  }
  return (
    <div>
        <div>
          <p>Camara URL: {cameraUrl}</p>
        <button className="btnVolver" onClick={props.onback}>Salir</button>
        </div>
        <video id="videoPlayer" key={cameraUrl} controls muted="muted" autoPlay>
            <source src={cameraUrl} type="video/mp4" />
        </video>
    </div>
  );
}

export default VideoPlayer;