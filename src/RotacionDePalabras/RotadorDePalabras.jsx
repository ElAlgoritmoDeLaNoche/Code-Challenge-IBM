import React, { useState } from 'react';
import { rotarFrase } from '../utils/logic';

const RotadorDePalabras = () => {

  const [inputFrase, setInputFrase] = useState("");
  const [fraseRotada, setFraseRotada] = useState("");
  const [error, setError] = useState("");

  const handleInputChange = (event) => {
    setInputFrase(event.target.value);

    if (error) setError("");
    if (fraseRotada) setFraseRotada("");
  };

  const handleRotarFrase = () => {
    if (!inputFrase.trim()) {
      setError("Por favor, ingresa una frase para rotar.");
      setFraseRotada("");
      return;
    }
    setError("");

    const resultado = rotarFrase(inputFrase);
    setFraseRotada(resultado);
  };

  return (
    <div>
      <h1>Rotador de Frases</h1>
      <input
        type="text"
        value={inputFrase}
        onChange={handleInputChange}
        placeholder="Ingresa una frase"
      />
      <button onClick={handleRotarFrase}>Rotar Frase</button>
      {error && <p className="error">{error}</p>}
      {fraseRotada && <p className="resultado">Frase Rotada: {fraseRotada}</p>}
    </div>
  );
}

export default RotadorDePalabras;
