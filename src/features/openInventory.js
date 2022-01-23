import {createSlice} from "@reduxjs/toolkit";

export const inventorySlice = createSlice({
    name: "inventoryOpen",
    initialState: {
        value: {
            inventory: false
        }
    },
    reducers: {
        setInventoryOpen: (state, action) => {
            state.value = action.payload
        },
    }
})


export const {setInventoryOpen} = inventorySlice.actions
export default inventorySlice.reducer