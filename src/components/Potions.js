import React from 'react';
import {setInventory} from "../features/InventoryArr";
import {useDispatch, useSelector} from "react-redux";
import {setGold} from "../features/Gold";
import {setSlots} from "../features/Slots";

const Potions = () => {
    const potions = [
        {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Potion_21.gif",
            title: "Health + 10",
            effect: {
                health: 10
            },
            price: 200
        },
        {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Potion_21.gif",
            title: "Health + 20",
            effect: {
                health: 20
            },
            price: 400
        },
        {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Potion_21.gif",
            title: "Health + 30",
            effect: {
                health: 30
            },
            price: 600
        },
        {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Potion_21.gif",
            title: "Health + 40",
            effect: {
                health: 40
            },
            price: 800
        },
        {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Potion_21.gif",
            title: "Health + 50",
            effect: {
                health: 50
            },
            price: 1000
        },
        {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Potion_21.gif",
            title: "Health + 60",
            effect: {
                health: 60
            },
            price: 1200
        },
        {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Potion_21.gif",
            title: "Health + 70",
            effect: {
                health: 70
            },
            price: 1400
        },
        {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Potion_21.gif",
            title: "Health + 80",
            effect: {
                health: 80
            },
            price: 1800
        },
        {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Potion_21.gif",
            title: "Health + 90",
            effect: {
                health: 90
            },
            price: 1800
        },
        {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Potion_21.gif",
            title: "Health + 100",
            effect: {
                health: 100
            },
            price: 2000
        },
        {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Potion_156.gif",
            title: "Energy + 10",
            effect: {
                energy: 10
            },
            price: 300
        },
        {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Potion_156.gif",
            title: "Energy + 20",
            effect: {
                energy: 20
            },
            price: 600
        },
        {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Potion_156.gif",
            title: "Energy + 30",
            effect: {
                energy: 30
            },
            price: 900
        },
        {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Potion_156.gif",
            title: "Energy + 40",
            effect: {
                energy: 40
            },
            price: 1200
        },
        {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Potion_156.gif",
            title: "Energy + 50",
            effect: {
                energy: 50
            },
            price: 1500
        },
        {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Potion_156.gif",
            title: "Energy + 60",
            effect: {
                energy: 60
            },
            price: 1800
        },
        {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Potion_156.gif",
            title: "Energy + 70",
            effect: {
                energy: 70
            },
            price: 2100
        },
        {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Potion_156.gif",
            title: "Energy + 80",
            effect: {
                energy: 80
            },
            price: 2400
        },
        {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Potion_156.gif",
            title: "Energy + 90",
            effect: {
                energy: 90
            },
            price: 2700
        },
        {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Potion_156.gif",
            title: "Energy + 100",
            effect: {
                energy: 100
            },
            price: 3000
        },
    ]
    const dispatch = useDispatch()
    const gold = useSelector((state => state.gold.value))
    const slots = useSelector((state => state.slots.value))
    const inventoryArray = useSelector((state => state.inventory.value))

    function add(x) {
        if (gold >= x.price) {
            if (slots >= inventoryArray.length - 2) {
                dispatch(setInventory(x))
                dispatch(setGold(gold - x.price))
                dispatch(setSlots(slots - 1))
                console.log(slots, inventoryArray.length)
            } else {
                alert('Nėra vietos!')
            }
        } else {
            alert('Neužtenka aukso!')
        }
    }

    return (
        <div className='wepWindow'>
            {potions.map((x, i) =>
                <div onClick={() => add(x)} key={i} className='d-flex wepCard'>
                    <img src={x.image} alt=""/>
                    <div className='d-flex column'>
                        <div>Price: {x.price}</div>
                        <div>{x.title}</div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Potions;
