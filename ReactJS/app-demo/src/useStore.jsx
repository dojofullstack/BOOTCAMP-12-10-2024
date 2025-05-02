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



export const useStore = create( (set, get) => (
    {
        profile: 0,
        isLogin: false,
        catalgoProducts: [],
        cartStore: [],
        addCartStore: (product) => set( (state) => ({cartStore: [...state.cartStore, product]})),
    }
) )