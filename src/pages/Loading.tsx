import React from 'react';

const Loading = () => {
    return (
        <div className="flex justify-center items-center h-screen bg-white">
            {/* Spinner */}
            <div className="relative flex items-center justify-center">
                <div className="animate-spin rounded-full border-t-4 border-green-500 border-solid w-16 h-16 mb-4"></div>
                {/* Text Below Spinner */}
                <div className="absolute text-2xl font-bold text-green-500 letter-spacing-[0.1em]">
                    ENUG LAND AGENT
                </div>
            </div>
        </div>
    );
};

export default Loading;
