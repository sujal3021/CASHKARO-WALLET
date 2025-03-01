import React from 'react';

export const Appbar = () => {
    return (
        <div className="shadow-lg h-16 flex justify-between items-center bg-gradient-to-r from-blue-500 to-blue-900 text-white">
            <div className="flex flex-col justify-center h-full ml-4 text-2xl font-bold">
                CashKaro Wallet
            </div>
            <div className="flex items-center mr-4">
                <div className="flex flex-col justify-center h-full mr-4 text-lg">
                    Hello, User!
                </div>
                <div className="rounded-full h-12 w-12 bg-white flex justify-center items-center text-blue-600 text-xl font-bold shadow-md hover:shadow-lg transition-shadow duration-300">
                    U
                </div>
            </div>
        </div>
    );
}