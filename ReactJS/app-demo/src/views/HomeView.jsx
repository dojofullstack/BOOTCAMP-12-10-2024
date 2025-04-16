import { App } from "../components/App";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";



const HomeView = () => {

    
    // consumir API Quote
    const dataQuotes = {
        "id": 1,
        "quote": "Life isn't about getting and having, it's about giving and being.",
        "author": "Kevin Kruse"
      }


    return (
        <>  

            <Header/>

            <App props={dataQuotes}  />


            <Footer/>
            



            {/* <Home>
                <>
                Mi Content
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, impedit.
                </>
            </Home> */}
        
        </>
    )
}




export default HomeView;