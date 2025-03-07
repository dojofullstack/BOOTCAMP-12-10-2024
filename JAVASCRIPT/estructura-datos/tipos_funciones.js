

// formas de definir funciones

function saludar(){

    console.log("hello world!!");

}




// function basado en expresion
const saludarDojo = function (discipulo) {

    console.log("welcome dojo!", discipulo);
    return "Hola! Dojofullstack ".concat(discipulo);
}


// console.log(saludarDojo("henry") )



// function arrow function


const acelerarAuto = (modeloAuto) => {
    
    console.log("acelerando auto 300km/h", modeloAuto);

    return "AUTO EN MARCHA!!!"
    
}



// const outputAuto = acelerarAuto("toyota 2025");

// console.log(outputAuto);




// callback


const evolucionPokemon = (namePokemon) => {
    if (namePokemon === "pickachu"){
        return "Raichu";
    } else if (namePokemon === "charizard"){
        return "Charmeleon";
    } else {
        return "SE DESCONOCE";
    }
}


const getPokemon = (namePokemon, callbackEvolucion) => {

    console.log("Consultado API del pokemon ".concat(namePokemon));

    const outputCallback = callbackEvolucion(namePokemon);
    console.log(outputCallback);
    
}




getPokemon("charizard", evolucionPokemon );


// console.log(evolucionPokemon("pickachu"));
