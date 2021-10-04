import React from "react";

const Switch = ({ checked = false, onChange = () => {}, label = null }) => (
    <div
        className="flex items-center justify-center w-full mb-12"
        onChange={onChange}
    >
        <label for="switch" class="flex items-center cursor-pointer">
            <div className="relative">
                <input
                    type="checkbox"
                    id="switch"
                    className="sr-only"
                    checked={checked}
                />
                <div
                    className={`block ${
                        checked ? "bg-white" : "bg-gray-600"
                    } w-14 h-8 rounded-full border-2 border-gray-600`}
                />
                <div
                    className={`dot absolute ${
                        checked ? "right-1 bg-gray-600" : "left-1  bg-white"
                    } top-1 w-6 h-6 rounded-full transition`}
                />
            </div>
            {label && <div className="ml-3 text-gray-700 font-medium">{label}</div>}
        </label>
    </div>
);

export default Switch