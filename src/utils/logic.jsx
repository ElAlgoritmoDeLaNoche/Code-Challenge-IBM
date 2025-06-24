export function rotarFrase(frase) {
  if (typeof frase !== 'string') {
    return("");
  }
  const palabrasRotadas = frase.trim().split(/\s+/).reverse().join(" ");

  return palabrasRotadas;
}

export function encontrarPalabrasCaracterUnico(str) {
  if(!str || typeof str !== 'string') {
    return null;
  }

  const frecuencias = new Map();
  for(const char of str) {
    frecuencias.set(char, (frecuencias.get(char) || 0) + 1);
  }

  for(const char of str){
    if(frecuencias.get(char) === 1) {
      return char;
    }
  }
  return null;
}