

// funciones en JS

console.log("load module funciones.js");



function saludar(){

    console.log("hello world!!");

}


function maquinaNaranjas(numeroNaranjas, addMiel){

    console.log(numeroNaranjas, addMiel);
    

    saludar();
    const salidaNaranjas = maquinaNaranjas(numeroNaranjas, addMiel);
    
    console.log(salidaNaranjas);
    
    const salidaNaranjas2 = maquinaNaranjas(4, false);
    const salidaNaranjas3 = maquinaNaranjas(7, true);

    if (numeroNaranjas > 5){
        console.log("no hay naranajas suficiente para prepparar");
        return "NO HAY MAS NARANJAS";
    }

    console.log("insertar las naranjas");
    console.log("extraer la piel de la naranja");
    console.log("trozar las naranjas");
    console.log("preparar jugo");

    if (addMiel){
        console.log("agregar una cucharada de miel");
    } else {
        console.log("solo con azuzar");
    }


    return "EL JUGO DE NARANJAS ESTA LISTO!";


}



const numeroNaranjas = 3;
const addMiel = false;

const salidaNaranjas = maquinaNaranjas(numeroNaranjas, addMiel);

console.log(salidaNaranjas);

const salidaNaranjas2 = maquinaNaranjas(4, false);
const salidaNaranjas3 = maquinaNaranjas(7, true);
