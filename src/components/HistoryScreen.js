import React from 'react';
import {  useSelector } from 'react-redux';

import { ShelfEntry } from './ShelfEntry';



export const HistoryScreen = () => {

  const { orders } = useSelector( state => state.auth );

    return (
      <div className="list-books-content-order">
        <h3>Pedidos Realizados</h3>
        {
          orders
           .map( order => (
            <ShelfEntry 
                key={ order.id }
                { ...order }
            />
        ))
        }

    
    
  </div>
    );
}