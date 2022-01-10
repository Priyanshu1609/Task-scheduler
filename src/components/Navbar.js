import React from 'react'
import { BiCalendar } from 'react-icons/bi'

const Navbar = () => {
    return (

        <div className="bg-white shadow">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between py-4">
                    <div>
                        <BiCalendar className="h-10 w-10 inline-block text-red-400 align-top" />
                    </div>

                    <h2 className="hidden md:inline-block text-3xl hover:text-red-600"> Your appintments </h2>

                    <div className="flex items-center">
                        <a href="#" className="text-gray-800 text-sm font-semibold hover:text-red-600 mr-4">Sign in</a>
                        <a href="#" className="text-gray-800 text-sm font-semibold border px-4 py-2 rounded-lg hover:text-red-600 hover:border-red-600">Sign up</a>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Navbar
