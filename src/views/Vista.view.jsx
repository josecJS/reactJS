import React, { useState } from 'react';

export default function Vista(props) {
    const [mensajesSinLeer, setMensajesSinLeer] = useState(0);
    let addMensajeSinLeer = () => { setMensajesSinLeer(mensajesSinLeer + 1); }

    return (
        <div>
          {mensajesSinLeer > 0 ?
              (<p> Tienes {mensajesSinLeer} mensajes sin leer... </p>) :
              (<p> No tienes mensajes sin leer... </p>)
          }
  
          <button onClick={addMensajeSinLeer}>Sumar 1 mensaje</button>
        </div>
      );
}