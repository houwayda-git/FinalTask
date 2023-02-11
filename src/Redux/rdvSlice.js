import { createSlice } from "@reduxjs/toolkit";


const initialState = []


export const rdvSlice = createSlice({
    name: 'rdv',
    initialState,
    reducers: {
        add: (state, action) => {
            const newRdv = { name: action.payload }
            console.log([...state, newRdv])
            return [...state, newRdv]
        },
        deleteRdv: (state, action) => {
            console.log('deleted')
        },
        update: (state, action) => {
            console.log('update')
        }

    }
})

export const { add, deleteRdv, update } = rdvSlice.actions

export default rdvSlice.reducer