const d = document,
    w = window,
    FrasesDOM = d.querySelectorAll(".frasetext"),
    ContenedorPadre = d.querySelector(".ContenPadre"),
    ContenedorInicio = d.querySelector(".ContenInicio");
console.log(FrasesDOM);

let AregloFrases = [],
    StringDeArrayFrases,
    CaratString,
    ContadorF11;


FrasesDOM.forEach(el => {
    let frase;
    frase = el.innerHTML;
    AregloFrases.push(frase);
    

});

/*Funcion optiene el ancho y largo de la pantalla*/
const AnchoyLargo = () => {
    let Height = w.innerHeight;
    ContenedorPadre.setAttribute('style', `height: ${Height}px`);
}


/*FUNCIONES*/
let ArregloSinRepetir = [],
    ArregloSinRepeArray = [];

function numerosAleatoriosNoRepetidos(min, max, cantidad, Arreglo) {
    if (min>max || cantidad>max-min) {
        return false;
    }

    while (Arreglo.length<cantidad) {
        const num=Math.floor((Math.random() * (max - min)) + min );
        if (Arreglo.indexOf(num)==-1) {
            Arreglo.push(num);
        }
    }
    return Arreglo;
}



numerosAleatoriosNoRepetidos(1, 25, 24,ArregloSinRepetir);
numerosAleatoriosNoRepetidos(0, AregloFrases.length, AregloFrases.length, ArregloSinRepeArray);
console.log(ArregloSinRepeArray);

let Contenedorbody = d.querySelector(".hasClick"),
    TextConedor = d.querySelector(".datoInteresante"),
    i = 0,
    j = 0,
    IndiceDatoInt;

d.addEventListener("click", (e) => {
    console.log("click :)");
    if (e.target === e.target) {
        if (i === 0) {
            ContenedorInicio.classList.remove("desactivado");
            ContenedorInicio.classList.add("desactivado");
        }

        if (i>= ArregloSinRepetir.length) {
            i = 0;

        }
        if (j>= ArregloSinRepeArray.length) {
            j = 0;
        }

        Contenedorbody.classList.remove("animate__fadeIn");
        Contenedorbody.classList.remove(`Fondo1`);
        Contenedorbody.classList.remove("Fondo2");
        Contenedorbody.classList.remove("Fondo3");
        Contenedorbody.classList.remove("Fondo4");
        Contenedorbody.classList.remove("Fondo5");
        Contenedorbody.classList.remove("Fondo6");
        Contenedorbody.classList.remove("Fondo7");
        Contenedorbody.classList.remove("Fondo8");
        Contenedorbody.classList.remove("Fondo9");
        Contenedorbody.classList.remove("Fondo10");
        Contenedorbody.classList.remove("Fondo11");
        Contenedorbody.classList.remove("Fondo12");
        Contenedorbody.classList.remove("Fondo13");
        Contenedorbody.classList.remove(`Fondo14`);
        Contenedorbody.classList.remove("Fondo15");
        Contenedorbody.classList.remove("Fondo16");
        Contenedorbody.classList.remove("Fondo17");
        Contenedorbody.classList.remove("Fondo18");
        Contenedorbody.classList.remove("Fondo19");
        Contenedorbody.classList.remove("Fondo20");
        Contenedorbody.classList.remove("Fondo21");
        Contenedorbody.classList.remove("Fondo22");
        Contenedorbody.classList.remove("Fondo23");
        Contenedorbody.classList.remove("Fondo24");
        Contenedorbody.classList.remove("Fondo25");
        Contenedorbody.classList.remove("Fondoundefined");

        Contenedorbody.classList.toggle(`Fondo${ArregloSinRepetir[i]}`);
        TextConedor.classList.remove(".Fondsizegrande");
        TextConedor.classList.remove(".Fondsizechico");


        console.log(`la i vale ${i}`);
        console.log(ArregloSinRepetir);

        i++;
        IndiceDatoInt = ArregloSinRepeArray[j];
        
        TextConedor.innerText = `${AregloFrases[IndiceDatoInt]}`;


        /*Variables para contar string del texto */
        StringDeArrayFrases = TextConedor.innerText;
        CaratString = StringDeArrayFrases.length;
        if (CaratString >= 59 ) {
            TextConedor.classList.add("Fondsizechico");
        }

        if (CaratString <= 58) {
            TextConedor.classList.add("Fondsizegrande");
        }

        console.log(`Caracteres ${CaratString}`);


        j++;


        Contenedorbody.classList.add("animate__fadeIn");
        setTimeout(() => {
            Contenedorbody.classList.remove("animate__fadeIn");
        }, 500);
    }
});

d.addEventListener("DOMContentLoaded", (e) => {
    AnchoyLargo();

});

d.addEventListener("keyup", (e) => {
    console.log(e);
    if (e.key === "F11") {
        AnchoyLargo();
    }
});