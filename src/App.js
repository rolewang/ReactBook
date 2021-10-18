import React, { useState } from "react";
import colorData from "./color-data.json"
import ColorList from "./components/ColorList"

function App() {
  const [colors, setColors] = useState(colorData)
  const [selectedStars, setSelectedStars] = useState(0)

  function removeColor(id) {
     const newColors = colors.filter(color => color.id !== id);
     setColors(newColors)
  }
  function rateColor(id, rating) {
    console.log(colors)
    const newColors = colors.map(color =>  color.id === id ? {...color, rating}: color)
    setColors(newColors)
  }
  return (
    <>
  
    <ColorList colors={colors} onRemoveColor={removeColor} onRateColor={rateColor}/>
    </>
  );
}

export default App;
