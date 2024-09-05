import React, { useState } from 'react';
import './App.css';

function AngleSelector()
{
  const [angle, setAngle] = useState(0); // Initialize state with angle = 0

  // Handles changes in text box input
  const handleInputChange = (event) =>
  {
    let value = parseInt(event.target.value);
    if (!isNaN(value))
    {
      if (value < 0) value = 0;
      if (value > 360) value = 360;
      setAngle(value); // Update angle state
    }
  };

  // Handles changes in the slider
  const handleSliderChange = (event) =>
  {
    setAngle(parseInt(event.target.value));
  };

  // Handles changes in the radio buttons
  const handleRadioChange = (event) =>
  {
    setAngle(parseInt(event.target.value));
  };

  return (
    <div className="container">
      <h1>Angle Selector</h1>

      <label htmlFor="angle-input">Angle:</label>
      <input
        type="text"
        id="angle-input"
        value={angle}
        onChange={handleInputChange}
        maxLength="3"
      />

      <br /><br />

      <input
        type="range"
        id="angle-slider"
        className="slider"
        min="0"
        max="360"
        value={angle}
        onChange={handleSliderChange}
      />

      <div className="radio-buttons">
        <label>
          <input
            type="radio"
            name="angle"
            value="0"
            checked={angle === 0}
            onChange={handleRadioChange}
          /> 0
        </label>
        <label>
          <input
            type="radio"
            name="angle"
            value="45"
            checked={angle === 45}
            onChange={handleRadioChange}
          /> 45
        </label>
        <label>
          <input
            type="radio"
            name="angle"
            value="60"
            checked={angle === 60}
            onChange={handleRadioChange}
          /> 60
        </label>
        <label>
          <input
            type="radio"
            name="angle"
            value="90"
            checked={angle === 90}
            onChange={handleRadioChange}
          /> 90
        </label>
        <label>
          <input
            type="radio"
            name="angle"
            value="180"
            checked={angle === 180}
            onChange={handleRadioChange}
          /> 180
        </label>
      </div>
    </div>
  );
}

export default AngleSelector;
