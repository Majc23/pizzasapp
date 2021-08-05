import React, {  useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { setCountPizza1, setCountPizza2 } from "../actions/action";

export const Menu = () => {
  
  const { CountPizza1, CountPizza2 } = useSelector( state => state.auth );
  const dispatch = useDispatch();

  const [ count1, setCount1 ] = useState(CountPizza1);
  const [ count2, setCount2 ] = useState(CountPizza2);

  const handleAddPizza = () => {

    if(count1 === 0){
      dispatch( setCountPizza1(1) );
      setCount1(count1 + 1)
    }
    else{
      setCount1(count1 + 1);
      dispatch( setCountPizza1(count1+1) );
      
    }
  }
  const handleAddPizza1 = () => {
    console.log(count2);
    if(count2 === 0){
      dispatch( setCountPizza2(1) );
      setCount2(count2 + 1)
    }
    else{
      setCount2(count2 + 1);
      dispatch( setCountPizza2(count2+1) );
      
    }
  }
    return (
        <div className="list-books-content">
          <div>
          <img
              
              src="/P1.jpg"
              alt="P1"
              width="200px"
              height="150px"
              onClick={handleAddPizza}
            />

           
          </div>
          
          <div>
          <img
              
              src="/P2.jpg"
              alt="P2"
              width="200px"
              height="150px"
              onClick={handleAddPizza1}
            /> 

            
          </div>
          
        </div>
    )
}