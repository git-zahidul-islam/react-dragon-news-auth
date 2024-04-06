import { Link, useNavigate, useLocation } from "react-router-dom";
import Navbar from "../shared/navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const Login = () => {
    const { logIn } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    console.log("login page location",location);

    const handleLogin = (e) => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')
        console.log(email,password)

        logIn(email,password)
        .then(result =>{
            console.log(result.user)
            navigate(location?.state ? location.state : '/')
        })
        .catch(error =>{
            console.error(error);
        })
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="flex justify-center items-center h-[calc(100vh-68px)]">
                <div className="w-full max-w-md p-8 space-y-3 bg-gray-200">
                    <h1 className="text-2xl font-bold text-center">Login</h1>
                    <hr className="border-[1px] border-white" />
                    <form onSubmit={handleLogin} className="space-y-6 px-3">
                        <div className="space-y-1 text-sm">
                            <label htmlFor="username" className="block text-gray-400">Email</label>
                            <input type="email" name="email" id="email" placeholder="email" className="w-full px-4 py-3 rounded-md focus:border-violet-400 bg-white"/>
                        </div>
                        <div className="space-y-1 text-sm">
                            <label htmlFor="password" className="block text-gray-400">Password</label>
                            <input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md  focus:border-violet-400 bg-white"/>
                            <div className="flex justify-end text-xs text-gray-400">
                                <a rel="noopener noreferrer" href="#">Forgot Password?</a>
                            </div>
                        </div>
                        <button className="block w-full p-3 text-center rounded-sm text-gray-900 bg-violet-400">Sign in</button>
                    </form>
                    <p className="text-sm text-center sm:px-6 dark:text-gray-600">Don't have an account?
                        <Link className="text-purple-500" to={'/register'}> Register</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;