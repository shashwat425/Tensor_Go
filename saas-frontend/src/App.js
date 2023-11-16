import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Plans from './components/Plans';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import OrderHistory from './components/OrderHistory';
import AdminDashboard from './components/AdminDashboard';
import UserDashboard from './components/UserDashboard';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/plans" component={Plans} />
        <Route path="/cart" component={Cart} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/order-history" component={OrderHistory} />
        <Route path="/admin-dashboard" component={AdminDashboard} />
        <Route path="/user-dashboard" component={UserDashboard} />
      </Switch>
    </Router>
  );
}

export default App;
