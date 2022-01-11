import React, { useState } from "react";

export const InputButton = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="input-button">
      <input
        type="file"
        accept="image/*"
        id="select-image"
        style={{ display: "none" }}
        onChange={(e) => setSelectedImage(e.target.files[0])}
      />
      <label htmlFor="select-image" className="button">
        Upload Image
      </label>
      <span>(Image is optional)</span>
    </div>
  );
};
