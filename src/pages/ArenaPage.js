import React, {useState} from 'react';
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {setEnemyHp} from "../features/enemyHp";
import {setPlayerHp} from "../features/playerHp";
import {setEnergy} from "../features/energy";
import ToolBar from "../components/ToolBar";
import {useNavigate} from "react-router";
import {removeFromInventory} from "../features/InventoryArr";
import {setInventory} from "../features/InventoryArr";
import {setDrop, removeDrop, setDropInitial} from "../features/dropArray";

const ArenaPage = () => {
    const [getEnemy, setEnemy] = useState({})
    const [getMonster, setMonster] = useState(false)
    const [monsterDmg, setMonsterDmg] = useState()
    const [getStart, setStart] = useState(false)
    const [getGameOver, setGameOver] = useState(false)
    const [getWin, setWin] = useState(false)

    const enemyHp = useSelector((state => state.enemyHp.value))
    const playerHp = useSelector((state => state.playerHp.value))
    const dispatch = useDispatch()
    const energy = useSelector((state => state.energy.value))
    const character = useSelector((state => state.character.value))
    const playerHpPercents = Math.round(playerHp * 100 / character.health)
    const monsterHpPercents = Math.round(enemyHp * 100 / getEnemy.health)
    const energyPercents = Math.round(energy * 100 / character.energy)
    const equip = useSelector((state => state.equip.value))
    const equipped = equip.maxDamage > 0
    const navigate = useNavigate()
    const weaponRandomDmg = Math.round(Math.random() * equip.maxDamage)
    const inventory = useSelector((state => state.inventory.value))
    const drop = useSelector((state => state.drop.value))
    const monsters = [
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/b/b1/Basilisk.png",
            name: "Basilisk",
            maxDamage: 5,
            health: 100,
            maxItemsDrop: 1
        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/7/75/VampireBat.png",
            name: "Bat",
            maxDamage: 8,
            health: 80,
            maxItemsDrop: 1
        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/a/a4/Bear.png",
            name: "Bear",
            maxDamage: 20,
            health: 150,
            maxItemsDrop: 3
        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/6/60/Beetle.png",
            name: "Beetle",
            maxDamage: 3,
            health: 300,
            maxItemsDrop: 1
        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/6/6f/Boar.png",
            name: "Boar",
            maxDamage: 7,
            health: 85,
            maxItemsDrop: 1
        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/0/01/Vulture.png",
            name: "Carrion bird",
            maxDamage: 6,
            health: 170,
            maxItemsDrop: 1
        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/3/36/Chimera.png",
            name: "Chimaera",
            maxDamage: 12,
            health: 190,
            maxItemsDrop: 2
        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/3/33/Clefthoof.png",
            name: "Clefthoof",
            maxDamage: 50,
            health: 500,
            maxItemsDrop: 4
        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/6/63/Crab.png",
            name: "Crab",
            maxDamage: 8,
            health: 120,
            maxItemsDrop: 3
        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/4/46/Crocolisk.png",
            name: "Crocolisk",
            maxDamage: 38,
            health: 420,
            maxItemsDrop: 3
        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/5/51/Devilsaur.png",
            name: "Devilsaur",
            maxDamage: 25,
            health: 250,
            maxItemsDrop: 3
        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/6/6c/Diemetradon.png",
            name: "Diemetradon",
            maxDamage: 12,
            health: 90,
            maxItemsDrop: 2

        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/3/34/Dragonhawk1.png",
            name: "Dragonhawk",
            maxDamage: 120,
            health: 20,
            maxItemsDrop: 5
        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/0/03/Elekk.png",
            name: "Elekk",
            maxDamage: 34,
            health: 160,
            maxItemsDrop: 4

        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/7/73/Fox.png",
            name: "Fox",
            maxDamage: 5,
            health: 50,
            maxItemsDrop: 2

        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/2/2f/Gryphon.png",
            name: "Gryphon",
            maxDamage: 18,
            health: 350,
            maxItemsDrop: 2

        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/8/84/Gorilla.png",
            name: "Gorilla",
            maxDamage: 30,
            health: 240,
            maxItemsDrop: 3

        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/c/c3/Horse.png",
            name: "Horse",
            maxDamage: 3,
            health: 150,
            maxItemsDrop: 1

        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/9/9d/Hydra.png",
            name: "Hydra",
            maxDamage: 40,
            health: 500,
            maxItemsDrop: 5
        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/e/ee/HyenaBlue.png",
            name: "Hyena",
            maxDamage: 9,
            health: 120,
            maxItemsDrop: 2

        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/e/e5/Cat_lion.png",
            name: "Lion",
            maxDamage: 13,
            health: 200,
            maxItemsDrop: 2

        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/b/b8/Lynx.png",
            name: "Lynx",
            maxDamage: 12,
            health: 150,
            maxItemsDrop: 1

        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/9/9c/Mastiff.png",
            name: "Mastiff",
            maxDamage: 7,
            health: 80,
            maxItemsDrop: 1

        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/2/27/Monkey.png",
            name: "Monkey",
            maxDamage: 4,
            health: 300,
            maxItemsDrop: 1

        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/0/08/Netherray.png",
            name: "Nether ray",
            maxDamage: 6,
            health: 120,
            maxItemsDrop: 1

        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/b/be/OwlWhite.png",
            name: "Owl",
            maxDamage: 7,
            health: 70,
            maxItemsDrop: 2

        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/3/36/Panther.png",
            name: "Panther",
            maxDamage: 19,
            health: 40,
            maxItemsDrop: 3

        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/1/16/Parrot.png",
            name: "Parrot",
            maxDamage: 2,
            health: 30,
            maxItemsDrop: 1

        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/6/66/Raven.png",
            name: "Raven",
            maxDamage: 8,
            health: 150,
            maxItemsDrop: 1

        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/c/c2/Rhino.png",
            name: "Rhinoceros",
            maxDamage: 120,
            health: 1500,
            maxItemsDrop: 8
        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/a/ab/Scorpion.png",
            name: "Scorpid",
            maxDamage: 25,
            health: 300,
            maxItemsDrop: 3

        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/1/1a/Sea_Snake.png",
            name: "Sea snake",
            maxDamage: 5,
            health: 50,
            maxItemsDrop: 1

        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/8/89/Serpent.png",
            name: "Serpent",
            maxDamage: 12,
            health: 80,
            maxItemsDrop: 1

        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/1/14/Shark.png",
            name: "Shark",
            maxDamage: 15,
            health: 210,
            maxItemsDrop: 2

        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/5/51/Sporebat.png",
            name: "Spore bat",
            maxDamage: 9,
            health: 150
        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/1/10/Stag.png",
            name: "Stag",
            maxDamage: 4,
            health: 200,
            maxItemsDrop: 2

        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/1/12/Strider.png",
            name: "Tallstrider",
            maxDamage: 20,
            health: 80
        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/3/3c/Threshadon.png",
            name: "Threshadon",
            maxDamage: 70,
            health: 800,
            maxItemsDrop: 3

        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/e/e9/Turtle.png",
            name: "Turtle",
            maxDamage: 5,
            health: 5000,
            maxItemsDrop: 10
        }
    ]
    const dropItems = [
        {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Chest_Leather_09.gif",
            price: 245,
        },
        {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Chest_Chain.gif",
            price: 63
        },
        {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Chest_Cloth_33.gif",
            price: 3
        }, {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Chest_Plate04.gif",
            price: 497
        }, {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Shirt_Blue_01.gif",
            price: 33
        }, {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Shirt_05.gif",
            price: 52
        }, {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Shirt_Grey_01.gif",
            price: 27
        }, {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Shirt_16.gif",
            price: 22
        }, {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Chest_Chain.gif",
            price: 173
        }, {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Chest_Cloth_23.gif",
            price: 3
        }, {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Chest_Chain.gif",
            price: 123
        }, {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Chest_Wolf.gif",
            price: 70
        }, {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Chest_Chain_05.gif",
            price: 48
        }, {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Chest_Cloth_22.gif",
            price: 3
        }, {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Chest_Cloth_40.gif",
            price: 44
        }, {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Chest_Cloth_13.gif",
            price: 3
        }, {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Chest_Cloth_16.gif",
            price: 3
        }, {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Chest_Plate04.gif",
            price: 1088
        },
        {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Misc_Bag_09_Red.gif",
            price: 20
        },
        {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Misc_Bag_EnchantedMageweave.gif",
            price: 200
        }, {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Misc_Bag_FelclothBag.gif",
            price: 240
        }, {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Misc_Bag_10_Red.gif",
            price: 180
        }, {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Misc_Bag_07_Black.gif",
            price: 150
        }, {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Misc_Bag_02.gif",
            price: 120
        }, {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Misc_Bag_08.gif",
            price: 0
        }, {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Misc_Bag_27.gif",
            price: 500
        }, {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Boots_09.gif",
            price: 349
        }, {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Boots_01.gif",
            price: 88
        }, {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Boots_08.gif",
            price: 458
        }, {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Boots_Leather01.gif",
            price: 255
        },
        {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Boots_Cloth_03.gif",
            price: 128
        },
        {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Boots_05.gif",
            price: 16
        },
        {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Boots_Plate_07.gif",
            price: 612
        },
        {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Boots_Chain_05.gif",
            price: 605
        },
        {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Boots_02.gif",
            price: 52
        },
        {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Boots_Fabric_01.gif",
            price: 24
        },
        {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Boots_Cloth_16.gif",
            price: 177
        },
        {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Gauntlets_32.gif",
            price: 38
        },
        {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Gauntlets_49.gif",
            price: 198
        },
        {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Gauntlets_16.gif",
            price: 97
        },
        {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Gauntlets_14.gif",
            price: 118
        },
        {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Gauntlets_28.gif",
            price: 59
        },
        {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Gauntlets_63.gif",
            price: 148
        },
        {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Gauntlets_21.gif",
            price: 21
        },
        {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Gauntlets_05.gif",
            price: 123
        },
        {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Gauntlets_06.gif",
            price: 114
        },
        {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Gauntlets_05.gif",
            price: 48
        },
        {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Gauntlets_23.gif",
            price: 38
        },
        {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Gauntlets_20.gif",
            price: 27
        },
        {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Gauntlets_05.gif",
            price: 6
        },
        {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Gauntlets_21.gif",
            price: 29
        },
        {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Helmet_69.gif",
            price: 689
        },
        {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Helmet_121.gif",
            price: 178
        },
        {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Helmet_31.gif",
            price: 38
        }, {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Helmet_39.gif",
            price: 183
        },
        {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Helmet_125.gif",
            price: 140
        }, {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Helmet_108.gif",
            price: 258
        },
        {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Helmet_13.gif",
            price: 95
        },
        {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Helmet_20.gif",
            price: 683
        },
        {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Helmet_30.gif",
            price: 122
        },
        {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Belt_22.gif",
            price: 48
        },
        {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Helmet_09.gif",
            price: 78
        },
        {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Pants_Mail_21.gif",
            price: 800
        },
        {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Pants_Cloth_16.gif",
            price: 110
        },
        {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Pants_Cloth_14.gif",
            price: 136
        },
        {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Pants_07.gif",
            price: 92
        },
        {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Pants_06.gif",
            price: 239
        },
        {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Pants_03.gif",
            price: 263
        },
        {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Pants_07.gif",
            price: 18
        },
        {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Pants_13.gif",
            price: 38
        },
        {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Pants_Leather_20.gif",
            price: 197
        },
        {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Pants_Plate_12.gif",
            price: 1200
        },
        {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Pants_Leather_13.gif",
            price: 316
        },
        {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Jewelry_Ring_31.gif",
            price: 12
        },
        {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Jewelry_Ring_36.gif",
            price: 15
        },
        {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Jewelry_Ring_40.gif",
            price: 58
        },
        {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Jewelry_Ring_12.gif",
            price: 1
        },
        {
            image: "https://wow.gamepressure.com/gfx/icons/Achievement_Dungeon_UlduarRaid_Misc_02.gif",
            price: 440
        },
        {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Jewelry_Ring_35.gif",
            price: 57
        },
        {
            image: "https://wow.gamepressure.com/gfx/icons/INV_Jewelry_Ring_33.gif",
            price: 20
        }
    ]

    const mapInventory = inventory.map((x, i) =>
    {if (x.hasOwnProperty('title')){
        return (

            <div onClick={() => heal (x, i)} key={i} className='arenaCard'>
                <img src={x.image} alt=""/>
                <div>{x.title}</div>
            </div>

        )
    }})


    function heal (x , i) {
        if (x.title.includes('Health')) {
        dispatch(setPlayerHp(playerHp + x.effect.health))
        dispatch(removeFromInventory(i))
        }
        if (x.title.includes('Energy')) {
            dispatch(setEnergy(energy + x.effect.energy))
            dispatch(removeFromInventory(i))
        }
    }

    function sendToInv (x, i) {
        dispatch(setInventory(x))
        dispatch(removeDrop(i))

    }
    function findEnemy() {

        const randomNum = Math.floor(Math.random() * monsters.length)
        setMonsterDmg(Math.floor(Math.random() * monsters[randomNum].maxDamage)) //random damage
        setEnemy(monsters[randomNum])
        setMonster(true)
        dispatch(setDropInitial([]))
    }

    function findNewEnemy() {
        setWin(false)
        setGameOver(false)
        setMonster(false)
        setStart(false)
    }


    function start() {
        setStart(!getStart)
        dispatch(setEnemyHp(getEnemy.health))
    }

    const itemsToDrop = []
    function MonsterDead () {
        const monsterDropRandomNum = Math.floor(Math.random() * getEnemy.maxItemsDrop)
        for (let i = 0; i < monsterDropRandomNum; i++) {
            const dropIndex = Math.floor(Math.random() * dropItems.length)
            itemsToDrop.push(dropItems[dropIndex])
             }
        for (let i = 0; i < itemsToDrop.length; i++) {
            dispatch(setDrop(itemsToDrop[i]))
        }
    }

    function attack() {
        if (playerHp > 0) {
            if (energy > 0) {
                if (enemyHp > 0) {
                    if (equip.maxDamage > 0) {
                        dispatch(setPlayerHp(playerHp - monsterDmg))
                        dispatch(setEnergy(energy - equip.energyPerHit))
                        dispatch(setEnemyHp(enemyHp - (character.damage + weaponRandomDmg)))
                    } else {
                        dispatch(setPlayerHp(playerHp - monsterDmg))
                        dispatch(setEnergy(energy - equip.energyPerHit))
                        dispatch(setEnemyHp(enemyHp - character.damage))
                    }
                } else {
                    MonsterDead()
                    setWin(!getWin)

                }
            } else alert("neužtenka energijos!")
        } else {
            setGameOver(!getGameOver)
        }
    }

    function goLobby(x) {
        if (x === '/') {
            navigate(x)
        } else navigate(x)
    }


    const playerCard = <div className="Card">
        <div className="image">
            <img src={character.image} alt=""/>
        </div>
        <div className='bottom column d-flex'>
            <div className='statusBar'>
                <div style={{height: '70px', width: `${playerHpPercents}%`, color: 'white'}} className="innerBar"/>
            </div>
            <div className='statusBar'>
                <div style={{height: '70px', width: `${energyPercents}%`, color: 'white'}} className="energyBar"/>
            </div>
            <div className='d-flex'>
                <div style={{marginRight: '20px'}} className='d-flex column'>
                    <h3>Player:</h3>

                    <div>DMG: {character.damage}</div>
                    <div>HP: {playerHp}</div>
                    <div>ENERGY: {energy}</div>
                </div>
                {equipped ?
                    <div className='d-flex column'>
                        <h3>Weapon:</h3>

                        <div>Max damage: {equip.maxDamage}</div>
                        <div>Energy per hit: {equip.energyPerHit}</div>
                    </div> : null}
            </div>
        </div>
    </div>

    return (
        <div className='arenaWindow'>
            <div className="mainWindow2">
                {<ToolBar/>}
                {playerCard}

                <div style={{backgroundColor: "transparent", boxShadow: "none"}} className="Card">
                    <div className='d-flex j-center a-center h50 w100'>
                        {!getMonster && !getStart ? <button className='arenaBtn' onClick={findEnemy}>FIND ENEMY</button> : null}
                        {getMonster && !getStart ? <button className='arenaBtn' onClick={start}>START FIGHT</button> : null}
                        {getMonster && getStart && !getWin && !getGameOver ?
                            <button className='arenaBtn' onClick={attack}>ATTACK</button> : null}
                        {getGameOver ?
                            <div className='d-flex column'>
                                <h1>GAME OVER!</h1>
                                <button className='arenaBtn' id='/' onClick={event => goLobby(event.target.id)}>Try again!</button>
                            </div>
                            : null}
                        {getWin ?
                            <div className='d-flex column'>
                                <h1>Your win</h1>
                                <button className='arenaBtn' onClick={findNewEnemy}>Play again</button>
                                <button className='arenaBtn' id='/main' onClick={event => goLobby(event.target.id)}>go to main page</button>
                            </div>
                            : null}
                    </div>
                    <div className='h50 w100 arenaInventory'>
                        {mapInventory}
                    </div>


                </div>

                <div className="Card">
                    {getMonster && !getWin ?
                        <div className='d-flex column a-center j-center insideCard'>
                            <div className="image">
                                <img src={getEnemy.image} alt=""/>
                            </div>
                            <div className='bottom column d-flex'>
                                <div className='statusBar'>
                                    <div style={{height: '70px', width: `${monsterHpPercents}%`, color: 'white'}}
                                         className="innerBar"/>
                                </div>
                                <div className='d-flex'>
                                    <div style={{marginRight: '20px'}} className='d-flex column'>
                                        <div className='d-flex column'>
                                            <h3>Monster:</h3>
                                            <div>Name: {getEnemy.name}</div>
                                            <div>Max Damage: {getEnemy.maxDamage}</div>
                                            {getStart ? <div>HP: {enemyHp}</div> :


                                                <div className='insideCard dropItems'>
                                                </div>
                                            }
                                        </div>


                                    </div>

                                </div>
                            </div>
                        </div>
                        : null  }
                    {getWin && getMonster ?
                        <div className='drop'>
                            {drop.map((x, i) => <div onClick={() => sendToInv(x, i)} key={i}>
                                <img src={x.image} alt=""/>
                            </div>)}
                    </div> : null}

                </div>
            </div>
        </div>
    );
};

export default ArenaPage;
