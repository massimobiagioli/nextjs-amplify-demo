'use client'

import {handleConfirmSignUp} from "@/app/auth/confirm/actions";

export default function SignUp() {
    return (
        <div className="relative flex flex-col justify-center h-screen overflow-hidden">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-purple-700">Confirm SignUp</h1>
                <form action={handleConfirmSignUp} className="space-y-4">
                    <div>
                        <label className="label">
                            <span className="text-base label-text">Username</span>
                        </label>
                        <input type="text" name="username" placeholder="Username" className="w-full input input-bordered input-primary" />
                    </div>
                    <div>
                        <label className="label">
                            <span className="text-base label-text">Confirmation Code</span>
                        </label>
                        <input type="text" name="code" placeholder="Email Address" className="w-full input input-bordered input-primary" />
                    </div>
                    <div>
                        <button className="btn btn-block btn-primary">Confirm</button>
                    </div>
                </form>
            </div>
        </div>
    )
}