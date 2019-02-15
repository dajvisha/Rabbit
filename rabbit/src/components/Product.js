import React, { Component } from 'react';
import productAqua from './../images/products/image-aqua.png';
import avatarDaniel from './../images/avatars/daniel.jpg';

class Product extends Component {
    render() {
        return(
            <div className='item'>
                <div className='image'>
                    <img src={productAqua} />
                </div>
                <div className='middle aligned content'>
                    <div className='description'>
                        <a>Fort Knight</a>
                        <p>Authentic renaissance actors, delivered in just two weeks.</p>
                    </div>
                    <div className='extra'>
                        <span>Submitted by: </span>
                        <img
                            className='ui avatar image'
                            src={avatarDaniel}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default Product;
