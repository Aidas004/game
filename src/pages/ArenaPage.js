import React, {useState} from 'react';
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {setEnemyHp} from "../features/enemyHp";
import {setPlayerHp} from "../features/playerHp";
import {setEnergy} from "../features/energy";
import ToolBar from "../components/ToolBar";
import {useNavigate} from "react-router";

const ArenaPage = () => {
    const [getEnemy, setEnemy] = useState({})
    const [getMonster, setMonster] = useState(false)
    const [monsterDmg, setMonsterDmg] = useState()
    const [getMaxEnergy, setMaxEnergy] = useState()
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
    const energyPercents = Math.round(energy * 100 / getMaxEnergy)
    const equip = useSelector((state => state.equip.value))
    const equipped = equip.maxDamage > 0
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
    const navigate = useNavigate()
    const weaponRandomDmg = Math.round(Math.random() * equip.maxDamage)

    function findEnemy () {

        const randomNum = Math.floor(Math.random() * monsters.length)
        setMonsterDmg(Math.floor(Math.random() * monsters[randomNum].maxDamage)) //random damage
        setEnemy(monsters[randomNum])
        setMonster(true)
        setMaxEnergy(energy)
}


    function findNewEnemy () {
        setWin(false)
        setGameOver(false)
        setMonster(false)
        setStart(false)
    }


    function start () {
        setStart(!getStart)
        dispatch(setEnemyHp(getEnemy.health))

    }

    function attack () {
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
                    setWin(!getWin)
                }
            } else alert("neužtenka energijos!")
        } else {
            setGameOver(!getGameOver)
        }
}
 function goLobby (x) {
        if (x === '/') {
            navigate(x)
        } else navigate(x)
 }


const playerCard =  <div className="Card">
    <div className="image">
        <img src={character.image} alt=""/>
    </div>
    <div className='bottom column d-flex'>
        <div className='statusBar'><div style={{height: '70px', width: `${playerHpPercents}%`, color: 'white'}} className="innerBar"/></div>
        <div className='statusBar'><div style={{height: '70px', width: `${energyPercents}%`, color: 'white'}} className="energyBar"/></div>
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
                {<ToolBar />}
                {playerCard}

            <div className="Card">
                {!getMonster && !getStart ? <button onClick={findEnemy}>FIND ENEMY</button> : null}
                {getMonster && !getStart ? <button onClick={start}>START FIGHT</button> : null}
                {getMonster && getStart && !getWin && !getGameOver ? <button onClick={attack}>ATTACK</button> : null}
                {getGameOver ?
                    <div className='d-flex column'>
                        <h1>GAME OVER!</h1>
                        <button id='/' onClick={event => goLobby(event.target.id)}>Try again!</button>
                    </div>
                    : null}
                {getWin ?
                    <div className='d-flex column'>
                        <h1>Your win</h1>
                        <button onClick={findNewEnemy}>Play again</button>
                        <button id='/main' onClick={event => goLobby(event.target.id)}>go to main page</button>
                    </div>
                    : null}


            </div>

                <div className="Card">
            {getMonster && !getWin ?
                <div className='d-flex column a-center j-center insideCard'>
                    <div className="image">
                        <img src={getEnemy.image} alt=""/>
                    </div>
                    <div className='bottom column d-flex'>
                        <div className='statusBar'><div style={{height: '70px', width: `${monsterHpPercents}%`, color: 'white'}} className="innerBar"/></div>
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
                    : null}
                </div>
        </div>
        </div>
    );
};

export default ArenaPage;
