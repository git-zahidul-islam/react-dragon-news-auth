import { FaBookmark, FaEye } from "react-icons/fa";
import { CiShare2 } from "react-icons/ci";

const HomeNewsCard = ({news}) => {
    const { image_url, title, author } = news
    return (
        <div className="border-2 mb-5">
            <div className="flex justify-between items-center bg-slate-300 p-2 mb-2">
                <div className="flex gap-4 items-center">
                    <img className="w-9 h-9 rounded-full" src={author.img} alt="nai" />
                    <div>
                        <p>{author.name}</p>
                        <p>{author.published_date}</p>
                    </div>
                </div>
                <div className="flex gap-2">
                    <FaBookmark></FaBookmark>
                    <CiShare2></CiShare2>
                </div>
            </div>
            <div className="px-2">
                <h1>{title}</h1>
                <img src={image_url} alt="dynamic" />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, natus?</p>
                <p className="text-yellow-300">Read more</p>
                <hr />
                <div className="flex justify-between items-center py-3">
                    <div className="flex gap-2 items-center">
                        <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        </div>
                        <span>4.9</span>
                    </div>
                    <div className="flex gap-2 items-center">
                        <FaEye></FaEye>
                        <span>499</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeNewsCard;