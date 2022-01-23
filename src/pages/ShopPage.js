import React from 'react';
import ToolBar from "../components/ToolBar";
import Inventory from "../components/Inventory";
import Shop from "../components/Shop";

const ShopPage = () => {
    return (
        <div className='mainWindow'>
                {<ToolBar/>}
            <div className='mainWindow2'>
                {<Shop />}
                {<Inventory />}
            </div>
        </div>
    );
};

export default ShopPage;
