import React, { useState } from 'react'
import { BiCalendar } from 'react-icons/bi'
import { auth } from './Firebase'
import { signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";



const Navbar = () => {
    const [user, setUser] = useState(false);

    auth.onAuthStateChanged(user => {
        setUser(!user)
    });

    const provider = new GoogleAuthProvider();
    const handleSignin = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;

            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.email;
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
    }
    const handleLogout = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        });
    }
    return (

        <div className="bg-white shadow">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between py-4">
                    <div>
                        <BiCalendar className="h-10 w-10 inline-block text-red-400 align-top" />
                    </div>

                    <h2 className="hidden md:inline-block text-3xl hover:text-red-600"> Your appintments </h2>

                    <div className="flex items-center">
                        {user ? <button onClick={handleSignin} className="text-gray-800 text-sm font-semibold hover:text-red-600 mr-4">Sign in</button>
                            : <button onClick={handleLogout} className="text-gray-800 text-sm font-semibold border px-4 py-2 rounded-lg hover:text-red-600 hover:border-red-600">Logout</button>}
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Navbar
