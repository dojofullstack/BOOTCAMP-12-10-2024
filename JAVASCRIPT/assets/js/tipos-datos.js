



// Tipo de dato String

let admin = "Mario@gmail.com";

console.log( typeof admin );


console.log(admin.length);


admin =  admin.replace("gmail", "hotmail");

console.log(admin);

console.log( admin.concat(" Administrador"));

// console.log(admin);

console.log(admin.includes("@"));
  

console.log(admin.split("@"));


admin.toLowerCase();

console.log(admin.toUpperCase());


let description = "\n   informes sobre el disposutivo   \n\n ";
console.log(description);

description = description.trim();

console.log(description);



// Tipo de dato Boolean

let isPlanFree = true;
let isAdmin = false;


console.log( typeof isPlanFree );

// console.log(isPlanFree.valueOf());
 



// Tipo de dato Nuneral

let precio = 100;
let precioOferta = 90.99;

console.log(precio);

console.log(precioOferta);

console.log( typeof precio );
console.log( typeof precioOferta );


// operaciones basicas

console.log(precio + 10);

// precio = precio + 10;
precio += 10;

 
console.log(precio - 10);
precio -= 3;

console.log(precio * 10);
precio *= 3;

console.log(precio / 10);
precio /= 3;


// console.log(precio);



// Tipo de dato Array

let pokemones = [
    "pikachu",
    "voulbasur",
    "charizar",
    true,
    false,
    123,
    987,
    ["item1", "item2"]
]


console.log(pokemones.length);

console.log(pokemones);

pokemones.push("diglipop");
pokemones.push("beathifull");


// pokemones.pop();
// pokemones.pop();


// pokemones.splice(0, 1);

console.log(pokemones);




console.log(pokemones[0]);
console.log(pokemones[2]);



console.log(pokemones[ pokemones.length - 1 ]);


pokemones[0] = "Pikachu 2025";
pokemones[2] = "charizar 2025";


console.log(pokemones);


// Tipo de dato Object


function acelerar(){
    console.log("acelrando Tesla 300km/h");
    return "auto en marcha!!"
}


function frenar(){
    console.log("Senal del semaforo");
    return "auto en reposo"
}




// const auto = new Object;
const auto = {
    color: "verde",
    modelo: "Tesla Roadster 2025",
    precio: 9192912,
    acelerarAuto: acelerar,
    frenarAuto: frenar
}


console.log(auto);

console.log(typeof auto);



console.log(auto.color);
console.log(auto.modelo);
console.log(auto.precio);


console.log(auto.acelerarAuto());
console.log(auto.frenarAuto());

