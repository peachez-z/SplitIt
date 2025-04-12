import React from "react";
import "../../styles/components/PreviewImage.scss";

const PreviewImage = ({ imageFile, onRemove }) => {
  if (!imageFile) return null;

  const imageUrl = URL.createObjectURL(imageFile);

  return (
    <div className="preview-container">
      <img src={imageUrl} alt="업로드 미리보기" className="preview-image" />
      {onRemove && (
        <button className="remove-button" onClick={onRemove}>
          ❌
        </button>
      )}
    </div>
  );
};

export default PreviewImage;
