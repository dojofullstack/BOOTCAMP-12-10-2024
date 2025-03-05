
// iteradores en JS

// - ciclo for
// -foroff forin
// - forEach
// - map


const pokemones = [
    "pikachu",
    "vulbasur",
    "digipot",
    "charizar",
    "mew",
    ["evalocion1", "evalocion1"]
]


for (let index = 0; index < pokemones.length; index++) {

    const namePokemon = pokemones[index];

    if (namePokemon === "digipot"){
        continue;
    }

    if (namePokemon === "charizar"){
        break;
    }

    console.log(namePokemon);
    console.log(`${namePokemon} consultar api ${namePokemon}` );


    
    
    // consultar api
    // getPokemonInfo()

}



console.log("final del modulo!!");


// los breakpoint
// break
// continue


// for (const element of pokemones) {
//     console.log(element);
//     // console.log(pokemones.indexOf(element));
// }




// iteradores while

let scanerVirus = true;


while (scanerVirus) {
    console.log("ejeuctando proceso de analisis!!");

    // segun el evento fecha
    // scanerVirus = false;

    const respuesta = prompt("Quieres continuar el proceso??");

    if (respuesta === "no"){
        // scanerVirus = false;
        break
    }

}


console.log("finalizo el modulo");
