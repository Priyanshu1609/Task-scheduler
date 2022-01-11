import React from 'react'

import { BiSearch, BiCaretDown, BiCheck } from "react-icons/bi";
import { useState } from "react";
const DropDown = ({
    toggle,
    sortBy,
    onSortByChange,
    orderBy,
    onOrderByChange,
}) => {
    if (!toggle) {
        return null;
    }
    return (
        <div className=" mt-2 max-w-5xl rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 overflow-auto">
            <div
                className="py-1"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu"
            >
                <div
                    onClick={() => {
                        onSortByChange("Name");
                    }}
                    className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer"
                    role="menuitem"
                >
                    Name {sortBy === "Name" ? <BiCheck /> : null}
                </div>
                <div
                    onClick={() => {
                        onSortByChange("appointmentName");
                    }}
                    className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer"
                    role="menuitem"
                >
                    Appointment Name {sortBy === "appointmentName" ? <BiCheck /> : null}
                </div>
                <div
                    onClick={() => {
                        onSortByChange("aptDate");
                    }}
                    className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer"
                    role="menuitem"
                >
                    Date {sortBy === "aptDate" ? <BiCheck /> : null}
                </div>
                <div
                    onClick={() => {
                        onOrderByChange("asc");
                    }}
                    className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer border-gray-1 border-t-2"
                    role="menuitem"
                >
                    Asc {orderBy === "asc" ? <BiCheck /> : null}
                </div>
                <div
                    onClick={() => {
                        onOrderByChange("desc");
                    }}
                    className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer"
                    role="menuitem"
                >
                    Desc {orderBy === "desc" ? <BiCheck /> : null}
                </div>
            </div>
        </div>
    );
};

const SeachBar = ({
    query,
    onQueryChange,
    sortBy,
    onSortByChange,
    orderBy,
    onOrderByChange,
}) => {

    const [toggleSort, setToggleSort] = useState(false);

    return (
        <div className="mx-auto max-w-3xl my-4">
            <div className="flex flex-col md:flex-row items-center justify-between p-6 space-x-6 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-500">
                <div className="flex bg-gray-100 p-4 w-72 space-x-4 rounded-lg ">
                    <BiSearch className="h-6 w-6 opacity-30">   </BiSearch>
                    <input className="bg-gray-100 outline-none" type="text" onChange={(e) => {
                        onQueryChange(e.target.value);
                    }}
                        name="query"
                        id="query"
                        value={query} />
                </div>
                <div>
                    <div
                        onClick={() => {
                            setToggleSort(!toggleSort);
                        }}
                        type="button"
                        className="flex py-3 px-4 rounded-lg text-gray-500 font-semibold cursor-pointer"
                        id="options-menu"
                        aria-haspopup="true"
                        aria-expanded="true"
                    >
                        Sort By <BiCaretDown className="ml-2" />
                    </div>
                    <DropDown
                        toggle={toggleSort}
                        sortBy={sortBy}
                        orderBy={orderBy}
                        onSortByChange={(mysort) => {
                            onSortByChange(mysort);
                        }}
                        onOrderByChange={(mysort) => {
                            onOrderByChange(mysort);
                        }}
                    />
                </div>

            </div>
        </div>

    )
}

export default SeachBar
