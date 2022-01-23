import {createSlice} from "@reduxjs/toolkit";

export const slotSlice = createSlice({
    name: "slots",
    initialState: {
        value: {
            slots: 0
        }
    },
    reducers: {
        setSlots: (state, action) => {
            state.value = action.payload
        },
    }
})


export const {setSlots} = slotSlice.actions
export default slotSlice.reducer