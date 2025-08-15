import { useRef, useEffect } from "react";
import "./ModelViewer.css";

const ModelViewer = ({
  width = 400,
  height = 400,
  modelSrc = null,
  onModelLoaded = () => {},
  className = ""
}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Simple placeholder since we don't have actual 3D model loading
    const timer = setTimeout(() => {
      onModelLoaded();
    }, 1000);

    return () => clearTimeout(timer);
  }, [onModelLoaded]);

  return (
    <div 
      ref={containerRef}
      className={`model-viewer ${className}`}
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      <div className="model-placeholder">
        <div className="model-icon">3D</div>
        <p>3D Model Viewer</p>
        <small>Interactive TSA Technology Demo</small>
      </div>
    </div>
  );
};

export default ModelViewer;
