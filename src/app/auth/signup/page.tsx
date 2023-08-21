'use client'

import {handleSignUp} from "@/app/auth/signup/actions";

export default function SignUp() {
    return (
        <div className="relative flex flex-col justify-center h-screen overflow-hidden">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-purple-700">SignUp</h1>
                <form action={handleSignUp} className="space-y-4">
                    <div>
                        <label className="label">
                            <span className="text-base label-text">Username</span>
                        </label>
                        <input type="text" name="username" placeholder="Username" className="w-full input input-bordered input-primary" />
                    </div>
                    <div>
                        <label className="label">
                            <span className="text-base label-text">Email</span>
                        </label>
                        <input type="text" name="email" placeholder="Email Address" className="w-full input input-bordered input-primary" />
                    </div>
                    <div>
                        <label className="label">
                            <span className="text-base label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="Enter Password"
                               className="w-full input input-bordered input-primary" />
                    </div>
                    <div>
                        <label className="label">
                            <span className="text-base label-text">Confirm Password</span>
                        </label>
                        <input type="password" name="confirm-password" placeholder="Confirm Password"
                               className="w-full input input-bordered input-primary" />
                    </div>
                    <div>
                        <button className="btn btn-block btn-primary">Confirm</button>
                    </div>
                    <span>Already have an account ?
                    <a href="#" className="text-blue-600 hover:text-blue-800 hover:underline">Login</a></span>
                </form>
            </div>
        </div>
    )
}