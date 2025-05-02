import { useRef, useState } from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { useStore } from "../useStore";


export const PoblacionDiscover = () => {

    const {osos, conejos, actualizarOsos, actualizarConejos, gallinas, actualizarGallinas} = useStore();

    // console.log(osos, conejos);
    const inputOsos = useRef();
    const inputConejos = useRef();
    const inputGallinas = useRef();
    

  return (
    <>
    
    <Header/>
    <div className="poblacion-discover m-5">

        La poblacion de osos es: {osos} <br />
        La poblacion de conejos es: {conejos} <br />
        La poblacion de gallinas es: {gallinas} <br />

        <input ref={inputOsos}  className="input input-accent" type="text" placeholder="Actualizar osos" />
        <button className="btn btn-primary" onClick={ () => actualizarOsos( parseInt(inputOsos.current.value) )  } >Actualizar Osos</button>

        <br />
        <br />
        <input ref={inputConejos} className="input input-accent" type="text" placeholder="Actualizar Conejos" />
        <button className="btn btn-primary" onClick={() => actualizarConejos(  parseInt(inputConejos.current.value)) }>Actualizar Conejos</button>

        <br />
        <br />
        <input ref={inputGallinas} className="input input-accent" type="text" placeholder="Actualizar Gallinas" />
        <button className="btn btn-primary" onClick={() => actualizarGallinas(  parseInt(inputGallinas.current.value)) }>Actualizar Gallians</button>


    </div>
    <Footer/>
    </>

  );
}