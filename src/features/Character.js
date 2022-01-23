import {createSlice} from "@reduxjs/toolkit";

export const characterSlice = createSlice({
    name: "character",
    initialState: {
        value: {
            image: "",
            race: "",
            damage: 0,
            health: 0,
            energy: 0,
            stamina: 0,
            strength: 0,
            inventorySlots: 0,
            gold: 0
        }
    },
    reducers: {
        setCharacter: (state, action) => {
            state.value = action.payload
        },
    }
})


export const { setCharacter } =characterSlice.actions
export default characterSlice.reducer