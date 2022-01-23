import {createSlice} from "@reduxjs/toolkit";

export const energySlice = createSlice({
    name: "playerHp",
    initialState: {
        value: {
            playerHealth: 0
        }
    },
    reducers: {
        setEnergy: (state, action) => {
            state.value = action.payload
        },
    }
})


export const {setEnergy} = energySlice.actions
export default energySlice.reducer