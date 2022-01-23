import {createSlice} from "@reduxjs/toolkit";

export const inventorySlice = createSlice({
    name: "inventory",
    initialState: {
        value: []
    },
    reducers: {
        setInventory: (state, action) => {
            state.value.push(action.payload)
        },
        removeFromInventory: (state, action) => {
            const deleteItem = action.payload
            state.value = state.value.filter((x, index) => index !== deleteItem)
        }
    }
})


export const {setInventory, removeFromInventory} = inventorySlice.actions
export default inventorySlice.reducer