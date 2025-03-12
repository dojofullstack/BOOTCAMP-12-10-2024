

// - forEach
// - map


const pokemones = [
    "Bulbasur",
    "iVysor",
    "Charmander",
    "Squirtle",
    "Metapod",
    "Caterpie"
]





function obtenerInfoPokemon(nombrePokemon, index=null) {

    console.log("consular informacion del pokemnon en Dtabase", index);


    const url = `https://pokeapi.co/api/v2/pokemon/${nombrePokemon.toLowerCase().trim()}`;

    
    fetch(url).then(respuesta => {
            return respuesta.json();
        })
        .then(datos => {
            // console.log(datos);
            console.log("Imagen", datos.sprites.front_default);
            console.log('Nombre:', datos.name);
            console.log('Altura:', datos.height);
            console.log('Peso:', datos.weight);
            const habilidades = datos.abilities.map(ability => ability.ability.name ).join(', ');
            console.log('Habilidades:', datos.abilities.map(ability => ability.ability.name ).join(', '));
        
            
            document.querySelector("#metadata-pokemon").innerHTML = 
            
                    document.querySelector("#metadata-pokemon").innerHTML.concat(`
                  <h1>${datos.name}</h1>
                    <img src="${datos.sprites.front_default}" alt="">

                    <p>
                        <b>Altura:</b> <span>${datos.height}</span>
                    </p>
                    <p>
                        <b>Peso:</b> <span>${datos.weight}</span>
                    </p>


                    <h6>Habilidades:</h6>
                    <p>
                        ${habilidades}
                    </p>
            `)
        
        
        })
        .catch(error => {
            console.error('Error al obtener la información del Pokémon:', error);
        });

        return `${nombrePokemon} pokeapi resuelto!!!`;

    }






// console.log( pokemones.forEach(obtenerInfoPokemon) );


// console.log( pokemones.map(obtenerInfoPokemon) );





function recopilarPokemonInput(){

    const namePokemon = document.querySelector("#name-pokemon")
    console.log(namePokemon.value);

    obtenerInfoPokemon(namePokemon.value);

}



function recopilarMultiplesPokemonInput(){

    const namePokemon = document.querySelector("#name-pokemon")
    
    const pokemones = namePokemon.value.split(",");

    console.log(pokemones);
 

    console.log( pokemones.forEach(obtenerInfoPokemon) );


    // obtenerInfoPokemon(namePokemon.value);

}


recopilarMultiplesPokemonInput();