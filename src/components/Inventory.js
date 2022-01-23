import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useLocation} from "react-router";
import {setWeapon} from "../features/Equip";
import {removeFromInventory} from "../features/InventoryArr";
import {setGold} from "../features/Gold";
import {setSlots} from "../features/Slots";


const Inventory = () => {
    const equipped = useSelector((state => state.equip.value))
    const dispatch = useDispatch()
    const location = useLocation()
    const weapons = useSelector((state => state.inventory.value))
    const gold = useSelector((state => state.gold.value))
    const slots = useSelector((state => state.slots.value))

    function setWeap(x, i) {
        if (equipped.maxDamage === 0) {
            dispatch(setWeapon(x))
            dispatch(removeFromInventory(i))
            dispatch(setSlots(slots + 1))
        } else {
            alert("Nusiimk ginklą!")
        }
    }

    function sell(x, i) {
        dispatch(removeFromInventory(i))
        dispatch(setGold(gold + (x.price / 2)))
        dispatch(setSlots(slots + 1))

    }


    const mappedWeapons = weapons.map((x, i) => {
            if (x.hasOwnProperty('maxDamage') && location.pathname === '/shop') {
                return (
                    <div style={{width: '270px'}} key={i} className='d-flex wepCard'>
                        <div className="left d-flex">
                            <img src={x.image} alt=""/>
                            <div className='d-flex column'>
                                <div>Price: <b>{x.price / 2}</b></div>
                                <div>Max dmg: <b>{x.maxDamage}</b></div>
                                <div>Energy per hit: <b>{x.energyPerHit}</b></div>
                            </div>
                        </div>
                        <div className="right">
                            <div onClick={() => sell(x, i)} className='sellBtn'>SELL</div>
                        </div>

                    </div>)
            }
            if (x.hasOwnProperty('maxDamage') && location.pathname === '/main') {
                return (
                    <div style={{width: '270px'}} key={i} className='d-flex wepCard'>
                        <div className="left d-flex">
                            <img src={x.image} alt=""/>
                            <div className='d-flex column'>
                                <div>Price: {x.price / 2}</div>
                                <div>Max dmg: {x.maxDamage}</div>
                                <div>Energy per hit: {x.energyPerHit}</div>
                            </div>
                        </div>
                        <div className="right">
                            <div onClick={() => setWeap(x, i)} className='sellBtn'>Equip</div>
                        </div>
                    </div>)
            }
            if (x.hasOwnProperty('title') && location.pathname === '/shop') {
                return (
                    <div style={{width: '270px'}} key={i} className='d-flex wepCard'>
                        <div className="left d-flex">
                            <img src={x.image} alt=""/>
                            <div className='d-flex column'>
                                <div>Price: {x.price / 2}</div>
                                <div>{x.title}</div>
                            </div>
                        </div>
                        <div className="right">
                            <div onClick={() => sell(x, i)} className='sellBtn'>SELL</div>
                        </div>
                    </div>)
            } else {
                return (
                    <div style={{width: '270px'}} key={i} className='d-flex wepCard'>
                        <img style={{width: '24%', marginLeft: '5px'}} src={x.image} alt=""/>
                        <div className='d-flex column'>
                            <div>Price: {x.price / 2}</div>
                            <div>{x.title}</div>
                        </div>
                    </div>
                )
            }
        }
    )


    return (
        <div className='inventory column'>
            <div className='d-flex w100 j-center'>Inventory Slots Left: {slots}</div>
            <div className='d-flex wrap j-center a-center h100 w100'>
                {mappedWeapons}
            </div>
        </div>
    );
};

export default Inventory;
