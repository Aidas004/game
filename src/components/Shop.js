import React, {useState} from 'react';
import Weapons from "./Weapons";
import Potions from "./Potions";

const Shop = () => {
    const [getWin, setWin] = useState(true)
function changeWin () {
    setWin(!getWin)
}
const style = {
        color: "red"
}
    return (
        <div className='shopMenu'>
            <div className="shopToolBar m0 d-flex">
                <div onClick={changeWin} style={getWin ? style : null} className="btn">WEAPONS</div>
                <div onClick={changeWin} style={!getWin ? style : null} className="btn">POTIONS</div>
            </div>
            {getWin ? <Weapons /> : <Potions />}
        </div>
    );
};

export default Shop;
