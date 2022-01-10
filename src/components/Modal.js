import React, { useState } from 'react'
import { BiCalendarPlus } from 'react-icons/bi';

const Modal = ({ onSendAppointment, lastId }) => {

    const clearData = {};
    const [formData, setFormData] = useState(clearData);
    const [toggleForm, setToggleForm] = useState(false);
    const formDataPublish = () => {
        const appointmentInfo = {
            id: lastId + 1,
            ownerName: formData.ownerName,
            petName: formData.petName,
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

                <div className="border-r-2 border-b-2 border-l-2 border-light-red-500 rounded-b-md pl-4 pr-4 pb-4">
                    <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
                        <label
                            htmlFor="ownerName"
                            className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                        >
                            Owner Name
                        </label>
                        <div className="mt-1 sm:mt-0 sm:col-span-2">
                            <input
                                onChange={(e) => {
                                    setFormData({ ...formData, ownerName: e.target.value });
                                }}
                                type="text"
                                name="ownerName"
                                id="ownerName"
                                className="max-w-lg block w-full shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                            />
                        </div>
                    </div>

                    <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
                        <label
                            htmlFor="petName"
                            className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                        >
                            Pet Name
                        </label>
                        <div className="mt-1 sm:mt-0 sm:col-span-2">
                            <input
                                onChange={(e) => {
                                    setFormData({ ...formData, petName: e.target.value });
                                }}
                                value={formData.petName}
                                type="text"
                                name="petName"
                                id="petName"
                                className="max-w-lg block w-full shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
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
                                className="max-w-lg block w-full shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
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
                                className="max-w-lg block w-full shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
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
                                className="shadow-sm focus:ring-yellow-500 focus:border-yellow-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md"
                                placeholder="Detailed comments about the condition"
                            ></textarea>
                        </div>
                    </div>

                    <div className="pt-5">

                        <div className="flex justify-between">
                            <div onClick={() => {setToggleForm(!toggleForm)}}>
                                <svg

                                    xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </div>
                            <button
                                onClick={formDataPublish}
                                type="submit"
                                className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-400 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-400"
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>}
        </div>
    )
}

export default Modal
