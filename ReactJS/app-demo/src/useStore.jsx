import axios from 'axios';
import { create } from 'zustand';


// export const useStore = create( (set, get) => (
//     {
//         osos: 0,
//         conejos: 0,
//         gallinas: 0,
//         actualizarOsos : (valor) => set({osos:  get().osos + valor}),
//         actualizarConejos :  (valor) => set({conejos: get().conejos + valor}),
//         actualizarGallinas : (valor) => set( (state) => ( {gallinas: state.gallinas + valor}) ),

//     }
// ) )


const loadRefreshToken = (refresh) => {
    console.log("renovar access token");

    const api = "https://api.dojofullstack.com/api/auth/jwt/refresh/";

    const payload = {
        refresh: refresh
    }

    axios.post(api, payload).then((res) => {

        console.log(res.data.access);
        localStorage.setItem("access", res.data.access);
        window.location.reload();

    }).catch((res) => {
        window.location.href = "/login";
    })


}


const loadProfile = (set) => {

    const access = localStorage.getItem("access");
    const refresh = localStorage.getItem("refresh");

    if (access && refresh){
        const api = "https://api.dojofullstack.com/api/auth/users/me/";

        axios.get(api, {
            headers: {
              'Authorization': "Bearer " + access,
            }
          }).then((res) => {
                console.log(res.data);
                set({profile: res.data, isLogin: true});

          }).catch((err) => {
            console.log(err);
            loadRefreshToken(refresh);
            // si falla, primero renovar el token, refrezar app
            // si falla el refresk toke, redirect al /login
          })
    } else {
        console.log("redireccionar al Login si es privada");
        // window.location.href = "/login";
    }

}


const logout = (set) => {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");

    set({profile: null, isLogin: false});
    window.location.href = "/login";

}


export const useStore = create( (set, get) => (
    {
        loadProfile: () => loadProfile(set),
        profile: null,
        isLogin: false,
        setProfile: (profile) => set({profile: profile}),
        setIsLogin: (login) => set({isLogin: login}),
        catalgoProducts: [],
        cartStore: [],
        addCartStore: (product) => set( (state) => ({cartStore: [...state.cartStore, product]})),
        logout: () => logout(set)
    }
) )