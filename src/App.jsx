import React, { useEffect, useState } from 'react';

const App = () => {
  // Definir el estado inicial con las opciones de cada categoría
  const [estadoBoton, setEstadoBoton] = useState(null);
  const [categoria, setCategoria] = useState(null);
  const [posiciones, setPosiciones] = useState(0);
  const opcionesPorCategoria = {
    Profesiones: [
      'Doctor',
      'Bombero',
      'Maestro',
      'Chef',
      'Policía',
      'Bailarín',
      'Carpintero',
      'Cantante',
      'Agricultor',
      'Peluquero',
    ],
    Animales: [
      'Perro',
      'Gato',
      'Elefante',
      'León',
      'Mono',
      'Oso',
      'Serpiente',
      'Pájaro',
      'Pez',
      'Mariposa',
    ],
    Objetos_Cotidianos: [
      'Teléfono',
      'Libro',
      'Reloj',
      'Silla',
      'Martillo',
      'Espejo',
      'Taza',
      'Cepillo de dientes',
      'Cuchara',
      'Computadora',
    ],
    Emociones: [
      'Felicidad',
      'Tristeza',
      'Sorpresa',
      'Miedo',
      'Enojo',
      'Amor',
      'Confusión',
      'Vergüenza',
      'Aburrimiento',
      'Confianza',
    ],
  };

  // Manejar clic en los botones
  const handleClick = (categoria) => {
    setCategoria(categoria);
    // Actualizar el estado con las opciones de la categoría clickeada
    if (categoria) {
      setEstadoBoton(opcionesPorCategoria[categoria][posiciones]);
    }
  };

  useEffect(() => {
    if (categoria !== null) {
      setEstadoBoton(opcionesPorCategoria[categoria][posiciones]);
    }
  }, [categoria, posiciones]);

  return (
    <div className='container'>
      <div className='btn-container'>
        <button
          className='btn-category'
          onClick={() => handleClick('Profesiones')}
        >
          Profesiones
        </button>
        <button
          className='btn-category'
          onClick={() => handleClick('Animales')}
        >
          Animales
        </button>
        <button
          className='btn-category'
          onClick={() => handleClick('Objetos_Cotidianos')}
        >
          Objetos Cotidianos
        </button>
        <button
          className='btn-category'
          onClick={() => handleClick('Emociones')}
        >
          Emociones
        </button>
      </div>

      {estadoBoton && <p>{estadoBoton}</p>}
      <button
        className='aleatorio'
        onClick={() => {
          const numeroAleatorio = Math.floor(Math.random() * 10); // Genera un número aleatorio entre 0 y 9
          console.log(numeroAleatorio);
          setPosiciones(numeroAleatorio);
        }}
      >
        Botón Aleatorio
      </button>
    </div>
  );
};

export default App;
