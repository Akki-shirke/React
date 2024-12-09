import { data } from 'autoprefixer';
import React, { Component } from 'react';
import { FaFileAlt } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { LuDownload } from "react-icons/lu";
function Card({ data }) {
    return (

        <div className=' relative w-48 h-60 rounded-[40px] py-10 px-5 text-white bg-zinc-900/90 overflow-hidden'>
            <FaFileAlt />
            <p className='text-xs leading-tight mt-7 font-semibold '>{data.decs}</p>
            <div className='footer absolute bottom-0 w-full left-0 '>
                <div className='flex item-center justify-between mb-5 px-5' >
                    <h5 className='text-sm font-semibold'>{data.filesize}</h5>
                    <span className='w-5 h-5 py-1 bg-zinc-600 rounded-full flex item-center justify-center'>
                        {data.close ? <IoMdClose /> :
                            <LuDownload size=".7em" color='fff' />}
                    </span>
                </div>

                {data.tag.isOpen && (
                    <div className={`tag w-full py-4 ${data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"} flex items-center justify-center`}>
                        <h3 className='text-sm font-semibold '>{data.tag.tagTitle}</h3>
                    </div>
                )}
            </div>
        </div >



    );
}

export default Card;
