

console.log("loaded module condiciones.js");

// condiones en JS

let evaluar = true;
// simple
if (evaluar){
    console.log("flujo principal");
    console.log("flujo principal");
    console.log("flujo principal");
    console.log("flujo principal");
    console.log("flujo principal");
}

// // compuestas
let evaluarCompuesta = true;
if (evaluarCompuesta){
    console.log("flujo principal compuesta");
    console.log("flujo principal compuesta");
    console.log("flujo principal compuesta");
    console.log("flujo principal compuesta");
    console.log("flujo principal compuesta");
} else {
    console.log("flujo secundario");
    console.log("flujo secundario");
    console.log("flujo secundario");
    console.log("flujo secundario");
    console.log("flujo secundario");
}


// multiples o anidadas

let casoEvaluar1 = false;
let casoEvaluar2 = false;
let casoEvaluar3 = false;
let casoEvaluar4 = false;

if (casoEvaluar1){
    console.log("flujo principal anidadades");
    console.log("flujo principal anidadades");
    console.log("flujo principal anidadades");
} else if (casoEvaluar2) {
    console.log("flujo 2");
} else if (casoEvaluar3) {
    console.log("flujo 3");
} else if (casoEvaluar4) {
    console.log("flujo 4");
} else {
    console.log("flujo final ejecuntadose")
}



let administrador = "pedro";
let miembrosVIP = 0;


// 

// if (administrador === "Enrique" || miembrosVIP > 5 ){
//     alert("Welcome Enrique!!");
// } else {
//     alert("No tienes acceso!");
// }

// if (administrador.includes("Perez")){
//     alert("Welcome Jose Pe. Enrique!!");
// } else {
//     alert("No tienes acceso!");
// }


// if (administrador){
//     console.log("administrador disponible");
// } else {
//     console.log("administrador no EXISTE");
// }



let autos = ["lamborgini", "tesla"];

if (autos.length){
    console.log("Si hay autos");
} else {
    console.log("no hay stock de autos");
}

let moto = {
    color: "green",
    modelo: "honda"
};


if (Object.keys(moto).length){
    console.log("moto disponible")
} else {
    console.log("moto no esta configurado");   
}



administrador = "";
let precio = 0;
let stockCamisetas = 0;
let isPlanFree = false;

if (!administrador){
    console.log("no hay administrador");
}

if (!precio){
    console.log("precio no definido");
}


if (!stockCamisetas){
    console.log("no hay stock de camisetas");
}


if (!isPlanFree){
    console.log("Es usuario PREMIUM");
}