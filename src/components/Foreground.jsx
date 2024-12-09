import React from 'react';
import Card from './Card';

function Foreground() {


    const data = [
        {
            decs: "This is background color of the card that will be displayed.",
            filesize: ".10mb",
            close: false,
            tag: {
                isOpen: true,
                tagTitle: "Download Now",
                tagColor: "green"
            },
        },

        {
            decs: "This is background color of the card that will be displayed.",
            filesize: ".10mb",
            close: true,
            tag: {
                isOpen: true,
                tagTitle: "update",
                tagColor: "blue"
            },
        },

        {
            decs: "This is background color of the card that will be displayed.",
            filesize: ".10mb",
            close: false,
            tag: {
                isOpen: false,
                tagTitle: "Download Now",
                tagColor: "green"
            },
        },

    ];
    return (
        <>
            <div className='fixed top-0 left-0 z-[3] w-full h-full '></div>

            {data.map((item, index) => (
                <Card data={item} />
            ))}
        </>
    );
}

export default Foreground;