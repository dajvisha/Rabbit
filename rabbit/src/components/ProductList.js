import React, { Component } from 'react';
import Product from './Product';

class ProductList extends Component {
    handleProductUpVote(productId) {
        console.log(productId + ' was upvoted');
    }

    render() {
        const products = this.props.products.sort((a, b) => (b.votes - a.votes));

        const productComponents = products.map((product) => (
            <Product
                key={'product-' + product.id}
                id={product.id}
                title={product.title}
                description={product.description}
                url={product.url}
                votes={product.votes}
                submitterAvatarUrl={product.submitterAvatarUrl}
                productImageUrl={product.productImageUrl}
                onVote={this.handleProductUpVote}
            />
        ));

        return (
            <div className='ui unstackable items'>
                {productComponents}
            </div>
        )
    }
}

export default ProductList;
