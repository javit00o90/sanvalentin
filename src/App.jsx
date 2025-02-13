// import ValentineOnePage from "./components/sanvalentin";

// function App() {
//   return <ValentineOnePage />;
// }

// export default App;

import { useState } from "react";
import ValentineOnePage from "./components/sanvalentin";

function App() {
  const [showLetter, setShowLetter] = useState(false);

  return (
    <div className="flex items-center justify-center h-screen bg-pink-100">
      {!showLetter ? (
        <button onClick={() => setShowLetter(true)} className="relative botonCarta">
          <img src="/carta1.png" alt="Sobre de carta" className="w-40 h-40 cursor-pointer transition-transform duration-500 hover:scale-105 imagenCarta" />
        </button>
      ) : (
        <ValentineOnePage />
      )}
    </div>
  );
}

export default App;