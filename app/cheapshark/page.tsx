"use client";
import axios from "axios";
import { useEffect, useState } from "react";

function GameDealsPage() {
    const [deals, setDeals] = useState([]);

    useEffect(() => {
        function fetchDeals() {
            axios.get('https://www.cheapshark.com/api/1.0/deals').then((res) => {
                console.log(res)
                setDeals(res.data);
            })
        }
        fetchDeals();

    }, [])

    return <div>
        <h1 className="text-3xl text-center my-5">รายการเกมลดราคา</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
            {deals.map((item) => {
                return (
                <div key={item.dealID} className="bg-gray-500 w-full rounded-xl p-2">
                    <h2 className="text-center text-xl h-14 overflow-hidden">{item.title}</h2>
                    <div className="flex justify-center mt-2">
                        <a href={`https://www.cheapshark.com/redirect?dealID=${item.dealID}`} target="_blank">
                            <img src={item.thumb} alt="item.title" />
                        </a>
                    </div>
                    <div className="text-center mt-2">
                        <p className="font-bold text-red-500">Sale: ${item.salePrice}</p>
                        <p className="text-sm line-through">Normal: ${item.normalPrice}</p>
                        <p className="text-sm font-semibold text-green-500">
                            ลดไป {Math.round(item.savings)}%
                        </p>
                        <a href={`https://www.cheapshark.com/redirect?dealID=${item.dealID}`} target="_blank" className="text-blue-700 underline text-sm">
                            Buy!
                        </a>
                    </div>
                </div>
                );
            })}
        </div>
    </div>;

}

export default GameDealsPage;