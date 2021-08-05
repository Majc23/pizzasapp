import React,  {useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { MainScreen } from '../components/MainScreen';
import { ShoppingCartScreen } from '../components/ShoppingCartScreen';
import { HistoryScreen } from '../components/HistoryScreen';
import { startLoadingOrders } from '../actions/action';



export const AppRouter = () => {

  const dispatch = useDispatch();

  useEffect(() => {
      dispatch( startLoadingOrders(  ) );
  
    
}, [dispatch ])
    return (
    <Router>  
        <div className="App">
          <Switch>
            <Route
              exact
              path="/"
              component={ MainScreen }
            />
            <Route
              path="/shoppingcart"
              component={ ShoppingCartScreen }
            />
            <Route
              path="/history"
              component={ HistoryScreen }
            />
          </Switch>
        </div>
     </Router>
      );
}