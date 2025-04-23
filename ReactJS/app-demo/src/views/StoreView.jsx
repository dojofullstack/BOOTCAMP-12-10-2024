import { useEffect, useState } from "react"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import axios from "axios"

export const StoreView = () => {

    const [catalogo, setCatalogo] =  useState([]);

    
    const listProduct = () => {
        axios.get("https://api.dojofullstack.com/api-demo/v1/product/").then((res) => {
            console.log(res.data.results);

            setCatalogo(res.data.results);
        })
    }


    useEffect(listProduct, []);


    return (
        <>

        <Header/>


        <div className="max-w-[80vw] mx-auto m-5">


        <div className="flex gap-5 my-5">
        <button onClick={listProduct}  className="btn btn-secondary">Refrescar Catalogo</button>
        <button   className="btn btn-accent">Crear Producto</button>

        </div>

        <div className="flex flex-wrap justify-center">

            {
                catalogo.map( (item, key) => (
                        <div key={key}>
                             <div className="card bg-base-100 w-96 shadow-sm">
                            <figure>
                                <img
                                src={item.image_url}
                                alt="Shoes" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">{item.name}</h2>
                                <p>Precio: {item.price} USD</p>
                                <div className="card-actions justify-end">
                                <button className="btn btn-primary">Comprar</button>
                                </div>
                            </div>
                            </div>


                        </div>
                 ) )
            }

        </div>



        </div>

    

        <Footer/>
        
        
        </>
    )
}

