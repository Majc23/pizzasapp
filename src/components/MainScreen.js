import React from 'react';

import { Bar } from './Bar'
import { Menu } from './Menu'

//import logo from '../logo.svg';

export const MainScreen = () => {
    return (
        <div className="men" >
            <Bar/>
            <h2 >Click for each type of pizza you want to order</h2>
            <Menu/>      
      </div>
    );
}