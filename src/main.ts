let puntos: number = 0;
let numeroCarta: number = 0;

const puntosElement: HTMLElement | null = document.getElementById("puntucionJugador");
const botonDameCarta: HTMLElement | null = document.getElementById("dameCarta");
const cartaElement: HTMLElement | null = document.getElementById("mensaje");
const imgAbajo: HTMLElement | null = document.getElementById("imgAbajo");
const imgCarta = document.getElementById("imgCarta") as HTMLImageElement;

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

const muestraPuntuacion = () => {
    if (puntosElement) {
        puntosElement.textContent = `Puntos: ${puntos}`
    }
};

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

function cartaNueva (numero: number): void {
    let cartaNombre: string = ``;
    switch(numero) {
        case 1:
            cartaNombre = " as"
            puntos++;
            nuevaURL = as;
            imgCarta.src = nuevaURL;
            break;
        case 2:
            cartaNombre = " dos"
            puntos += 2;
            nuevaURL = dos;
            imgCarta.src = nuevaURL;
            break;
        case 3:
            cartaNombre =  " tres"
            puntos += 3;
            nuevaURL = tres;
            imgCarta.src = nuevaURL;
            break; 
        case 4:
            cartaNombre = " cuatro"
            puntos += 4;
            nuevaURL = cuatro;
            imgCarta.src = nuevaURL;
            break;
        case 5:
            cartaNombre = " cinco"
            puntos += 5;
            nuevaURL = cinco;
            imgCarta.src = nuevaURL;
            break;
        case 6:
            cartaNombre = " seis"
            puntos += 6;
            nuevaURL = seis;
            imgCarta.src = nuevaURL;
            break;
        case 7:
            cartaNombre = " siete"
            puntos += 7;
            nuevaURL = siete;
            imgCarta.src = nuevaURL;
            break;
        case 10:
            cartaNombre =  "a sota"
            puntos += 0.5;
            nuevaURL = sota;
            imgCarta.src = nuevaURL;
            break;
        case 11:
            cartaNombre =  " caballo"
            puntos += 0.5;
            nuevaURL = caballo;
            imgCarta.src = nuevaURL;
            break;
        case 12:
            cartaNombre = " rey"
            puntos += 0.5;
            nuevaURL = rey;
            imgCarta.src = nuevaURL;
            break;
        default:
            console.error("Ha habido un error, prueba otra vez")
            break;
    }
    let mensaje: string = `Has sacado un${cartaNombre}`;
    if (cartaElement) {
        cartaElement.textContent = mensaje;
    }
}

const mostrarNumero = () => {
    numeroCarta = nuevoNumeroAleatorio(); // Genera un nuevo número aleatorio para cada carta obtenida
    if (cartaElement) {
        cartaNueva(numeroCarta);
        muestraPuntuacion(); // Actualiza los puntos mostrados
    }
};

const dameCarta = () => {
        if (botonDameCarta) {
        botonDameCarta.addEventListener("click", mostrarNumero);
    }
}

/* 
const mostrarImagen = (imgId: string): void =>  {
    if (imgAbajo && imgArriba) {

    }
}


function cambiarFotoPrincipal(idMiniatura: string): void { 
    if (fotoPrincipal && miniatura) { 
        fotoPrincipal.src = miniatura.src; 
 } 
} 
 */

document.addEventListener("DOMContentLoaded", () => {
    muestraPuntuacion();
    dameCarta();
});
