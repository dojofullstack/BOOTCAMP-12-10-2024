
import { useEffect, useState } from "react"
//import "bootstrap-icons/font/bootstrap-icons.css";

import { FaStar } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";


// renderizar componente con un content children
// export const App = ({children}) => {
//     return (
//         <>           
//            <main>

//                 <div style={{backgroundColor: "purple", height: "100px"}}>

//                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, porro.

//                     {children}
//                 </div>

//            </main>
//         </>
//     )
// }




export const App = ({props}) => {


    const [usuario,  setUsuario] =   useState("Elon Musk");
    const [email,  setEmail] =   useState("");
    const [comentario,  setComentario] =   useState("");
    
    // console.log("props", props);
    // console.log(usuario);

    // console.log(comentario);



    // este hook no depende de los estados del componetne
    useEffect(()  => {

        getAPIQuotes();
  
      }, []);



    const getAPIQuotes = () => {
        fetch('https://dummyjson.com/quotes/1')
        .then(res => res.json())
        .then(console.log);
    }




    return (
        <>
           
           <main style={{backgroundColor: "purple", height: "auto"}}>
           {/* <i className="bi bi-0-circle-fill"></i>
           <i className="bi bi-airplane-fill"></i> */}

<FaStar /><FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
<IoMenu className="text-2xl" />
<IoMenu />
<IoMenu />
<IoMenu />

                <div >

                    <span>ID: {props?.id}</span>
                    <h2>Autor: {props?.author}</h2>
                    <p>
                        {props?.quote}
                    </p>
                </div>

                <br/>
                <p>Comentar: {usuario}</p>
                
                <textarea placeholder="Escribes tus ideas!!" name="" id="" onChange={(e) => setComentario(e.target.value) } >
                
                </textarea>


                <p>
                    {comentario}
                </p>

                {/* <QuotesSimilares props={props} /> */}


                <button className="btn btn-primary text-lg"  onClick={getAPIQuotes}>
                    Refescar Frases
                </button>


           </main>
        </>
    )
}
