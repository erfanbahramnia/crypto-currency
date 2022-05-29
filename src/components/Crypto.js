import React from 'react';

const Crypto = ({name, price, image, symbol, marketCap, priceChange}) => {
    return (
        <div>
            <div>
                <img src={image} alt="coin-image" />
                <h2>{name}</h2>
            </div>
            <span>{symbol.toUpperCase()}</span>
            <span>${price}</span>
            <span>{priceChange}%</span>
            <span>{marketCap}</span>
        </div>
    );
};

export default Crypto;