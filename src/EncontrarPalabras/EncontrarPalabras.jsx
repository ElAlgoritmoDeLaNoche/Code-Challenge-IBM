import React, { useState } from 'react';
import { encontrarPalabrasCaracterUnico } from '../utils/logic';

const EncontrarPalabras = () => {

  const [inputBuscador, setInputBuscador] = useState("");
  const [resultadoChar, setResultadoChar] = useState(null);
  const [BusquedaRealizada, setBusquedaRealizada] = useState(false)

  const handleBuscarClick = () => {
    setBusquedaRealizada(true);

    const resultado = encontrarPalabrasCaracterUnico(inputBuscador);
    setResultadoChar(resultado);
  }

  return (
    <div>
      <h1>Encontrar Palabras</h1>
      <input
        type="text"
        value={inputBuscador}
        onChange={(e) => setInputBuscador(e.target.value)}
        placeholder="aa1223"
      />
      <button onClick={handleBuscarClick}>Buscar</button>
      {BusquedaRealizada && (
        <div>
          <h2>Resultados de la Búsqueda</h2>
          {resultadoChar === null ? (
            <strong>null</strong>
          ) : (
            `El primer resultado es: ${resultadoChar}`
          )}
        </div>
      )}
    </div>
  );
}

export default EncontrarPalabras;
