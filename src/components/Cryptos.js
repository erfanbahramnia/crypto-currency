import React, {useState, useEffect} from 'react';

// crypto api
import { api } from '../service/api';
// component
import Crypto from "./Crypto";
// css module style
import styles from "./Cryptos.module.css";

const Cryptos = () => {
    // value of input
    const [search, setSearch] = useState("");
    // saving the data of api
    const [data, setData] = useState([]);
    // filter the data based on search
    const [filterData, setFilter] = useState([])

    // get data from api at mounting
    useEffect(() => {
        const getData = async () => {
            setData(await api())
        }

        getData();
    }, []);

    // filter data in base of search 
    useEffect(() => {
        const filtered = data.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
        setFilter(filtered)
    }, [search, data])

    // for handle the search input
    const searchHandler = event => {
        setSearch(event.target.value);
    };


    return (
        <div className={styles.container}>
            <div className={styles.search}>
                <input type="text" value={search} onChange={searchHandler} placeholder="Search..." />
            </div>
            <div style={{"border": "solid 1px silver","borderRadius": "5px"}}>
                {
                    filterData.map(coin => <Crypto
                        key={coin.id}
                        name={coin.name}
                        image={coin.image}                      
                        price={coin.current_price}
                        symbol={coin.symbol}
                        marketCap={coin.market_cap}
                        priceChange={coin.price_change_percentage_24h}
                    />)
                }
            </div>
        </div>
    );
};

export default Cryptos;