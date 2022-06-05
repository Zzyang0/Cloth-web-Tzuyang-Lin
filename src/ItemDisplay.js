import React from 'react';

export default function ItemList (item) {
    const elemArray = item.map((anItem) => {
        return (
            <div className="cloth">
                <img src={anItem.img} alt={anItem.imgd} />
                <h1>{anItem.brand}</h1>
                <h2>{anItem.description}</h2>
                <p>{"$" + anItem.price}</p >
                <button className="save-to-closet" type="button"> SAVE TO CLOSET </button>
            </div>
        )
    })

    return (
        <div className='display-item'>
            {elemArray}
        </div>
    )
}
