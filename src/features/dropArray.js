import {createSlice} from "@reduxjs/toolkit";

export const dropSlice = createSlice({
    name: "drop",
    initialState: {
        value: []
    },
    reducers: {
        setDrop: (state, action) => {
            state.value.push(action.payload)
        },
        removeDrop: (state, action) => {
            const deleteItem = action.payload
            state.value = state.value.filter((x, index) => index !== deleteItem)
        },
        setDropInitial: (state, action) => {
            state.value = action.payload
        }
    }
})


export const {setDrop, removeDrop, setDropInitial} = dropSlice.actions
export default dropSlice.reducer