import { FaBookmark, FaEye } from "react-icons/fa";
import { CiShare2 } from "react-icons/ci";

const HomeNewsCard = ({card}) => {
    // console.log(card)
    return (
        <div>
            <div className="flex">
                <div className="flex gap-4">
                    <img src="" alt="nai" />
                    <div>
                        <p>name</p>
                        <p>date</p>
                    </div>
                </div>
                <div className="flex gap-2">
                    <FaBookmark></FaBookmark>
                    <CiShare2></CiShare2>
                </div>
            </div>
            <h1>Title dy</h1>
            <img src="" alt="dynamic" />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, natus?</p>
            <p className="text-yellow-300">Read more</p>
            <hr />
            <div>
                <div className="flex gap-2">
                    <div className="rating">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    </div>
                    <span>4.9</span>
                </div>
                <div className="flex gap-2">
                    <FaEye></FaEye>
                    <span>499</span>
                </div>
            </div>
        </div>
    );
};

export default HomeNewsCard;