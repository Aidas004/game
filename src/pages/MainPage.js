import React from 'react';
import ToolBar from "../components/ToolBar";
import Inventory from "../components/Inventory";
import {useSelector} from "react-redux";
import {setWeapon} from "../features/Equip";
import {useDispatch} from "react-redux";
import {setInventory} from "../features/InventoryArr";
import {setSlots} from "../features/Slots";

const MainPage = () => {

    const character = useSelector((state => state.character.value))
    const equipped = useSelector((state => state.equip.value))
    const dispatch = useDispatch()
    const slots = useSelector((state => state.slots.value))

    function removeWeapon() {
        if (equipped.maxDamage > 0 && slots >= 1) {
            dispatch(setInventory(equipped))
            dispatch(setSlots(slots - 1))
            dispatch(setWeapon({
                image: "",
                maxDamage: 0,
                price: 0,
                energyPerHit: 0,
                effects: []
            }))
        } else {
            alert("Užsidėk ginklą arba nėra vietos!")
        }
    }


    return (
        <div className='mainWindow'>
            {<ToolBar/>}
            <div className='mainWindow2'>
                <div className='characterMenu d-flex'>
                    <div className="left1">
                        <img src={character.image} alt=""/>
                    </div>
                    <div className="right1">
                        <div>
                            <div>Race: {character.race}</div>
                            <div>Damage: {character.damage}</div>
                            <div>Health: {character.health}</div>
                            <div>Energy: {character.energy}</div>
                            <div>Stamina: {character.stamina}</div>
                            <div>Strength: {character.strength}</div>
                        </div>

                        {equipped.maxDamage > 0 ?  <div className='d-flex wepCard'>
                            <img style={{marginTop: '7px', marginLeft: '15px'}} src={equipped.image} alt=""/>
                            <div className='d-flex j-center a-center column'>
                            <div>Max dmg: {equipped.maxDamage}</div>
                            <div>Energy per hit: {equipped.energyPerHit}</div>
                            </div>
                            <div className='removeWeapon'>
                            <h3 onClick={removeWeapon}>X</h3>
                            </div></div> : null}
                    </div>
                </div>
                {<Inventory/>}
            </div>
        </div>
    );
};

export default MainPage;



// <div className='d-flex w100'>
//     <div className='d-flex j-center a-center'>
//         <img src={character.image} alt=""/>
//     </div>
//     <div style={{marginTop: '40px'}} className='d-flex h100 w50 column'>
//         <div>Race: {character.race}</div>
//         <div>Damage: {character.damage}</div>
//         <div>Health: {character.health}</div>
//         <div>Energy: {character.energy}</div>
//         <div>Stamina: {character.stamina}</div>
//         <div>Strength: {character.strength}</div>
//     </div>
// </div>
// <div>
//     {equipped.maxDamage > 0 ?  <div className='d-flex wepCard'>
//         <img style={{marginTop: '7px', marginLeft: '15px'}} src={equipped.image} alt=""/>
//         <div className='d-flex j-center a-center column'>
//             <div>Max dmg: {equipped.maxDamage}</div>
//             <div>Energy per hit: {equipped.energyPerHit}</div>
//         </div>
//         <div className='removeWeapon'>
//             <h3 onClick={removeWeapon}>X</h3>
//
//         </div>
//
//     </div> : null}
// </div>