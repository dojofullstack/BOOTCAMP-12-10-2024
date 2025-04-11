

export const Chatbot = () => {
  return (
    <div className="chatbot">
      <p>hola soy un chatbot AI</p>
      <p>
        hola!!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, quas.
      </p>
    </div>
    )
  }


const Home = () => {

  return(
    <>

      <header>

      {/* // agrega navbar */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <ul>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Inicio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Sobre nosotros</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Servicios</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contacto</a>
              </li>
            </ul>
          </div>
        </nav>

      </header>


      <main>
        <div className="container">
          <h1>Home</h1>
          <Chatbot/>
          <p>Bienvenido a la página de inicio</p>

          <Chatbot/>
        </div>
      </main>


      <footer>
        <div className="container">
          <p>&copy; 2023 Mi Aplicación</p>
        </div>
      </footer>
    
    </>
  )

}


export default Home;