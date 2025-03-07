

// JSON 


const auto = {
    color: "green",
    precio: 999,
    modelo: "tesla",
    isNew: true,
    pasajeros: ["michell", "pedro", "henry"],
    customAuto: {
        aro: "20p",
        colorChazis: "purpura",
    } 
}



// JSON.parse()

// const dataAutoJson = JSON.stringify(auto);

// console.log(dataAutoJson);


const data = `
{
  "color": "green",
  "precio": 999,
  "modelo": "tesla",
  "isNew": true,
  "pasajeros": ["michell", "pedro", "henry"],
  "customAuto": { "aro": "20p", "colorChazis": "purpura" }
}
`



const outputAuto = JSON.parse(data);

console.log(outputAuto);
