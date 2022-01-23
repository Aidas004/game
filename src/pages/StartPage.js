import React from 'react';
import {useNavigate} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {setCharacter} from "../features/Character";
import {setGold} from "../features/Gold";
import {setSlots} from "../features/Slots";
import {setPlayerHp} from "../features/playerHp";
import {setEnergy} from "../features/energy";

const StartPage = () => {
    const characters = [
        {
            image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fqph.fs.quoracdn.net%2Fmain-qimg-d0288cbe0d9a95c7c129431a3f900aad&f=1&nofb=1",
            race: "Human",
            damage: 3,
            health: 150,
            energy: 50,
            stamina: 3,
            strength: 1,
            inventorySlots: 3,
            gold: 100
        },
        {
            image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fc0%2F27%2F4f%2Fc0274f2498b484f1fc293ebaf5f613ce.png&f=1&nofb=1",
            race: "Dwarf",
            damage: 5,
            health: 90,
            energy: 30,
            stamina: 4,
            strength: 3,
            inventorySlots: 5,
            gold: 300
        },
        {
            image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F92%2F03%2Ff1%2F9203f1f4a824f6b36db19bdf74926ef7.png&f=1&nofb=1",
            race: "Elf",
            damage: 4,
            health: 100,
            energy: 40,
            stamina: 5,
            strength: 1,
            inventorySlots: 2,
            gold: 200
        },
        {
            image: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F2e.aonprd.com%2FImages%2FAncestries%2FGnome01.png&f=1&nofb=1",
            race: "Gnome",
            damage: 3,
            health: 80,
            energy: 80,
            stamina: 7,
            strength: 1,
            inventorySlots: 4,
            gold: 1000
        },

        {
            image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette3.wikia.nocookie.net%2Fwowwiki%2Fimages%2F1%2F1e%2F3D-Orc.png%2Frevision%2Flatest%3Fcb%3D20090804213114&f=1&nofb=1",
            race: "Orc",
            damage: 7,
            health: 120,
            energy: 40,
            stamina: 1,
            strength: 10,
            inventorySlots: 5,
            gold: 50
        },
        {
            image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette.wikia.nocookie.net%2Fd-n-d5e%2Fimages%2Fd%2Fd2%2FGoblin.png%2Frevision%2Flatest%3Fcb%3D20191116220452&f=1&nofb=1",
            race: "Goblin",
            damage: 5,
            health: 90,
            energy: 90,
            stamina: 5,
            strength: 2,
            inventorySlots: 3,
            gold: 200
        },
        {
            image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F84%2F11%2F5d%2F84115d7d94bfb1fb1d3ddae13527a04f.png&f=1&nofb=1",
            race: "Troll",
            damage: 6,
            health: 100,
            energy: 70,
            stamina: 4,
            strength: 4,
            inventorySlots: 3,
            gold: 100
        },
        {
            image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F00%2F28%2F5d%2F00285dd455af6037dfd4aa9006bba242.png&f=1&nofb=1",
            race: "Undead",
            damage: 4,
            health: 40,
            energy: 50,
            stamina: 10,
            strength: 1,
            inventorySlots: 8,
            gold: 400
        },
        {
            image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia-waterdeep.cursecdn.com%2Fattachments%2F4%2F442%2Fcouncil-of-spiders-mage.png&f=1&nofb=1",
            race: "Dark Elf",
            damage: 99,
            health: 999,
            energy: 999,
            stamina: 99,
            strength: 99,
            inventorySlots: 99,
            gold: 9999999
        }
    ]
    const navigate = useNavigate()
    const dispatch = useDispatch()
    function nav(x) {
        navigate('/main')
        dispatch(setCharacter(x))
        dispatch(setGold(x.gold))
        dispatch(setSlots(x.inventorySlots))
        dispatch(setPlayerHp(x.health))
        dispatch(setEnergy(x.energy))
    }


    const mappedCharacters = characters.map((x, i) =>
        <div onClick={() => nav(x)} key={i} className="characterBox">
            <img src={x.image} alt=""/>
            <div className='d-flex column j-center'>
                <div>Race: {x.race}</div>
                <div>Damage: {x.damage}</div>
                <div>Health: {x.health}</div>
                <div>Energy: {x.energy}</div>
                <div>Stamina: {x.stamina}</div>
                <div>Strength: {x.strength}</div>
                <div>Inventory Slots: {x.inventorySlots}</div>
                <div>Gold: {x.gold}</div>
            </div>

        </div>
    )

    return (

        <div className='characterWindow'>
            {mappedCharacters}
        </div>


    );
};

export default StartPage;
