import React, {   useEffect, useRef }  from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";

import { useCounter } from '../hooks/useCounter';
import { setCountPizza1, setCountPizza2, startSaveOrder } from "../actions/action";


export const ShoppingCartScreen = () => {

  const { CountPizza1, CountPizza2 } = useSelector( state => state.auth );
  const dispatch = useDispatch();

  const {state:count1, increment:increment1, decrement:decrement1} = useCounter(CountPizza1)
  const {state:count2, increment:increment2, decrement:decrement2} = useCounter(CountPizza2)

  const countP1 = useRef( CountPizza1 );
  const countP2 = useRef( CountPizza2 );

  useEffect(() => {
    if ( CountPizza1 !== countP1.current  ) {
      
      countP1.current = CountPizza1;
      console.log(countP1.current)
  }
  if ( CountPizza2 !== countP2.current  ) {
      
    countP2.current = CountPizza2;
}

}, [CountPizza1, CountPizza2])

  const handleAddPizza = () => {

    if(count1 === 0){
      dispatch( setCountPizza1(1) );
      increment1();
    }
    else{
      increment1();
      dispatch( setCountPizza1(count1+1) );
      
    }
  }

  const handleAddPizza1 = () => {
    console.log(count2);
    if(count2 === 0){
      dispatch( setCountPizza2(1) );
      increment2();
    }
    else{
      increment2();
      dispatch( setCountPizza2(count2+1) );
      
    }
  }

  const handleLessPizza1 = () => {
    console.log(count2);
    if(count2 === 0){
      dispatch( setCountPizza2(1) );
      
    }
    else{
      decrement1();
      dispatch( setCountPizza2(count2-1) );
      
    }
  }

  const handleLessPizza2 = () => {
    console.log(count2);
    if(count2 === 0){
      dispatch( setCountPizza2(0) );
      
    }
    else{
      decrement2();
      dispatch( setCountPizza2(count2-1) );
      
    }
  }

  const handleFinish = () => {
    console.log("1")
        dispatch( startSaveOrder( ) );
   
}

  
    return (
      <div className="list-books-content-order">
        <Link to="/"> 
        <button 
        className="btn-finish"
        onClick={ handleFinish }
        >finalize order</button>
        </Link>
      <div>
      <img
          
          src="/P1.jpg"
          alt="P1"
          width="200px"
          height="150px"
        />
        <div className="order-group">
          <button 
          className="btn-order"
          onClick={handleAddPizza}
          >+</button>
          <p 
          className="btn-show"
          
          >{count1}</p>
          <button
          className="btn-order2"
          onClick={handleLessPizza1}
          >-</button>
        </div>
       
      </div>
      
      <div>
      <img
          
          src="/P2.jpg"
          alt="P2"
          width="200px"
          height="150px"
        /> 
        
      <div className="order-group">
          <button 
          className="btn-order"
          onClick={handleAddPizza1}
          >+</button>
          <p 
          
          className="btn-show"
          
          >{count2}</p>
          <button
          className="btn-order2"
          onClick={handleLessPizza2}
          >-</button>
        </div>
        
      </div>

      
      
    </div>
    );
}