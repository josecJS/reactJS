import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './pages/about/about.page';
import Store from './pages/store/store.page';
import Nav from './components/Nav';
import Detail from './pages/detail/detail.page';
import Context from './context';
import { ProtectedRoute } from './components/ProtectedRoute';
import Login from './pages/login/login.page';
import { Redirect } from 'react-router-dom';

export default function App() {
  const [products, setProducts] = useState([]);
  let deleteProducts = () => setProducts([]);
  let addProducts = (newProducts) => setProducts(newProducts);

  return (
    <Context.Provider className="App" value={{
      products: products,
      addProducts: addProducts,
      deleteProducts: deleteProducts
    }}>
      <Router>
        <Nav/>
        <div>
          <Route exact path="/" component={Login}/>
          <ProtectedRoute exact path="/store" component={Store}/>      
          <ProtectedRoute exact path="/about" component={About}/>
          <ProtectedRoute path="/product/:id" component={Detail}/>
          <Redirect from="/**" to='/' />
        </div>
        <div>
          <strong>{process.env.REACT_APP_ENV}</strong>
        </div>
        <div>
          <strong>{process.env.REACT_APP_DEFAULT}</strong>
        </div>
      </Router>
      </Context.Provider>
  );
}
