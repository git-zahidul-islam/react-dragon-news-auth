import { useEffect, useState } from "react";
import HomeNewsCard from "./HomeNewsCard";

const HomeNews = () => {
    const [news, setNews] = useState([]);
    useEffect(() => {
        fetch('news.json')
            .then(res => res.json())
            .then(data => setNews(data))
    }, [])

    return (
        <div>
            <h1 className="text-xl font-medium">Dragon News Home</h1>
            
                {
                    news.map(card => <HomeNewsCard key={card._id} card={card}></HomeNewsCard>)
                }
            
        </div>
    );
};

export default HomeNews;