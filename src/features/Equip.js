import {createSlice} from "@reduxjs/toolkit";

export const equipSlice = createSlice({
    name: "equip",
    initialState: {
        value: {
            image: "",
            maxDamage: 0,
            price: 0,
            energyPerHit: 0,
            effects: []
        }
    },
    reducers: {
        setWeapon: (state, action) => {
            state.value = action.payload
        },
    }
})


export const {setWeapon} = equipSlice.actions
export default equipSlice.reducer