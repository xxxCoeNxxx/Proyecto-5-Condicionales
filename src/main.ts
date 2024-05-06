//Inicializar variables y definir constantes
const puntosMax: number = 7.5;
const puntosCero: number = 0;
const numeroCartaCero: number = 0;
const mejorPuntuacionCero: number = 0;
let puntos: number = 0;
let numeroCarta: number = 0;
let mejorPuntuacion: number = 0;
let juegoTerminado: boolean = false;
let cartaNombre = "";

//Botones y mensajes
const puntosElement: HTMLElement | null = document.getElementById("puntucionJugador");
const botonDameCarta: HTMLElement | null = document.getElementById("dameCarta");
const cartaElement: HTMLElement | null = document.getElementById("mensaje");
const imgAbajo: HTMLElement | null = document.getElementById("imgAbajo");
const imgCarta = document.getElementById("imgCarta") as HTMLImageElement;
const mensajeElement: HTMLElement | null = document.getElementById("mensajeComentarios");
const botonMePlanto: HTMLElement | null = document.getElementById("mePlanto");
const botonReinicio: HTMLElement | null = document.getElementById("reinicio");
const restantesElement: HTMLElement | null = document.getElementById("restantes");
const puntuacionMaxElement: HTMLElement | null = document.getElementById("puntucionMax");

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
    restantesElement.innerHTML = "No te quedan cartas";
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

const reiniciarIMG = () => {
    if (cartaElement){
        imgCarta.src = abajo;
    }
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

//Comprobador de números repetidos
const comprobarSiRepetido = () => {
    if (contTotal > 0) {
        while (true){
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
    }
};

const hasPerdidoCartas = () => { //Pierdes por quedarte sin cartas
    if (contTotal == 0) {
        hasPerdidoMensaje();
    }
};

const hasPerdido = () => { //Pierdes por quedarte sin cartas o por pasarte de puntos
    if (puntos > puntosMax || contTotal === 0) {
        juegoTerminado = true;
        hasPerdidoMensaje();
        
    }
};

const probarContadores = () => {
    console.log(contAs, contDos, contTres, contCuatro, contCinco, contSeis, contSiete, contSota, contCaballo, contRey)
}

//Función para manejar dameCarta
const dameCarta = () => {
    if (!juegoTerminado && puntos <= 7.5 && contTotal > 0 && botonDameCarta) {
        botonDameCarta.addEventListener("click", mostrarNumero);
        reiniciarMensajeComentarios();
    } else if (juegoTerminado && botonDameCarta) {
        hasPerdidoMensaje();
        botonDameCarta.removeEventListener("click", dameCarta);
    } probarContadores();
};

//Botón para pedir carta
const actualizarBotonDameCarta = () => {
   if (juegoTerminado && botonDameCarta) {
    botonDameCarta.removeEventListener("click", dameCarta);
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
    if (botonMePlanto) {
        botonMePlanto.addEventListener("click", manejarMePlanto);
    }
};

//Función para bloquear el botón después de verificar el estado del juego
const manejarBotonMePlanto = () => {
    if (botonMePlanto) {
        botonMePlanto.removeEventListener("click", manejarBotonMePlanto);
    }
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

//Funcionamiento reinicio
const reinicioJuego = () => {
    reiniciarVariables()
    reiniciarMejorPuntuacion();
    muestraPuntuacion();
    dameCarta();
    mensajeRestantesCuarenta();
    reiniciarMensajeComentarios();
    juegoTerminado = false;
};

//Botón de reinicio
const reinicio = () => {
    if (botonReinicio) {
        botonReinicio.addEventListener("click", reinicioJuego);
    }
};

const igualarNumAVariable = () => {
    numeroCarta = nuevoNumeroAleatorio()
}

//Función para mostrar una nueva carta y actualizar los puntos  <---------- FALTA SACAR 
const mostrarNumero = () => {
    if (contTotal >0) {
        if (puntos <= puntosMax) {
            igualarNumAVariable(); //Genera un nuevo num aleatorio
            comprobarSiRepetido();  //Comprueba si ya ha salido
            cartaNueva(numeroCarta);//Muestra carta y actualiza los puntos
            muestraPuntuacion();    //Muestra los puntos
            actualizarContTotal();  //Actualiza contador de cartas restantes
            muestraQuedanCartas();  //Muestra cartas restantes
            verificarEstadoJuego(); //Verifica si has perdido en cada turno
            dameCarta();
        } else {
            mensajeRestantes = "Has perdido, te has pasado de 7.5"; 
            hasPerdido();
            muestraQuedanCartas();
            verificarEstadoJuego();
        }
    } else {
        mensajeRestantes = "No te quedan cartas"; 
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
