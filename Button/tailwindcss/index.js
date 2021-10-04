import React from 'react'

const Button =
    ({
        text,
        onClick = () => {},
        fullWidth = false,
        twTextColor = "text-white",
        twBgColor = "bg-gray-800",
        twBgHoverColor = "hover:bg-gray-900"
    }) => text ? (
                <button
                    onClick={onClick}
                    className={`${
                        fullWidth ? "w-full" : "w-auto"
                    } px-10 py-2 font-bold ${twTextColor} transition-colors ${twBgColor} rounded-md ${twBgHoverColor}`}
                >
                    {text}
                </button>
            ) : (
                <></>
            );

export default Button