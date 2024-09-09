let puntosTotales : number = 0;
const cartaBack : string = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg";

const obtenerNumeroAleatorio = () => {
  return Math.floor(Math.random() * 10) + 1;
};

const obtenerNumeroCarta = (numeroAleatorio: number) => {
  if (numeroAleatorio > 7) {
    return numeroAleatorio + 2;
  }

  return numeroAleatorio;
};

const obtenerUrlCarta = (carta: number) => {
  switch (carta) {
    case 1:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg";
    case 2:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg";
    case 3:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg";
    case 4:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg";
    case 5:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg";
    case 6:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg";
    case 7:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg";
    case 10:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg";
    case 11:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg";
    case 12:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg";
    default:
      return cartaBack;
  }
};

const pintarCarta = (urlCarta: string) => { // Muestra la carta si no hay error
  const elementoImagen = document.getElementById("imgCarta");

  if (
    elementoImagen !== null &&                   // SE PODRIA CREAR UNA FUNCION CON ESTO?     <---------
    elementoImagen !== undefined &&              // 
    elementoImagen instanceof HTMLImageElement   //
  ) {
    elementoImagen.src = urlCarta;
  }
};

const obtenerPuntosCarta = (carta: number) => {
  if (carta > 7) {
    return 0.5;
  }
  return carta;
};

const sumarPuntos = (puntos: number) => {
  return puntosTotales + puntos;
};

const actualizarPuntuacion = (puntosActuales: number) => {
  puntosTotales = puntosActuales;
};

const pintarPuntuacion = (puntuacion: number) => {
  const elementoPuntuacion = document.getElementById("puntuacion");

  if (
    elementoPuntuacion !== null &&
    elementoPuntuacion !== undefined &&
    elementoPuntuacion instanceof HTMLSpanElement
  ) {
    elementoPuntuacion.innerText = `${puntuacion}`;
  }
};

const comprobarPartida = () => {
  if (puntosTotales === 7.5 || puntosTotales > 7.5) {
    if (botonDameCarta !== null && 
      botonDameCarta !== undefined && 
      botonDameCarta instanceof HTMLButtonElement) {
      bloquearBoton(botonDameCarta, true);
    }
    if (botonMePlanto !== null && 
      botonMePlanto !== undefined && 
      botonMePlanto instanceof HTMLButtonElement) {
      bloquearBoton(botonMePlanto, true);
    }
  }
  
  if (puntosTotales === 7.5) {
    console.log('Has ganado');
    pintarMejorPuntuacion(7.5);
    pintarMensajeFinal("HAS GANADO!");
  }
  if (puntosTotales > 7.5) {
    console.log('Has perdido');
    pintarMensajeFinal("Has perdido... Prueba otra vez!");
  }
};

const dameCarta = () => {
  const numeroAleatorio = obtenerNumeroAleatorio();
  const carta = obtenerNumeroCarta(numeroAleatorio);
  const urlCarta = obtenerUrlCarta(carta);
  pintarCarta(urlCarta);
  const puntosCarta = obtenerPuntosCarta(carta);
  const puntosSumados = sumarPuntos(puntosCarta);
  actualizarPuntuacion(puntosSumados);
    pintarPuntuacion(puntosTotales);
    comprobarPartida();
};

const botonDameCarta = document.getElementById("dameCarta");

if (
  botonDameCarta !== null &&
  botonDameCarta !== undefined &&
  botonDameCarta instanceof HTMLButtonElement
) {
  botonDameCarta.addEventListener("click", () => {
    dameCarta();
  });
};

const botonReinicio = document.getElementById("reinicio");

if (
  botonReinicio !== null &&
  botonReinicio !== undefined &&
  botonReinicio instanceof HTMLButtonElement
) {
  botonReinicio.addEventListener("click", () => {
    pintarCarta(cartaBack);
    puntosTotales = 0;              // SE PUEDE QUITAR?      <---------------------
    actualizarPuntuacion(0);
    pintarPuntuacion(0);
    pintarMejorPuntuacion(0);
    pintarMensajeFinal("");

    if (botonDameCarta !== null && 
      botonDameCarta !== undefined && 
      botonDameCarta instanceof HTMLButtonElement) {
      bloquearBoton(botonDameCarta, false);
    }
    if (botonMePlanto !== null && 
      botonMePlanto !== undefined && 
      botonMePlanto instanceof HTMLButtonElement) {
      bloquearBoton(botonMePlanto, false);
    }
   })
};

const pintarMejorPuntuacion = (mejorPuntuacion: number) => {
  const elementoMejorPuntuacion = document.getElementById("mejorPuntuacion")
  if (
    elementoMejorPuntuacion !== null &&
    elementoMejorPuntuacion !== undefined &&
    elementoMejorPuntuacion instanceof HTMLSpanElement
  ) {
    elementoMejorPuntuacion.innerText = `${mejorPuntuacion}`
  }
};

const pintarMensajeFinal = (mensajeFinal: string) => {
  const elementoMensajeFinal = document.getElementById("mensajeFinal")
  if (
    elementoMensajeFinal !== null &&
    elementoMensajeFinal !== undefined &&
    elementoMensajeFinal instanceof HTMLSpanElement
  ) {
    elementoMensajeFinal.innerText = `${mensajeFinal}`
  }
};

const botonMePlanto = document.getElementById("mePlanto");

if (
  botonMePlanto !== null &&
  botonMePlanto !== undefined &&
  botonMePlanto instanceof HTMLButtonElement
) {
  botonMePlanto.addEventListener("click", () => {
   pintarMejorPuntuacion(puntosTotales);
   actualizarPuntuacion(0);
   comprobarPartida();
  })
};

// Bloquea o desbloquea el botón --> bloquearBoton(BotonElegido, true/false) 
const bloquearBoton = (boton: HTMLButtonElement, elegirToF: boolean): void => {
  boton.disabled = elegirToF;
};