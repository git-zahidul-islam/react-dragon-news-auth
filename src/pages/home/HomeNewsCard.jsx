import { FaBookmark, FaEye } from "react-icons/fa";
import { CiShare2 } from "react-icons/ci";
import { Link } from "react-router-dom";

const HomeNewsCard = ({ news }) => {
    const { image_url, title, author, details,_id } = news
    const { published_date, name } = author


    return (
        <div className="border-2 mb-5">
            <div className="flex justify-between items-center bg-slate-300 p-2 mb-2">
                <div className="flex gap-4 items-center">
                    <img className="w-9 h-9 rounded-full" src={author.img} alt="nai" />
                    <div>
                        <p>{name}</p>
                        <p>{published_date}</p>
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
                {
                    details.length > 200 ?
                        <p>{details.slice(0, 199)} <Link className="text-blue-600" to={`/news/${_id}`}>Read more</Link></p>
                        :
                        <p>{details}</p>
                }
                <hr />
                <div className="flex justify-between items-center py-3">
                    <div className="flex gap-2 items-center">
                        <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked />
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