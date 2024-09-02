
//Inicializar variables y definir constantes
const PUNTOSMAX: number = 7.5;
let puntos: number = 0;
let numeroCarta: number = 0;
let mejorPuntuacion: number = 0;
let juegoTerminado: boolean = false;
let cartaNombre: string = "";
let noHayError: boolean = true;

//Botones y mensajes
const puntosElement = document.getElementById("puntucionJugador");
const cartaElement= document.getElementById("mensaje");
const mensajeElement = document.getElementById("mensajeComentarios");
const puntuacionMaxElement = document.getElementById("puntucionMax");
const restantesElement = document.getElementById("restantes");
const imgCarta = document.getElementById("imgCarta");
const botonDameCarta = document.getElementById("dameCarta");
const botonMePlanto = document.getElementById("mePlanto");
const botonReinicio = document.getElementById("reinicio");
const botonQueHabriaPasado = document.getElementById("queHabriaPasado");

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
const CONTMAX: number = 4;
const CONTTOTALMAX: number = 40;
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
    if (restantesElement instanceof HTMLDivElement) {
        restantesElement.textContent = "Te quedan 40 cartas";
    }
};

//Función pare reiniciar los contadores
const reiniciarContadores = () => {
    contAs = contDos = contTres = contCuatro = contCinco = contSeis 
        = contSiete = contSota = contCaballo = contRey = CONTMAX;
    contTotal = CONTTOTALMAX;
}; 

//Contador de cartas restantes
const actualizarContTotal = () => {
    contTotal = contAs + contDos + contTres + contCuatro + contCinco 
            + contSeis + contSiete + contSota + contCaballo + contRey;
};

const NoQuedanCartas = () => {
    if (restantesElement instanceof HTMLDivElement) {
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
    if (mensajeElement instanceof HTMLParagraphElement) {
        mensajeElement.innerHTML = "";
    }
};

const reiniciarPuntos = () => {
    puntos = 0;
    muestraPuntuacion();
};

const reiniciarMejorPuntuacion = () => {
    mejorPuntuacion = 0;
};

const reiniciarNumeroCarta = () => {
    numeroCarta = 0;
};

const reiniciarIMG = () => {
    if (imgCarta && imgCarta instanceof HTMLImageElement) {
        reiniciarCartaIMG(imgCarta);
    }
};

const reiniciarCartaIMG = (elemImgCarta: HTMLImageElement) => {
    elemImgCarta.src = abajo;
};

const muestraPuntuacion = () => { //Muestra los puntos en pantalla
    if (puntosElement instanceof HTMLDivElement) {
        puntosElement.textContent = `Puntos: ${puntos}`
    }
};

const obtenerNumeroAleatorio = (): number => {
    return Math.floor(Math.random() * 10) + 1;
};

const obtenerNumeroCarta = (numeroAleatorio: number): number => {
    if (numeroAleatorio > 7) {
        return numeroAleatorio + 2;
    }
    return numeroAleatorio;
};

//Bloquear botones
const bloquearBoton = (boton: HTMLButtonElement, elegirToF: boolean): void => {
    boton.disabled = elegirToF;
};

const seguirJuego = () => {
    juegoTerminado = false;
};

const puntosConsola = () => {  // BORRAR FUNCIÓN CUANDO NO HAGA FALTA
    console.log("puntos " + puntos);
};

//Funciones independientes para el switch principal
const cambiarPuntos = (sumando: number) => {
    puntos = (puntos + sumando);
};

const cambiarNuevaURL = (nombreParaURL: string) => {
    nuevaURL = nombreParaURL;
};

const cambiarCartaNombre = (nombreEnString: string) => {
    cartaNombre = nombreEnString;
};

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
            //cambiarPuntos(1);
            cambiarNuevaURL(as);
            cambiarContador("contAs");
            break;
        case 2:
            cambiarCartaNombre(" dos");
            //cambiarPuntos(2);
            cambiarNuevaURL(dos);
            cambiarContador("contDos");
            break;
        case 3:
            cambiarCartaNombre(" tres");
            //cambiarPuntos(3);
            cambiarNuevaURL(tres);
            cambiarContador("contTres");
            break; 
        case 4:
            cambiarCartaNombre(" cuatro");
            //cambiarPuntos(4);
            cambiarNuevaURL(cuatro);
            cambiarContador("contCuatro");
            break;
        case 5:
            cambiarCartaNombre(" cinco");
            //cambiarPuntos(5);
            cambiarNuevaURL(cinco);
            cambiarContador("contCinco");
            break
        case 6:
            cambiarCartaNombre(" seis");
            //cambiarPuntos(6);
            cambiarNuevaURL(seis);
            cambiarContador("contSeis");
            break;
        case 7:
            cambiarCartaNombre(" siete");
            //cambiarPuntos(7);
            cambiarNuevaURL(siete);
            cambiarContador("contSiete");
            break;
        case 10:
            cambiarCartaNombre("a sota");
            //cambiarPuntos(0.5);
            cambiarNuevaURL(sota);
            cambiarContador("contSota");
            break;
        case 11:
            cambiarCartaNombre(" caballo");
            //cambiarPuntos(0.5);
            cambiarNuevaURL(caballo);
            cambiarContador("contCaballo");
            break;
        case 12:
            cambiarCartaNombre(" rey");
            //cambiarPuntos(0.5);
            cambiarNuevaURL(rey);
            cambiarContador("contRey");
            break;
        default:
            console.error("Ha habido un error, prueba otra vez");
            break;
    }
    mensaje = `Has sacado un${cartaNombre}`;
    if (cartaElement instanceof HTMLImageElement) {
        cartaElement.textContent = mensaje;
    }
};

const igualarNumAVariable = () => {
    numeroCarta = obtenerNumeroAleatorio()
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
    mensajeRestantes = contTotal > 0 ? `Te quedan ${contTotal} cartas`:
                     contTotal === 0 ? `No te quedan cartas`:
                        "";
    if (restantesElement instanceof HTMLDivElement) {
        restantesElement.textContent = mensajeRestantes;
    }
};

//Manejo de mejor puntuación
const manejarMejorPuntuacion = () => {
    if ((puntos > mejorPuntuacion) && (puntos <= 7.5)) {
        mejorPuntuacion = puntos;
    }
};

//Mejor puntuación
const mostrarMejorPuntuacion = () => {
    if (puntuacionMaxElement instanceof HTMLDivElement) {
    puntuacionMaxElement.innerHTML = `<h2>Tu mejor puntuación es: ${puntos}</h2>`;
    }
};

//Funciones que controlan el juego
const hasPerdidoMensaje = () => {
    mensajeRestantes = `<h2>Has perdido, te pasaste de 7.5</h2>`;
    if (mensajeElement instanceof HTMLParagraphElement) {
        mensajeElement.innerHTML = mensajeRestantes;
    }
};

const probarContadores = () => {
    console.log(contAs, contDos, contTres, contCuatro, contCinco, contSeis, contSiete, contSota, contCaballo, contRey);
    console.log(mensajeRestantes);
};

//Función de ayuda para reducir redundancia
const agregarEventoSiExiste = (elemento: HTMLElement | null, evento: string, handler: EventListener) => {
    if (elemento) {
        elemento.addEventListener(evento, handler);
    }
};

//Manejo del error, saca carta automáticamente
const reintentarDameCarta = () => {
    if (botonDameCarta instanceof HTMLButtonElement) {
        setTimeout(() => {
            noHayError = true; // Resetear la bandera de error antes de reintentar
            mostrarNumero();
        }, 1000); // Retraso de 1 segundo antes de reintentar
    }
};

const obtenerURLCarta = (carta: number): string => {
    switch (carta) {
        case 1: 
            return as;
        case 2:
            return dos;
        case 3:
            return tres;
        case 4:
            return cuatro;
        case 5: 
            return cinco;
        case 6:
            return seis;
        case 7:
            return siete;
        case 10:
            return sota;
        case 11:
            return caballo;
        case 12:
            return rey;
        default:
            return abajo;
    }
};

const mostrarURLCarta = (URLCarta: string) => {
    if (imgCarta && imgCarta instanceof HTMLImageElement) {
        imgCarta.src = URLCarta;
    }
};

const obtenerPuntosCarta = (carta: number) => {
    return carta > 7 ? 0.5 : carta;
};

const sumarPuntos = (punto: number) => {
    return puntos + punto;
};

const actualizarPuntos = (nuevosPuntos: number) => {
    puntos = nuevosPuntos;
};

const gestionarPartida = () => {
    if (puntos === 7.5) {
        console.log("has ganado");
    } else if (puntos > 7.5) {
        console.log("has perdido");
        hasPerdidoMensaje(); 
        juegoTerminado = true;
        actualizarBotonDameCarta();
    }
};

//Botón para pedir carta
const actualizarBotonDameCarta = () => {
    if (botonDameCarta instanceof HTMLButtonElement) {
        if (juegoTerminado) {
            bloquearBoton(botonDameCarta, true);
            reiniciarMensajeComentarios();
        } else {
            bloquearBoton(botonDameCarta, false);
        }
    }
};

//Mensaje al plantarse
const calcularMensajeFinal = () =>{
    const mensajeFinal = puntos < 4 ? "Has sido muy conservador" :
                        puntos === 5 ? "Te ha entrado el canguelo eh?" :
                        puntos >= 6 && puntos <= 7 ? "Casi casi..." :
                        puntos === 7.5 ? "¡Lo has clavado! ¡Enhorabuena!" :
                        "";
    if (mensajeElement instanceof HTMLParagraphElement) {
        mensajeElement.textContent = mensajeFinal;
    }
};

//Actualiza la mejor puntuación
const compararSiMejor = () => {
    if (puntos > mejorPuntuacion) {
        mejorPuntuacion = puntos;
    }
    mostrarMejorPuntuacion();
};

//LLama a la función mePlanto al hacer click
const mePlanto = () => {
    if (botonMePlanto instanceof HTMLButtonElement) {
        agregarEventoSiExiste(botonMePlanto, "click", manejarMePlanto);
    }
};

//Funciones que realiza mePlanto
const manejarMePlanto = () => {
    if (!juegoTerminado) {
        gestionarPartida();
        calcularMensajeFinal();
        compararSiMejor();
        reiniciarPuntos();
    }
};

const dameCarta = () => {
    comprobarSiRepetido();
    const carta = numeroCarta;
    cartaNueva(carta);
    puntosConsola();
    const URLCarta = obtenerURLCarta(carta);
    mostrarURLCarta(URLCarta);
    const puntosCarta = obtenerPuntosCarta(carta);
    const puntosSumados = sumarPuntos(puntosCarta);
    actualizarPuntos(puntosSumados);
    gestionarPartida();
    puntosConsola();
    muestraPuntuacion();
    actualizarBotonDameCarta();
    actualizarContTotal();
    muestraQuedanCartas();
    probarContadores();
};

//Botón de reinicio
const reinicio = () => {
    if (botonReinicio instanceof HTMLButtonElement) {
        agregarEventoSiExiste(botonReinicio, "click", reinicioJuego);
    }
};

const reiniciarVariables = () => {
    reiniciarPuntos();
    reiniciarNumeroCarta();
    reiniciarCarta();
    reiniciarIMG();
    reiniciarMensaje();
    reiniciarContadores();
    actualizarContTotal();
    mostrarMejorPuntuacion();
    reiniciarMensajeComentarios();
    mensajeRestantesCuarenta();
};

//Funcionamiento reinicio
const reinicioJuego = () => {
    reiniciarVariables();
    seguirJuego();
    muestraPuntuacion();
    if (botonDameCarta instanceof HTMLButtonElement) {
        bloquearBoton(botonDameCarta, false);
    }
    if (botonMePlanto instanceof HTMLButtonElement) {
        bloquearBoton(botonMePlanto, false);
    }
};


//Función principal
const mostrarNumero = () => {
    if (puntos <= PUNTOSMAX) {
        igualarNumAVariable();  // Genera un nuevo num aleatorio
        comprobarSiRepetido();  // Comprueba si ya ha salido
        cartaNueva(numeroCarta); // Muestra carta y actualiza los puntos
        muestraPuntuacion();    // Muestra los puntos
        actualizarContTotal();  // Actualiza contador de cartas restantes
        muestraQuedanCartas();  // Muestra cartas restantes
        dameCarta();
    } else {
        muestraQuedanCartas();
    }
};

//Carga del DOM
document.addEventListener("DOMContentLoaded", () => {
    agregarEventoSiExiste(botonDameCarta, "click", dameCarta);
    agregarEventoSiExiste(botonReinicio, "click", reinicioJuego);
    agregarEventoSiExiste(botonMePlanto, "click", mePlanto);
    muestraQuedanCartas();
    muestraPuntuacion();
});
