import React, { useRef, useEffect } from "react";
import * as poseDetection from "@tensorflow-models/pose-detection";
import "@tensorflow/tfjs-backend-webgl";
import "./Canvas.css";
import { connect } from "react-redux";
import {
  setVideoElement,
  setCanvasElement,
  setCurrentVideoSource,
} from "../store";

const Canvas = (props) => {
  const videoElem = useRef(null);
  const canvasElem = useRef(null);
  const currentVideoSrc = useRef(null);

  useEffect(() => {
    const videoElement = videoElem.current;
    if (videoElement) {
      props.setVideoElement(videoElement);
    }
  }, [videoElem]);

  useEffect(() => {
    const canvasElement = canvasElem.current;
    if (canvasElement) {
      props.setCanvasElement(canvasElement);
    }
  }, [canvasElem]);

  useEffect(() => {
    const currentVideoSource = currentVideoSrc.current;
    if (currentVideoSource) {
      props.setCurrentVideoSource(currentVideoSource);
    }
  }, [currentVideoSrc]);

  return (
    <div
      id="canvas-wrapper"
      style={{ visibility: props.step > 1 ? "visible" : "hidden" }}
    >
      <canvas
        id="output"
        ref={canvasElem}
        style={{ visibility: "hidden" }}
      ></canvas>
      <video
        id="video"
        ref={videoElem}
        controls
        loop
        style={{ visibility: "hidden" }}
      >
        <source id="currentVID" src="" type="video/mp4" ref={currentVideoSrc} />
      </video>
    </div>
  );
};

const mapState = (state) => {
  return state;
};

const mapDispatch = (dispatch) => {
  return {
    setVideoElement: (videoElement) => {
      dispatch(setVideoElement(videoElement));
    },
    setCanvasElement: (canvasElement) => {
      dispatch(setCanvasElement(canvasElement));
    },
    setCurrentVideoSource: (currentVideoSource) => {
      dispatch(setCurrentVideoSource(currentVideoSource));
    },
  };
};

export default connect(mapState, mapDispatch)(Canvas);

