import React, {useState, useEffect} from 'react';

// crypto api
import { api } from '../service/api';

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
        <div>
            <div>
                <input type="text" value={search} onChange={searchHandler} />
            </div>
            <div></div>
        </div>
    );
};

export default Cryptos;