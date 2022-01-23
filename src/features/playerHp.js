import {createSlice} from "@reduxjs/toolkit";

export const playerHpSlice = createSlice({
    name: "playerHp",
    initialState: {
        value: {
            playerHealth: 0
        }
    },
    reducers: {
        setPlayerHp: (state, action) => {
            state.value = action.payload
        },
    }
})


export const {setPlayerHp} = playerHpSlice.actions
export default playerHpSlice.reducer