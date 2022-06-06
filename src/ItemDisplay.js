import React from 'react';

function ItemShow(props) {
    let need = props.intake;
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
    return (
        <div className="cloth">
            < img src={imgLink} alt={imgDes} />
            <h1>{brand}</h1>
            <h2>{des}</h2>
            <p>{"$" + price}</p >
            <button className="save-to-closet" type="button"> SAVE TO CLOSET </button>
        </div>
    )
}

export default function ItemDisplay (item) {
    const database = item.item;
    let totalArray = [];
    let elemArray;
    let itemArray;
    for (let i = 0; i < database.length; i++) { // should be 4 for 4 categories
        let categoryObject = database[i];
        let category = Object.keys(categoryObject);
        itemArray = categoryObject[category[0]];
        itemArray.forEach(function(item) {
            totalArray.push(item);
        });
    }
    console.log(totalArray);
    console.log(totalArray.length);
    elemArray = totalArray?.map((anItem) => {
        return <ItemShow intake={anItem}/>
    });
    return (
        <div className='generated-cloth'>
            {elemArray}
        </div>
    );
}
