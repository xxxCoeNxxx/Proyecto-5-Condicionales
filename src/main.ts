//Inicializar variables
let puntos: number = 0;
let numeroCarta: number = 0;
const totalCartas: number = 40;
let restantes: number = totalCartas;
let mejorPuntuacion: number = 0;

//Botones y mensajes
const puntosElement: HTMLElement | null = document.getElementById("puntucionJugador");
const botonDameCarta: HTMLElement | null = document.getElementById("dameCarta");
const cartaElement: HTMLElement | null = document.getElementById("mensaje");
const imgAbajo: HTMLElement | null = document.getElementById("imgAbajo");
const imgCarta = document.getElementById("imgCarta") as HTMLImageElement;
const mensajeElement: HTMLElement | null = document.getElementById("mensajeFin");
const botonMePlanto: HTMLElement | null = document.getElementById("mePlanto");
const botonReinicio: HTMLElement | null = document.getElementById("reinicio");


//URLs de las cartas
const as = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg";
const dos = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg";
const tres = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg";
const cuatro = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg";
const cinco = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg";
const seis = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg";
const siete = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg";
const sota = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg";
const caballo = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg";
const rey = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg";
const abajo = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg";
let nuevaURL = abajo;
let mensaje: string ="";

//Contadores de cada carta para simular un juego real
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


//Función que muestra los puntos en pantalla
const muestraPuntuacion = () => {
    if (puntosElement) {
        puntosElement.textContent = `Puntos: ${puntos}`
    }
};

//Genera números aleatorios del 1 al 7 y del 10 al 12
const nuevoNumeroAleatorio = (): number => {
    const numeroAleatorio = Math.round(Math.random() * 10) + 1;
    if (numeroAleatorio > 7) {
        if (numeroAleatorio == 11){ 
            return numeroAleatorio + 1;
        }
    return numeroAleatorio + 2;
    } 
    else {
        return numeroAleatorio;
    }
};

// FALTA METER EN INTERFACE!!!                  ******************
function cartaNueva (numero: number): void {
    let cartaNombre: string = ``;
    switch(numero) {
        case 1:
            cartaNombre = " as"
            puntos++;
            nuevaURL = as;
            imgCarta.src = nuevaURL;
            contAs--;
            break;
        case 2:
            cartaNombre = " dos"
            puntos += 2;
            nuevaURL = dos;
            imgCarta.src = nuevaURL;
            contDos--;
            break;
        case 3:
            cartaNombre =  " tres"
            puntos += 3;
            nuevaURL = tres;
            imgCarta.src = nuevaURL;
            contTres--;
            break; 
        case 4:
            cartaNombre = " cuatro"
            puntos += 4;
            nuevaURL = cuatro;
            imgCarta.src = nuevaURL;
            contCuatro--;
            break;
        case 5:
            cartaNombre = " cinco"
            puntos += 5;
            nuevaURL = cinco;
            imgCarta.src = nuevaURL;
            contCinco--;
            break;
        case 6:
            cartaNombre = " seis"
            puntos += 6;
            nuevaURL = seis;
            imgCarta.src = nuevaURL;
            contSeis--;
            break;
        case 7:
            cartaNombre = " siete"
            puntos += 7;
            nuevaURL = siete;
            imgCarta.src = nuevaURL;
            contSiete--;
            break;
        case 10:
            cartaNombre =  "a sota"
            puntos += 0.5;
            nuevaURL = sota;
            imgCarta.src = nuevaURL;
            contSota--;
            break;
        case 11:
            cartaNombre =  " caballo"
            puntos += 0.5;
            nuevaURL = caballo;
            imgCarta.src = nuevaURL;
            contCaballo--;
            break;
        case 12:
            cartaNombre = " rey"
            puntos += 0.5;
            nuevaURL = rey;
            imgCarta.src = nuevaURL;
            contRey--;
            break;
        default:
            console.error("Ha habido un error, prueba otra vez")
            break;
    }
    mensaje = `Has sacado un${cartaNombre}`;
    if (cartaElement) {
        cartaElement.textContent = mensaje;
    }
};

//Comprobador de números repetidos
const comprobarSiRepetido = () => {
    while (true) {
        numeroCarta = nuevoNumeroAleatorio();
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
};

// *** Función principal que implementa el resto de funciones ***
const mostrarNumero = () => {
    numeroCarta = nuevoNumeroAleatorio(); // Genera un nuevo número aleatorio para cada carta obtenida
    comprobarSiRepetido();
    if (cartaElement) {
        cartaNueva(numeroCarta);
        muestraPuntuacion(); // Actualiza los puntos mostrados
    }
};

//Botón para pedir carta
const dameCarta = () => {
        if (botonDameCarta) {
        botonDameCarta.addEventListener("click", mostrarNumero);
    }
};

//Botón para plantarse
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

const mePlanto = () => {
    if (botonMePlanto) {
    botonMePlanto.addEventListener("click", calcularMensajeFinal);
    }
};

//Funcionamiento reinicio
const reinicioJuego = () => {
    puntos = 0;
    numeroCarta = 0;
    restantes = totalCartas;
    muestraPuntuacion();
    dameCarta();
    imgCarta.src = abajo;
    cartaElement.textContent = "";
};

const reiniciarJuego = () => {
    reinicioJuego()
};

//Botón de reinicio
const reinicio = () => {
    if (botonReinicio) {
        botonReinicio.addEventListener("click", reiniciarJuego);
    }
};




//Carga del DOM
document.addEventListener("DOMContentLoaded", () => {
    muestraPuntuacion();
    dameCarta();
    reinicio();
    mePlanto();
});
