// ------ CORREGIR AL PRODUCIRSE ERROR AL SACAR CARTA QUE DOBLA LA IMG EN CARTA IZQUIERDA !!!
// ------ NO CONSIGO QUE EL JUEGO TERMINE AL TENER 7.5 SIN TENER QUE DAR A ME PLANTO
// ------ FALTA MODIFICAR DIVS PARA QUE NO SE MUEVAN
// ------ FALTA OCULTAR ME PLANTO AL PERDER POR PASARTE
// ------ FALTA MODIFICAR TAMAÑOS, POSICIONES Y ESTILOS
// ------ FALTA HACER QUE SE MUESTRE CARTA HACIA ABAJO EN LA IZQ AL PULSAR ME PLANTO 


//Inicializar variables y definir constantes
const puntosMax: number = 7.5;
const puntosCero: number = 0;
const numeroCartaCero: number = 0;
const mejorPuntuacionCero: number = 0;
let puntos: number = 0;
let numeroCarta: number = 0;
let mejorPuntuacion: number = 0;
let juegoTerminado: boolean = false;
let cartaNombre: string = "";
let noHayError: boolean = true;

//Botones y mensajes
const puntosElement = document.getElementById("puntucionJugador") as HTMLElement | null;
const cartaElement = document.getElementById("mensaje") as HTMLElement | null;
const mensajeElement = document.getElementById("mensajeComentarios") as HTMLElement | null;
const puntuacionMaxElement = document.getElementById("puntucionMax") as HTMLElement | null;
const restantesElement = document.getElementById("restantes") as HTMLElement | null;
const imgAbajo = document.getElementById("imgAbajo") as HTMLImageElement | null;
const imgCarta = document.getElementById("imgCarta") as HTMLImageElement | null;
const botonDameCarta = document.getElementById("dameCarta") as HTMLButtonElement | null;
const botonMePlanto = document.getElementById("mePlanto") as HTMLButtonElement | null;
const botonReinicio = document.getElementById("reinicio") as HTMLButtonElement | null;
const botonQueHabriaPasado = document.getElementById("queHabriaPasado") as HTMLButtonElement | null;

//URLs de las cartas
const as: string = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg";
const dos: string = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg";
const tres: string = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg";
const cuatro: string = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg";
const cinco: string = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg";
const seis: string = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg";
const siete: string = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg";
const sota: string = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg";
const caballo: string = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg";
const rey: string = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg";
const abajo: string = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg";
const nuevaURLAbajo = abajo;
const mensajeCero = "";
let nuevaURL = abajo;
let mensaje: string ="";
let mensajeRestantes: string ="";

//Contadores de cada carta para simular un juego real
const contMax: number = 4;
const contTotalMax: number = 40;
let contAs: number = 4;
let contDos: number = 4;
let contTres: number = 4;
let contCuatro: number = 4;
let contCinco: number = 4;
let contSeis: number = 4;
let contSiete: number = 4;
let contSota: number = 4;
let contCaballo: number =4;
let contRey: number = 4;
let contTotal: number = 40;

//Reinicio del mensaje de cartas restantes
const mensajeRestantesCuarenta = () => {
    restantesElement.textContent = "Te quedan 40 cartas"
};

//Función pare reiniciar los contadores
const reiniciarContadores = () => {
    contAs = contDos = contTres = contCuatro = contCinco = contSeis 
    = contSiete = contSota = contCaballo = contRey = contMax;  
};

//Contador de cartas restantes
const actualizarContTotal = () => {
    contTotal = contAs + contDos + contTres + contCuatro + contCinco 
            + contSeis + contSiete + contSota + contCaballo + contRey;
};

const NoQuedanCartas = () => {
    if (restantesElement) {
        restantesElement.innerHTML = "No te quedan cartas";
    }
};

//Reinicio de variables
const reiniciarCarta = () => {
    nuevaURL = nuevaURLAbajo
};

const reiniciarMensaje = () => {
    mensaje = mensajeCero
};

const reiniciarMensajeComentarios = () => {
    mensajeElement.innerHTML = "";
};

const reiniciarPuntos = () => {
    puntos = puntosCero
    muestraPuntuacion();
};

const reiniciarMejorPuntuacion = () => {
    mejorPuntuacion = mejorPuntuacionCero
};

const reiniciarNumeroCarta = () => {
    numeroCarta = numeroCartaCero
};

const reiniciarCartaIMG = (elemImgCarta: HTMLImageElement) => {
    if (cartaElement) {
    elemImgCarta.src = abajo;
    }
};

const reiniciarIMG = () => {
    reiniciarCartaIMG(imgAbajo);
    reiniciarCartaIMG(imgCarta);
};

const reiniciarVariables = () => {
    reiniciarPuntos();
    reiniciarNumeroCarta();
    reiniciarCarta();
    reiniciarMensaje();
    mensajeRestantesCuarenta();
    reiniciarContadores();
    actualizarContTotal();
    mostrarMejorPuntuacion();
    reiniciarMensajeComentarios();
    reiniciarIMG();
};

//Función que muestra los puntos en pantalla
const muestraPuntuacion = () => {
    if (puntosElement) {
        puntosElement.textContent = `Puntos: ${puntos}`
    }
};

const nuevoNumeroAleatorio = (): number => {
    const numeroAleatorio = Math.floor(Math.random() * 10) + 1; // Generar un número aleatorio entre 1 y 10
    if (numeroAleatorio <= 7) {
        return numeroAleatorio;
    } else {
        return numeroAleatorio + 3;
    }
};

//Funciones independientes para el switch principal
const cambiarURL = () => {
    imgCarta.src = nuevaURL;
}

const cambiarPuntos = (sumando: number) => {
    puntos = (puntos + sumando)
}

const cambiarNuevaURL = (nombreParaURL: string) => {
    nuevaURL = nombreParaURL
}

const cambiarCartaNombre = (nombreEnString: string) => {
    cartaNombre = nombreEnString
}

//Switch para reducir contador de cada carta
const cambiarContador = (nombreCont: string) => {
    switch(nombreCont) {
        case "contAs":
            contAs--;
            break;
        case "contDos":
            contDos--;
            break;
        case "contTres":
            contTres--;
            break;
        case "contCuatro":
            contCuatro--;
            break;
        case "contCinco":
            contCinco--;
            break;
        case "contSeis":
            contSeis--;
            break;
        case "contSiete":
            contSiete--;
            break;
        case "contSota":
            contSota--;
            break;
        case "contCaballo":
            contCaballo--;
            break;
        case "contRey":
            contRey--;
            break;
        default:
            console.error("Ha habido un error, por favor, reinicia la página");
            break;
    }
};

//LLama a funciones según el número proporcionado por "numero"
function cartaNueva (numero: number): void {
    switch(numero) {
        case 1:
            cambiarCartaNombre(" as");
            cambiarPuntos(1);
            cambiarNuevaURL(as);
            cambiarURL();
            cambiarContador("contAs");
            break;
        case 2:
            cambiarCartaNombre(" dos");
            cambiarPuntos(2);
            cambiarNuevaURL(dos);
            cambiarURL();
            cambiarContador("contDos");
            break;
        case 3:
            cambiarCartaNombre(" tres");
            cambiarPuntos(3);
            cambiarNuevaURL(tres);
            cambiarURL();
            cambiarContador("contTres");
            break; 
        case 4:
            cambiarCartaNombre(" cuatro");
            cambiarPuntos(4);
            cambiarNuevaURL(cuatro);
            cambiarURL();
            cambiarContador("contCuatro");
            break;
        case 5:
            cambiarCartaNombre(" cinco");
            cambiarPuntos(5);
            cambiarNuevaURL(cinco);
            cambiarURL();
            cambiarContador("contCinco");
            break
        case 6:
            cambiarCartaNombre(" seis");
            cambiarPuntos(6);
            cambiarNuevaURL(seis);
            cambiarURL();
            cambiarContador("contSeis");
            break;
        case 7:
            cambiarCartaNombre(" siete");
            cambiarPuntos(7);
            cambiarNuevaURL(siete);
            cambiarURL();
            cambiarContador("contSiete");
            break;
        case 10:
            cambiarCartaNombre("a sota");
            cambiarPuntos(0.5);
            cambiarNuevaURL(sota);
            cambiarURL();
            cambiarContador("contSota");
            break;
        case 11:
            cambiarCartaNombre(" caballo");
            cambiarPuntos(0.5);
            cambiarNuevaURL(caballo);
            cambiarURL();
            cambiarContador("contCaballo");
            break;
        case 12:
            cambiarCartaNombre(" rey");
            cambiarPuntos(0.5);
            cambiarNuevaURL(rey);
            cambiarURL();
            cambiarContador("contRey");
            break;
        default:
            console.error("Ha habido un error, prueba otra vez");
            break;
    }
    mensaje = `Has sacado un${cartaNombre}`;
    if (cartaElement) {
        cartaElement.textContent = mensaje;
    }
};

const igualarNumAVariable = () => {
    numeroCarta = nuevoNumeroAleatorio()
};

//Comprobador de números repetidos
const comprobarSiRepetido = () => {
    if (contTotal > 0) {
        while (true){
            igualarNumAVariable();
            if ((numeroCarta == 1) && (contAs == 0) ||
                (numeroCarta == 2) && (contDos == 0) ||
                (numeroCarta == 3) && (contTres == 0) ||
                (numeroCarta == 4) && (contCuatro == 0) ||
                (numeroCarta == 5) && (contCinco == 0) ||
                (numeroCarta == 6) && (contSeis == 0) ||
                (numeroCarta == 7) && (contSiete == 0) ||
                (numeroCarta == 10) && (contSota == 0) ||
                (numeroCarta == 12) && (contRey == 0) ||
                (numeroCarta == 11) && (contCaballo == 0)){
                continue;
            } else {
                break;
            }
        } 
    }
};

//Muestra cartas restantes
const muestraQuedanCartas = () => {
    mensajeRestantes = contTotalMax > 0 ? `Te quedan ${contTotal} cartas`:
                     contTotalMax === 0 ? `No te quedan cartas`:
                        "";
    if (restantesElement) {
        restantesElement.textContent = mensajeRestantes;
    }
};

const moverCarta = () => {
    imgAbajo.src = imgCarta.src;
};

//Manejo de mejor puntuación
const manejarMejorPuntuacion = () => {
    if ((puntos > mejorPuntuacion) && (puntos <= 7.5)) {
        mejorPuntuacion = puntos;
    }
};

//Mejor puntuación
const mostrarMejorPuntuacion = () => {
    if (puntuacionMaxElement) {
    puntuacionMaxElement.innerHTML = `<h2>Tu mejor puntuación es: ${puntos}</h2>`;
    }
};

//Funciones que controlan el juego
const hasPerdidoMensaje = () => {
    mensajeRestantes = `<h2>Has perdido, te pasaste de 7.5</h2>`;
    if (mensajeElement) {
        mensajeElement.innerHTML = mensajeRestantes;
    }
};

const hasPerdidoPuntos = () => { //Pierdes por pasarte de puntos
    if (puntos > puntosMax ) {
        hasPerdidoMensaje();
        ocultar(botonMePlanto);
    }
};

const hasPerdidoCartas = () => { //Pierdes por quedarte sin cartas
    if (contTotal === 0) {
        hasPerdidoMensaje();
        ocultar(botonMePlanto);
    }
};

const ocultar = (boton: HTMLButtonElement) => {
    boton.style.opacity = "0";
};

const mostrar = (boton: HTMLButtonElement) => {
    boton.style.opacity = "1";
}

const hasPerdido = () => { //Pierdes por quedarte sin cartas o por pasarte de puntos
    if (puntos > puntosMax || contTotal === 0) {
        juegoTerminado = true;
        hasPerdidoMensaje();
        
        if (botonQueHabriaPasado) { //Muestra el botón oculto
            mostrar(botonQueHabriaPasado);
        }
    }
};

const hasGanado = () => {
    if (puntos === puntosMax) {
        juegoTerminado = true;
    }
};

const probarContadores = () => {
    console.log(contAs, contDos, contTres, contCuatro, contCinco, contSeis, contSiete, contSota, contCaballo, contRey)
};

//Función de ayuda para reducir redundancia
const agregarEventoSiExiste = (elemento: HTMLElement | null, evento: string, handler: EventListener) => {
    if (elemento) {
        elemento.addEventListener(evento, handler);
    }
};

const eliminarEventoSiExiste = (elemento: HTMLElement | null, evento: string, handler: EventListener) => {
    if (elemento) {
        elemento.removeEventListener(evento, handler);
    }
};

//Manejar errores
if (!puntosElement) {
    console.error("Elemento 'puntucionJugador' no encontrado");
    noHayError = false;
};

if (!botonDameCarta) {
    console.error("Elemento 'dameCarta' no encontrado");
    noHayError = false;
};

if (!imgCarta) {
    console.error("Elemento 'imgCarta' no encontrado");
    noHayError = false;
};

if (!mensajeElement) {
    console.error("Elemento 'mensajeComentarios' no encontrado");
    noHayError = false;
};

if (!restantesElement) {
    console.error("Elemento 'restantes' no encontrado");
    noHayError = false;
};

if (!puntuacionMaxElement) {
    console.error("Elemento 'puntucionMax' no encontrado");
    noHayError = false;
};

if (!botonMePlanto) {
    console.error("Elemento 'mePlanto' no encontrado");
    noHayError = false;
};

if (!botonReinicio) {
    console.error("Elemento 'reinicio' no encontrado");
    noHayError = false;
};

if (!botonQueHabriaPasado) {
    console.error("Elemento 'queHabriaPasado' no encontrado");
    noHayError = false;
};

//Manejo del error, saca carta automáticamente
const reintentarDameCarta = () => {
    setTimeout(() => {
        noHayError = true; // Resetear la bandera de error antes de reintentar
        mostrarNumero();
    }, 1000); // Retraso de 1 segundo antes de reintentar
};

//Función para manejar dameCarta
const dameCarta = () => {
    if (!juegoTerminado && puntos <= 7.5 && contTotal > 0) {
        if (noHayError) {
            agregarEventoSiExiste(botonDameCarta, "click", mostrarNumero);
            reiniciarMensajeComentarios();
        } else {
            reintentarDameCarta(); // Si hay un error, reintentar
        }
    } else if (juegoTerminado) {
        hasPerdidoMensaje();
        eliminarEventoSiExiste(botonDameCarta, "click", dameCarta);
    }
    probarContadores();
};

//Botón para pedir carta
const actualizarBotonDameCarta = () => {
   if (juegoTerminado) {
    eliminarEventoSiExiste(botonDameCarta, "click", dameCarta);
    reiniciarMensajeComentarios();
   }
};

//Mensaje al plantarse
const calcularMensajeFinal = () =>{
    const mensajeFinal = puntos < 4 ? "Has sido muy conservador" :
                        puntos === 5 ? "Te ha entrado el canguelo eh?" :
                        puntos >= 6 && puntos <= 7 ? "Casi casi..." :
                        puntos === 7.5 ? "¡Lo has clavado! ¡Enhorabuena!" :
                        "";
    if (mensajeElement) {
        mensajeElement.textContent = mensajeFinal;
    }
};

//Actualiza la mejor puntuación
const compararSiMejor = () => {
    if (puntos > mejorPuntuacion) {
        mejorPuntuacion = puntos
    }
};

//LLama a la función mePlanto al hacer click
const mePlanto = () => {
    agregarEventoSiExiste(botonMePlanto, "click", manejarMePlanto);
};

//Función para bloquear el botón después de verificar el estado del juego
const manejarBotonMePlanto = () => {
    eliminarEventoSiExiste(botonMePlanto, "click", manejarBotonMePlanto);
};

//Función para verificar si el juego ha terminado
const verificarEstadoJuego = () =>  {
    if (puntos > puntosMax || contTotal === 0) {
        hasPerdido();
    }
};

//Funciones que realiza mePlanto
const manejarMePlanto = () => {
    if (!juegoTerminado) {
        compararSiMejor();
        calcularMensajeFinal();
        mostrarMejorPuntuacion();
        reiniciarPuntos();
    }
};

const seguirJuego = () => {
    juegoTerminado = false
};

//Funcionamiento reinicio
const reinicioJuego = () => {
    reiniciarVariables()
    reiniciarMejorPuntuacion();
    muestraPuntuacion();
    dameCarta();
    mensajeRestantesCuarenta();
    reiniciarMensajeComentarios();
    ocultar(botonQueHabriaPasado)
    seguirJuego();
};

//Botón de reinicio
const reinicio = () => {
    agregarEventoSiExiste(botonReinicio, "click", reinicioJuego);
};

//Función principal
const mostrarNumero = () => {
    if (puntos <= puntosMax) {
        igualarNumAVariable();  // Genera un nuevo num aleatorio
        comprobarSiRepetido();  // Comprueba si ya ha salido
        moverCarta();
        cartaNueva(numeroCarta); // Muestra carta y actualiza los puntos
        muestraPuntuacion();    // Muestra los puntos
        actualizarContTotal();  // Actualiza contador de cartas restantes
        muestraQuedanCartas();  // Muestra cartas restantes
        verificarEstadoJuego(); // Verifica si has perdido en cada turno
        dameCarta();
    } else {
        hasPerdido();
        muestraQuedanCartas();
        verificarEstadoJuego();
    }
};


//Carga del DOM
document.addEventListener("DOMContentLoaded", () => {
    muestraPuntuacion();
    dameCarta();
    reinicio();
    mePlanto();
    muestraQuedanCartas();
});
