import React, { useEffect, useState } from 'react';

const TextoLimitado = ({ texto, limitePalabras }) => {
  const [textoRecortado, setTextoRecortado] = useState('');

  useEffect(() => {
    const palabras = texto.split(' ').slice(0, limitePalabras);
    setTextoRecortado(palabras.join(' ') + '...');
  }, [texto, limitePalabras]);

  return (
    <div className="max-w-xl mx-auto">
      <p className="text-white text-xl">
        {textoRecortado}
      </p>
    </div>
  );
};

export default TextoLimitado;