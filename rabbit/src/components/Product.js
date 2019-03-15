import React, { Component } from 'react';
import './../styles/product.css';

class Product extends Component {
    constructor(props) {
        super(props);

        this.handleUpVote = this.handleUpVote.bind(this);
    }

    handleUpVote() {
        this.props.onVote(this.props.id);
    }

    render() {
        return (
            <div className='product-card'>
                <div className='product-card-image'>
                    <img
                        className='product-image'
                        alt='Product'
                        src={this.props.productImageUrl}
                    />
                </div>
                <div className='product-card-description'>
                    <div className='product-name'>
                        <a href={this.props.url}>
                            {this.props.title}
                        </a>
                    </div>
                    <div className='product-description'>
                        <p>
                            {this.props.description}
                        </p>
                    </div>
                </div>
                <div className='product-card-votes'>
                    <div>
                        <a onClick={this.handleUpVote}>
                            <i className="fas fa-carrot vote-icon"></i>
                        </a>
                    </div>
                    <div>
                        {this.props.votes}
                    </div>
                </div>
            </div>
        );
    }
}

export default Product;
