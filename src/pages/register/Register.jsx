import Navbar from "../shared/navbar/Navbar";

const Register = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="flex justify-center items-center h-[calc(100vh-68px)]">
                <div className="w-full max-w-md p-8 space-y-3 bg-gray-200">
                    <h1 className="text-2xl font-bold text-center">Registration Page</h1>
                    <hr className="border-[1px] border-white" />
                    <form noValidate="" action="" className="space-y-6 px-3">
                        <div className="space-y-1 text-sm">
                            <label htmlFor="username" className="block text-gray-400">Name</label>
                            <input type="text" name="name" id="name" placeholder="Name" className="w-full px-4 py-3 rounded-md focus:border-violet-400 bg-white" />
                        </div>
                        <div className="space-y-1 text-sm">
                            <label htmlFor="username" className="block text-gray-400">Photo url</label>
                            <input type="text" name="photo_url" id="photo_url" placeholder="input photo url" className="w-full px-4 py-3 rounded-md focus:border-violet-400 bg-white" />
                        </div>
                        <div className="space-y-1 text-sm">
                            <label htmlFor="username" className="block text-gray-400">Email</label>
                            <input type="email" name="email" id="email" placeholder="email" className="w-full px-4 py-3 rounded-md focus:border-violet-400 bg-white" />
                        </div>
                        <div className="space-y-1 text-sm">
                            <label htmlFor="password" className="block text-gray-400">Password</label>
                            <input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md  focus:border-violet-400 bg-white" />
                            <div className="flex gap-2 items-center">
                                <input type="checkbox" name="check" id="check" />
                                <p>Accept Term & condition</p>
                            </div>
                        </div>

                        <button className="block w-full p-3 text-center rounded-sm text-gray-900 bg-violet-400">Register</button>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Register;