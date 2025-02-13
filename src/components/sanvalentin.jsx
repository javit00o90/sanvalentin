import { useState, useEffect, useRef } from "react";
import "leaflet/dist/leaflet.css";

export default function ValentineOnePage() {
  const [text, setText] = useState("");
  const audioRef = useRef(null);
  const message = `Brenda, mi amor..\n\nDesde aquel día que nos vimos en el Cosmo, supe que había algo especial en ti. No imaginé que ese encuentro nos llevaría a este hermoso camino juntos, pero ahora no puedo imaginar mi vida sin ti.\n\nCada día a tu lado es un regalo, y desde el 25 de diciembre, mi mundo brilla más fuerte. Adoro tu risa, tu mirada y la forma en que haces que todo sea más bonito y significativo.\n\nEste es nuestro primer San Valentín juntos, y quiero que sepas que es el primero de muchos. Gracias por ser mi compañera, por cada momento compartido y por todo lo que nos espera.\n\nTe quiero con todo mi corazón.\n\nFeliz San Valentín, mi amor.\n\nJavier 💖`;

  const speed = 60;
  const step = 1;

  useEffect(() => {
    let i = 0;
    setText("");

    const interval = setInterval(() => {
      if (i < message.length) {
        setText(message.slice(0, i + step));
        i += step;
      } else {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [message]);


  return (
    <div className="flex flex-col items-center justify-center w-full max-w-lg">
      
      {/* Componente de audio */}
      <audio ref={audioRef} autoPlay loop>
        <source src="/cancion.mp3" type="audio/mp3" />
        Tu navegador no soporta el elemento de audio.
      </audio>

      <div className="papel">
        <p 
          className="texto"
          dangerouslySetInnerHTML={{ __html: text.replace(/\n/g, "<br />") }} 
        />
      </div>
    </div>
  );
}
