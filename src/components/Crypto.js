import React from 'react';

import styles from "./Crypto.module.css"

const Crypto = ({name, price, image, symbol, marketCap, priceChange}) => {
    return (
        <div className={styles.container}>
            <div className={styles.nameImage}>
                <img src={image} alt="coin-image" className={styles.image} />
                <h2 className={styles.name}>{name}</h2>
            </div>
            <span className={styles.symbol}>{symbol.toUpperCase()}</span>
            <span className={styles.price}>${price}</span>
            <span className={priceChange > 0 ? styles.priceChangePos : styles.priceChangeNeg}>{priceChange.toFixed(2)}%</span>
            <span className={styles.market}>${marketCap.toLocaleString()}</span>
        </div>
    );
};

export default Crypto;