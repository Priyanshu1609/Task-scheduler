import React, { useState } from 'react'
import { auth } from './Firebase'
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";


const Signin = () => {

    const [user, setUser] = useState(false);

    auth.onAuthStateChanged(user => {
        setUser(!user)
    });

    const provider = new GoogleAuthProvider();
    const handleSignin = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
            }).catch((error) => {
                console.error(error)
                // ...
            });
    }

    return (
        <div className={`${user ? '' : 'hidden'} w-full h-screen fixed  left-0 top-0 flex justify-center items-center  z-50  bg-red-100`}>

            <div className=" w-3/4  max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-white ">

                <div className="text-center p-5 flex-auto justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 flex items-center text-red-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                    </svg>
                    <h3 className="text-xl font-bold py-4 ">Please login to continue</h3>

                </div>
                <div className="p-3  mt-2 text-center space-x-4 md:block">
                    <button onClick={handleSignin} className="mb-2 md:mb-0 bg-red-500 border border-red-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-red-600">SingIn</button>
                </div>

            </div>
        </div>
    )
}

export default Signin
