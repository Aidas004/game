import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import {configureStore} from "@reduxjs/toolkit";
import characterReducer from "./features/Character";
import inventoryReducer from "./features/InventoryArr"
import equipReducer from "./features/Equip"
import goldReducer from "./features/Gold"
import slotsReducer from "./features/Slots"
import playerHpReducer from "./features/playerHp";
import enemyHpReducer from "./features/enemyHp";
import energyReducer from "./features/energy"
import inventoryOpenReducer from "./features/openInventory"


const store = configureStore({
    reducer: {
        character: characterReducer,
        inventory: inventoryReducer,
        equip: equipReducer,
        gold: goldReducer,
        slots: slotsReducer,
        playerHp: playerHpReducer,
        enemyHp: enemyHpReducer,
        energy: energyReducer,
        inventoryOpen: inventoryOpenReducer

    }
})


ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
reportWebVitals();
