import React, { Component } from 'react';
import Product from './Product';

class ProductList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            products: []
        };
    }

    componentDidMount() {
        this.setState({products: this.props.products});
    }

    handleProductUpVote(productId) {
        console.log(productId + ' was upvoted');
    }

    render() {
        const products = this.state.products.sort((a, b) => (b.votes - a.votes));

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
