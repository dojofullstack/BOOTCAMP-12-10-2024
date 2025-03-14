


// metodos http (get, post, put, delete)



axios.get('https://dummyjson.com/quotes').then(
    (response) => {
        console.log(response.data.quotes);
        const frases = response.data.quotes;

        frases.forEach(element => {
            console.log(element.quote);

            document.querySelector("#quotes").innerHTML = `<p> ${element.quote} </p>`.concat(document.querySelector("#quotes").innerHTML)

        });

    }
).catch((res) => {
    console.log("fallo la consulta");
})






function login(event){
    
    // suspender la redireccion del formulario html
    event.preventDefault();


    
    const username =  document.querySelector("#username").value;
    const pwd = document.querySelector("#pwd").value;



    const AUTH_LOGIN = 'https://dummyjson.com/auth/login';

        const data = {
            username: username,
            password: pwd
        };


        axios.post(AUTH_LOGIN, data).then( (respuesta) => {
            console.log(respuesta.data);
        } ).catch((error) => {
            console.log(error);
        })


}



////////////////////////////////////////////



const ctx = document.querySelector("#myChart");

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});