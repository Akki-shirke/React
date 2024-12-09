import { data } from 'autoprefixer';
import React, { Component } from 'react';
import { FaFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
function Card() {
    return (

        <div className=' relative w-48 h-60 rounded-[40px] py-10 px-5 text-white bg-zinc-900/90 overflow-hidden'>
            <FaFileAlt />
            <p className='text-xs leading-tight mt-7 font-semibold '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, perferendis . </p>
            <div className='footer absolute bottom-0 w-full left-0 '>
                <div className='flex item-center justify-between mb-2 px-5' >
                    <h5 className='text-sm font-semibold'>.4mb</h5>
                    <span className='w-5 h-5 py-1 bg-zinc-600 rounded-full flex item-center justify-center'>
                        <LuDownload size=".7em" color='fff' />
                    </span>
                </div>
                <div className='tag h-9 w-full bg-green-600 flex justify-center items-center'>
                    <h3 className='text-sm font-semibold '>Download</h3>
                </div>

            </div>
        </div>



    );
}

export default Card;
