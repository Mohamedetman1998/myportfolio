import { Container } from "postcss";
import React from "react";
import ReactPlayer from "react-player";

function VideoModal({ videoUrl, onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <ReactPlayer
          url={videoUrl}
          controls={true}
          width="80%" // Adjust the width to fill the modal
          height="80%" // Adjust the height to fill the modal
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "10px", // Add border radius for a rounded appearance
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Add a subtle shadow
            background: "#1a1a1a", // Dark background color
          }}
          
        />
        <button className="close-button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}

export default VideoModal;
