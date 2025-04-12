import React, { useState } from "react";
import "../../styles/components/UploadBox.scss";

const UploadBox = ({ onImageSelect }) => {
  const [dragActive, setDragActive] = useState(false);

  const handleDrop = (e) => {
    e.preventDefault();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      onImageSelect(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      onImageSelect(e.target.files[0]);
    }
  };

  return (
    <div
      className={`upload-box ${dragActive ? "active" : ""}`}
      onDragOver={(e) => {
        e.preventDefault();
        setDragActive(true);
      }}
      onDragLeave={() => setDragActive(false)}
      onDrop={handleDrop}
    >
      <label htmlFor="uploadInput" className="upload-label">
        <p>이미지를 업로드하거나 드래그 해주세요</p>
        <input
          id="uploadInput"
          type="file"
          accept="image/*"
          onChange={handleChange}
          hidden
        />
      </label>
    </div>
  );
};

export default UploadBox;
