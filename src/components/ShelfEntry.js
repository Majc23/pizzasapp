import React from 'react';
import moment from 'moment';

export const ShelfEntry = ({ id, date, pizzas }) => {

    const{ count:count1}=  pizzas[0];

    const{ count:count2}=  pizzas[1];
    
    const orderDate = moment(+date);

    return (
        <div 
            className="journal__entry"
            
        >
            
            <div >
                <p className="journal__entry-title">
                    Pedido # { id }
                </p>
            
                
            </div>
            <div >
                <p className="journal__entry-title">
                    Cheese pizza
                </p>
                <p className="cant">
                    {count1}
                </p>
            </div>
            <div >
                <p className="journal__entry-title">
                    vegetarian pizza
                </p>
                <p className="cant">
                    {count2}
                </p>
            </div>
            <div>
                <span
                className = "date"
                > { orderDate.format("MMM Do YY") } </span>
            </div>

            
        </div>
    )
}
