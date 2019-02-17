import React, { Component } from 'react';
import data from './seeds/data';
import ProductList from './components/ProductList';

class App extends Component {
  render() {
    return (
      <ProductList products={data.products}/>
    );
  }
}

export default App;
