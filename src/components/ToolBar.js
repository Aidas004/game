import React from 'react';
import {useNavigate, useLocation} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {setInventoryOpen} from "../features/openInventory";


const ToolBar = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const inventoryOpen = useSelector((state => state.inventoryOpen.value))
    const gold = useSelector((state => state.gold.value))
    function nav (x) {
        navigate(x)
    }

    function openInv () {
        dispatch(setInventoryOpen(!inventoryOpen))
        console.log(inventoryOpen)
    }

    return (
        <div className='toolbar'>
            <div className='d-flex'>
                {location.pathname === '/shop' ?
                    <div className='d-flex'>
                        <div id='/main' onClick={event => nav(event.target.id)} className='btn'>MAIN</div>
                        <div id='/arena' onClick={event => nav(event.target.id)} className='btn ml40'>ARENA</div>
                    </div>
                    : null}
                {location.pathname === '/main' ?
                    <div className='d-flex'>
                        <div id='/shop' onClick={event => nav(event.target.id)} className='btn'>SHOP</div>
                        <div id='/arena' onClick={event => nav(event.target.id)} className='btn ml40'>ARENA</div>
                    </div> : null
                    }
                {location.pathname === '/arena' ?
                    <div className='d-flex'>
                        <div id='/inventory' onClick={openInv} className='btn'>INVENTORY</div>
                    </div> : null
                }
            </div>
            <div className='d-flex'>
                {gold === 0 ? null : <div className='btn'>GOLD: {gold}</div>}
                <div id="/" className='btn ml40' onClick={event => nav(event.target.id)}>START PAGE</div>
            </div>
        </div>
    );
};

export default ToolBar;
