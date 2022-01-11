import React, { useState } from 'react'
import { BiCalendarPlus } from 'react-icons/bi';

const Modal = ({ onSendAppointment, lastId }) => {

    const clearData = {};
    const [formData, setFormData] = useState(clearData);
    const [toggleForm, setToggleForm] = useState(false);
    const formDataPublish = () => {
        const appointmentInfo = {
            id: lastId + 1,
            appointmentName: formData.appointmentName,
            Name: formData.Name,
            aptDate: formData.aptDate + " " + formData.aptTime,
            aptNotes: formData.aptNotes,
        };
        onSendAppointment(appointmentInfo);
        setFormData(clearData);
        setToggleForm(!toggleForm);
    };


    return (
        <div>
            {!toggleForm &&
                <div className="w-full flex  justify-center p-4 ">
                    <button
                        className="shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-500 bg-red-400 text-white px-2 py-3 max-w-lg text-left rounded-lg"
                        onClick={() => {
                            setToggleForm(!toggleForm);
                        }}
                    >
                        <div>
                            <BiCalendarPlus className="inline-block align-text-top" /> Add
                            Appointment
                        </div>
                    </button>
                </div>
            }

            {toggleForm && <div className="flex items-center justify-center fixed left-0 bottom-0 w-full h-full backdrop-blur-sm  z-50 shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-500 ">

                <form  className="border-r-2 border-b-2 border-l-2 border-light-red-500 rounded-b-md pl-4 pr-4 pb-4 bg-red-200" method='POST'>
                    <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
                        <label
                            htmlFor="appointmentName"
                            className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                        >
                            Appointment Name
                        </label>
                        <div className="mt-1 sm:mt-0 sm:col-span-2">
                            <input
                                onChange={(e) => {
                                    setFormData({ ...formData, appointmentName: e.target.value });
                                }}
                                type="text"
                                required
                                name="appointmentName"
                                id="appointmentName"
                                className="max-w-lg block w-full shadow-sm  sm:max-w-xs sm:text-sm  rounded-md py-1 px-1 focus:outline-none"
                            />
                        </div>
                    </div>

                    <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
                        <label
                            htmlFor="Name"
                            className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                        >
                             Name
                        </label>
                        <div className="mt-1 sm:mt-0 sm:col-span-2">
                            <input
                                onChange={(e) => {
                                    setFormData({ ...formData, Name: e.target.value });
                                }}
                                value={formData.Name}
                                required
                                type="text"
                                name="Name"
                                id="Name"
                                className="max-w-lg block w-full shadow-sm  sm:max-w-xs sm:text-sm  rounded-md py-1 px-1 focus:outline-none"
                            />
                        </div>
                    </div>

                    <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
                        <label
                            htmlFor="aptDate"
                            className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                        >
                            Apt Date
                        </label>
                        <div className="mt-1 sm:mt-0 sm:col-span-2">
                            <input
                                onChange={(e) => {
                                    setFormData({ ...formData, aptDate: e.target.value });
                                }}
                                value={formData.aptDate}
                                type="date"
                                name="aptDate"
                                id="aptDate"
                                required
                                className="max-w-lg block w-full shadow-sm  sm:max-w-xs sm:text-sm py-1 px-1 focus:outline-none rounded-md"
                            />
                        </div>
                    </div>

                    <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
                        <label
                            htmlFor="aptTime"
                            className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                        >
                            Apt Time
                        </label>
                        <div className="mt-1 sm:mt-0 sm:col-span-2">
                            <input
                                onChange={(e) => {
                                    setFormData({ ...formData, aptTime: e.target.value });
                                }}
                                value={formData.aptTime}
                                type="time"
                                name="aptTime"
                                id="aptTime"
                                required
                                className="max-w-lg block w-full shadow-sm py-1 px-1 focus:outline-none sm:max-w-xs sm:text-sm  rounded-md"
                            />
                        </div>
                    </div>

                    <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
                        <label
                            htmlFor="aptNotes"
                            className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                        >
                            Appointment Notes
                        </label>
                        <div className="mt-1 sm:mt-0 sm:col-span-2">
                            <textarea
                                onChange={(e) => {
                                    setFormData({ ...formData, aptNotes: e.target.value });
                                }}
                                value={formData.aptNotes}
                                id="aptNotes"
                                name="aptNotes"
                                rows="3"
                                required
                                className="shadow-sm py-1 px-1 focus:outline-none mt-1 block w-full sm:text-sm  rounded-md"
                                placeholder="Detailed comments about the condition"
                            ></textarea>
                        </div>
                    </div>

                    <div className="pt-5">

                        <div className="flex justify-between">
                            <div className="transform hover:scale-150 transition duration-500" onClick={() => {setToggleForm(!toggleForm)}}>
                                <svg

                                    xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-red-900 hover:text-red-500 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </div>
                            <button
                                onClick={formDataPublish}
                                type="submit"
                                className="ml-3 transform hover:scale-105 transition duration-500 py-2 px-4  shadow-sm text-sm font-medium rounded-md text-white bg-red-400 hover:bg-red-700 "
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </form>
            </div>}
        </div>
    )
}

export default Modal
