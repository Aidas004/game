import {createSlice} from "@reduxjs/toolkit";

export const goldSlice = createSlice({
    name: "gold",
    initialState: {
        value: {
            gold: 0
        }
    },
    reducers: {
        setGold: (state, action) => {
            state.value = action.payload
        },
    }
})


export const {setGold} = goldSlice.actions
export default goldSlice.reducer