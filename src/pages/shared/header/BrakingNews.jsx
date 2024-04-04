import Marquee from "react-fast-marquee";

const BrakingNews = () => {
    return (
        <div className="p-4 bg-slate-400 flex gap-4">
            <button className="btn-secondary btn">Latest</button>
            <Marquee pauseOnHover={true}><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p></Marquee>
        </div>
    );
};

export default BrakingNews;