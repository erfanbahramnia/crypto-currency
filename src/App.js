import React from "react";

// components
import Cryptos from "./components/Cryptos";

function App() {
  const containerStyle = {
    "boxSizing": "borderBox",
    "width": "100vw",
    "minHeight": "100vh",
    "display": "flex",
    "justifyContent": "center", 
    "alignItems": "center",
    "backgroundColor": "#fff",
  }

  return (
    <div style={containerStyle}>
      <Cryptos />
    </div>
  );
};

export default App;
