import { createSlice } from "@reduxjs/toolkit";


const initialState = []


export const rdvSlice = createSlice({
    name: 'rdv',
    initialState,
    reducers: {
        add: (state, action) => {
            console.log(state)
            const newRdv = { ...action.payload }
            return [...state, newRdv]
        },
        supRdv: (state, action) => {
            const index = action.payload
            const rdvList = state
            return rdvList.filter((rdv, i) =>
                rdv.uid != index
            )
        }
        /*update: (state, action) => {
            const index = action.payload
            const rdvList = state
            return rdvList.map((rdv, i) => {
                if (rdv.uid === index) {
                    return { ...rdv, time: 9 }
                }
                return rdv
            })
        }*/
    }
})

export const { add, supRdv } = rdvSlice.actions

export default rdvSlice.reducer