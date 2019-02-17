import React, { Component } from 'react';
import Product from './Product';

class ProductList extends Component {
    render() {
        const products = this.props.products.map((product) => (
            <Product
                key={'product-' + product.id}
                id={product.id}
                title={product.title}
                description={product.description}
                url={product.url}
                votes={product.votes}
                submitterAvatarUrl={product.submitterAvatarUrl}
                productImageUrl={product.productImageUrl}
            />
        ));

        return (
            <div className='ui unstackable items'>
                {products}
            </div>
        )
    }
}

export default ProductList;
