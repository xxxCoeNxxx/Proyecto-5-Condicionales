let numeroDeCarta: number = 0;

const generarNumeroAleatorio = (): number => {
    const numeroAleatorio = Math.round(Math.random() * 10) + 1;
    if (numeroAleatorio > 7) {
        return numeroAleatorio + 2;
    } else {
        return numeroAleatorio;
    }
};

numeroDeCarta = generarNumeroAleatorio();

console.log(numeroDeCarta);

let puntos: number = 0;
let carta: number = numeroDeCarta;

const puntosElement: HTMLElement | null = document.getElementById('puntos');
const muestraPuntuacion = () => {
    if (puntosElement) {
        puntosElement.textContent = `Puntos: ${puntos}`;
    }
};
muestraPuntuacion();

function dameCarta(numeroDeCarta: number): void {
    carta = numeroDeCarta;
}


const pideCarta = () => {
    const botonPedir: HTMLElement | null = document.getElementById("pideCarta");
    if (botonPedir instanceof HTMLButtonElement) {
        botonPedir.addEventListener("click", manejarClick);
    }
}

const manejarClick = () => {
    // Lógica para manejar el clic del botón aquí
}

// Llama a la función pideCarta para configurar el evento de clic del botón cuando se cargue el documento
document.addEventListener("DOMContentLoaded", pideCarta);



type Estado = "UNO" | "DOS" | "TRES" | "CUATRO" | "CINCO" | "SEIS" | "SIETE" | "DIEZ" | "ONCE" | "DOCE";

const UNO: Estado = "UNO";
const DOS: Estado = "DOS";
const TRES: Estado = "TRES";
const CUATRO: Estado = "CUATRO";
const CINCO: Estado = "CINCO";
const SEIS: Estado = "SEIS";
const SIETE: Estado = "SIETE";
const DIEZ: Estado = "DIEZ";
const ONCE: Estado = "ONCE";
const DOCE: Estado = "DOCE";

const cartas = (estado: Estado) => {
    let mensaje: string = `Has sacado un ${carta}`;
    switch (estado) {
        case UNO:
            puntos++;
            carta= numeroDeCarta;
            break;
        case DOS:
            puntos += 2;
            break;
        case TRES:
            puntos += 3;
            break;
        case CUATRO:
            puntos += 4;
            break;
        case CINCO:
            puntos += 5;
            break;
        case SEIS:
            puntos += 4;
            break;
        case SIETE:
            puntos += 7;
            break;
        case DIEZ:
            puntos += 0.5;
            break;
        case ONCE:
            puntos += 0.5;
            break;
        case DOCE:
            puntos += 0.5;
            break;
        default:
            mensaje= "error";
            break;
    }

    document.getElementById("mensaje").innerHTML = mensaje;
};

/* cartas (carta) */
