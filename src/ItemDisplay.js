import React, { useState } from 'react';
import { Additem } from './MyCloset';

function ItemShow(props) {
    const currentUser = props.currentUser;
    let need = props.intake;
    const [outfitsaved, setoutfitsaved] = useState(false);
    let infoArray = need[Object.keys(need)[0]];
    let imgLink;
    let imgDes;
    let brand;
    let des;
    let price;
    infoArray.forEach(function(info) {
        if (Object.keys(info).includes('brand')) {
            brand = info['brand'][0];
        } else if (Object.keys(info).includes('description')) {
            des = info['description'][0];
        } else if (Object.keys(info).includes('img')) {
            imgLink = info['img'][0];
        } else if (Object.keys(info).includes('imgDescription')) {
            imgDes = info['imgDescription'][0];
        } else if (Object.keys(info).includes('price')) {
            price = info['price'][0];
        }
    });

    const datatransfom = {"des":des, "img": imgLink, "price":price};
    const handleoufitsave = (event) => {
        event.preventDefault();
        console.log(datatransfom);
        Additem(datatransfom, currentUser);
        setoutfitsaved(true);
    }
    return (    
        <div className="cloth">
            <img src={imgLink} alt={imgDes} />
            <h1>{brand}</h1>
            <h2>{des}</h2>
            <p>{"$" + price}</p >
            {outfitsaved &&
                <button className="save-to-closet" type="button" > SAVED </button>
            }
            {!outfitsaved &&
                <button className="save-to-closet" type="button" onClick={handleoufitsave} > SAVE TO CLOSET </button>
            }
        </div>
    )
}

export default function ItemDisplay (item) {
    const database = item.item;
    const currentUser = item.currentUser;
    let totalArray = [];
    let elemArray;
    let itemArray;
    for (let i = 0; i < database.length; i++) { // should be 5 for 5 categories
        let categoryObject = database[i];
        let category = Object.keys(categoryObject);
        itemArray = categoryObject[category[0]];
        itemArray.forEach(function(item) {
            totalArray.push(item);
        });
    }
    elemArray = totalArray?.map((anItem) => {
        return <ItemShow intake={anItem} currentUser={currentUser} />
    });
    return (
        <div className='generated-cloth'>
            {elemArray}
        </div>
    );
}