import React from 'react'
import {  useSelector } from 'react-redux';
import { Link } from "react-router-dom";

export const Bar = () => {

  const { CountPizza1, CountPizza2 } = useSelector( state => state.auth );

    return (
        <div className = "list-books-title">
          <Link to="/history">  
            <img
              style={{
                position: "relative",
                filter: "invert(100%)",
                margin: "-2px 520px -10px 0"
              }}
              src="/icon.png"
              alt="Book Icon"
              width="30px"
            />
          </Link>  
          <Link to="/shoppingcart"> 
          
            <img
              style={{
                position: "relative",
                filter: "invert(100%)",
                margin: "-2px 0px -10px 0"
              }}
              src="/icon1.png"
              alt="Book Icon"
              width="30px"
            />
      {
        (CountPizza1 + CountPizza2 > 0)&&(
            <span
                      className="ui circular label"
                      style={{ position: "absolute", margin: "2px 0 0 5px",backgroundColor:"#2e7c31" }}
                    >
                      {CountPizza1 + CountPizza2}
            </span>)

  }            
           </Link>  

        </div>
    )
}