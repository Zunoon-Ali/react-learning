import React, { useContext } from 'react';
import { counterContext } from "../context/context";


function Component() {
    const value = useContext(counterContext); // ✅ useContext here

    return (
        <div>
            <div className="text-2xl font-semibold bg-green-500 text-white text-center p-2">
                Component
            </div>
            <div className="flex justify-center items-center mt-2">
                <p className="text-xl">Received from Context:
                    <span className="font-bold text-blue-700"> {value.count}</span>
                </p>
            </div>
        </div>
    );
}

export default Component;
