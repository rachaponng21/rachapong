"use client";
import axios from "axios";
import { useEffect, useState } from "react";

function NewsPage() {
    const [news, setNews] = useState([]);

    useEffect(() => {
        function fetchNews() {
            axios.get('https://newsdata.io/api/1/latest?apikey=pub_5281385ba9e64182517f03918881c22ab1bf1&language=th').then((res) => {
                console.log(res)
                setNews(res.data.results);
            })
        }
        fetchNews();

    }, [])

    return <div>
        <h1 className="text-3xl text-center my-5">รายการข่าวไทย</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
            {news.map((item) => {
                return (
                <div key={item.article_id} className="bg-green-300 w-full rounded-xl p-2">
                    <h2 className="text-center text-2xl">{item.title}</h2>
                    <div className="flex justify-center mt-2">
                        <a href={item.link} target="_blank">
                            <img src={item.image_url} alt="item.title" />
                        </a>
                    </div>
                    <div className="text-center mt-2">
                        <a href={item.link} target="_blank" className="text-sky-300 underline text-sm">
                            อ่านต่อ
                        </a>
                    </div>
                </div>
                );
            })}
        </div>
    </div>;

}

export default NewsPage;