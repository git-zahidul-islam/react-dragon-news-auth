import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import qzome1 from '../../../assets/qZone1.png'
import qzome2 from '../../../assets/qZone2.png'
import qzome3 from '../../../assets/qZone3.png'

const RightSideNav = () => {
    return (
        <div className="space-y-5">
            <div className="space-y-1">
                <h1 className="text-xl font-bold mb-3">Login With</h1>
                <button className="btn btn-outline w-full text-teal-500">
                    <FaGoogle></FaGoogle>
                    Login with Google
                </button>
                <button className="btn btn-outline w-full">
                    <FaGithub></FaGithub>
                    Login With Github
                </button>
            </div>
            <div className="">
                <h1 className="text-xl font-bold mb-3">Find me</h1>
                <a href="" className="flex items-center gap-2 p-4 border-2 rounded-t-lg">
                    <FaFacebook></FaFacebook><span>facebook</span>
                </a>
                <a href="" className="flex items-center gap-2 p-4 border-2 border-t-0">
                    <FaTwitter></FaTwitter><span>Twitter</span>
                </a>
                <a href="" className="flex items-center gap-2 p-4 border-2 border-t-0 rounded-b-lg">
                    <FaInstagram></FaInstagram><span>Instagram</span>
                </a>
            </div>
            <div className="p-3 bg-zinc-300">
                <h1>Q zone</h1>
                <img src={qzome1} alt="" />
                <img src={qzome2} alt="" />
                <img src={qzome3} alt="" />
            </div>
            <div className="bg-slate-400">
                <p className="h-[350px]">ad place this</p>
            </div>
        </div>
    );
};

export default RightSideNav;