import {createSlice} from "@reduxjs/toolkit";

export const enemyHpSlice = createSlice({
    name: "enemyHp",
    initialState: {
        value: {
            enemyHealth: 0
        }
    },
    reducers: {
        setEnemyHp: (state, action) => {
            state.value = action.payload
        },
    }
})


export const {setEnemyHp} = enemyHpSlice.actions
export default enemyHpSlice.reducer