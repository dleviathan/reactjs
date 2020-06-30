import React from "react";
import {Coin} from "../../models/coin";
import {useEffect, useState} from "react";
import axios from 'axios';
import proxy from 'http-proxy-middleware'
import {getData} from "../../services/connect-services";

export function ListCoin() {
    const [listCoin, setListCoin] = useState<Coin[]|null>(null)

    useEffect(() => {
        (async () => {
            try {
                const data = await axios.get('https://web-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?convert=USD,BTC&cryptocurrency_type=all&limit=100&sort=symbol&sort_dir=desc&start=1', { : true });
                console.log(data);
            } catch (e) {
                // console.log(e);
            }
        })()
    }, []);

    return (
        <div className="container">
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Logo</th>
                        <th>Name</th>
                        <th>Slug</th>
                        <th>Volume</th>
                    </tr>
                </thead>
                <tbody>

                </tbody>
            </table>
        </div>
    );
}