import React from 'react'
import { BiTrash } from "react-icons/bi";
const Card = ({ appointment, onDeleteAppointment }) => {
    return (
        <div className=" p-4">
            <li className="border-gray-400 flex flex-row">
                <div
                    className="select-none flex flex-1 items-center p-4 transition duration-500 ease-in-out transform hover:-translate-y-2 rounded-2xl border-2  hover:shadow-2xl border-red-400"
                >
                    <div className="flex-1 pl-1 mr-16">
                        <div className="font-medium">
                            <span className="flex-none font-medium text-2xl text-red-500">
                                {appointment.Name}
                            </span>
                        </div>
                        <div className="flex-grow">
                            <div>
                                <b className="font-bold text-red-500">Appointment:</b>{" "}
                                {appointment.appointmentName}
                            </div>
                            <div className="leading-tight">{appointment.aptNotes}</div>
                        </div>
                    </div>
                    <div
                        className="w-1/4 text-wrap text-center flex text-white text-bold flex-col rounded-md bg-red-500 justify-center items-center mr-10 p-2"
                    >
                        {appointment.aptDate}
                    </div>
                    <button
                        onClick={() => onDeleteAppointment(appointment.id)}
                        type="button"
                        className="p-1.5 mr-1.5 mt-1 rounded text-white bg-red-500 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                    >
                        <BiTrash />
                    </button>
                </div>
            </li>
        </div>


    )
}

export default Card
