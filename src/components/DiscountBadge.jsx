import React from "react";

const DiscountBadge = () => {
    return (
        <div className='relative'>
            <div
                className={`py-1 px-2 w-6/12 h-10 absolute text-white text-3xl  tracking-wide bg-gradient-to-r from-[rgba(242,125,0,1)] to-[rgba(255,160,59,1)] rounded-l-lg rounded-bl-none z-50 top-4 -left-[9.5px]'
                `}
            >
                200
            </div>
            <div
                className={`w-2.5 h-10 absolute bg-gradient-to-r from-[rgba(247,177,102,1)] to-[rgba(214,111,0,1)] bg-clip-triangle z-[48] opacity-80 top-[56px] -left-2.5'
                `}
            />
            <div className="h-10 w-8 absolute left-[210px] top-4">
                <div className="absolute  left-0 z-40">
                    <div
                        className="w-[28px] h-[35px] bg-gray-700 bg-transparent rounded-tr-lg overflow-hidden relative"
                    >
                        <div className="border-b-[35px] border-b-transparent border-l-[35px] border-l-[rgba(247,177,102,1)]"></div>
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 z-30">
                    <div
                        className="w-[28px] h-[35px] bg-gray-700 bg-transparent rounded-br-lg overflow-hidden relative"
                    >
                        <div className="border-t-[35px] border-t-transparent border-l-[35px] border-l-[rgba(214,111,0,1)]"></div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default DiscountBadge;
