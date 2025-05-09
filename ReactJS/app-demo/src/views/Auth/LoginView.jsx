import axios from "axios";
import { useState } from "react"
import { useNavigate } from "react-router";
import { ToastContainer, toast } from 'react-toastify';
import { useStore } from "../../useStore";


export default function LoginView() {

    const [username, setUsername] =  useState("");
    const [password, setPassword] =  useState("");
    const [loading, setLoading] =  useState(false);

    const setIsLogin =  useStore((state) => state.setIsLogin);

    const navigate = useNavigate();


    const login = () => {

        setLoading(true);

        const api = "https://api.dojofullstack.com/api/auth/jwt/create/";

        const payload = {
            username,
            password
        }

        axios.post(api, payload).then((r) => {
            setLoading(false);
            console.log(r.data);


            localStorage.setItem("access", r.data.access);
            localStorage.setItem("refresh", r.data.refresh);


            axios.defaults.headers.common['Authorization'] = r.data.access;

            
            setIsLogin(true);
            
            toast.success('Login exitoso', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });

            setTimeout(() => navigate("/store"), 2000);
            

        }).catch((e) => {

            setLoading(false);

            toast.error('Error al iniciar', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });

        })

    }


    return (
      <>
      
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              alt="Your Company"
              src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
              className="mx-auto h-10 w-auto"
            />
            <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-white">
              INiciar Sesion
            </h2>
          </div>
  
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form action="#" className="space-y-6" onSubmit={(e)  => e.preventDefault() }>

            <div>
                <label htmlFor="email" className="block text-sm/6 font-medium text-white">
                  Username
                </label>
                <div className="mt-2">
                  <input
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                    id="username"
                    name="username"
                    type="username"
                    required
                    autoComplete="username"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>


          
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm/6 font-medium text-white">
                    Contrasena
                  </label>
                  <div className="text-sm">
                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                      Forgot password?
                    </a>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    id="password"
                    name="password"
                    type="password"
                    required
                    autoComplete="current-password"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>
  
              <div>
                <button
                    onClick={login}
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >

                      {loading &&  <span className="loading loading-dots loading-md"></span>}

                  Login
                </button>
              </div>
            </form>
  
            <p className="mt-10 text-center text-sm/6 text-gray-500">
              Not a member?{' '}
              <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                Start a 14 day free trial
              </a>
            </p>
          </div>
        </div>
        <ToastContainer />
      </>
    )
  }
  