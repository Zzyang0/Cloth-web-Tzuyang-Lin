import React, { useState } from 'react';
import { Additem } from './MyCloset';

const data = [
    { "img": "https://img.ssensemedia.com/images/b_white,c_lpad,g_center,h_1412,w_940/c_scale,h_960/f_auto,dpr_2.0/222116M212008_1/norse-projects-off-white-leif-polo.jpg","brand": "Leif Polo", "des": "Off-White Leif Polo", "price": 191, "imgd": "Image of Off-White"},
    { "img": "https://img.ssensemedia.com/images/b_white,c_lpad,g_center,h_1412,w_940/c_scale,h_960/f_auto,dpr_2.0/221161M193018_1/essentials-gray-cotton-shorts.jpg", "brand": "Essentials", "des": "Gray Cotton Shorts", "price": 45, "imgd": "Image of Gray Cotton Shorts"},
    { "img": "https://img.ssensemedia.com/images/b_white,c_lpad,g_center,h_1412,w_940/c_scale,h_960/f_auto,dpr_2.0/221129M172016_1/acne-studios-transparent-clear-print-tote.jpg", "brand": "Acne Studios", "des": "Crocs Classic Clog Pizzaslime", "price": 549, "imgd": "Image of Transparent Clear Print Tote"},
    { "img": "https://images.stockx.com/images/New-Balance-550-White-Grey-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1613670436", "brand": "New Balance", "des": "New Balance 550 White Grey", "price": 550, "imgd": "Image of New Balance"},
    { "img": "https://img.ssensemedia.com/images/b_white,c_lpad,g_center,h_1412,w_940/c_scale,h_960/f_auto,dpr_2.0/221188F023010_1/mm6-maison-margiela-silver-6-logo-necklace.jpg", "brand": "MM6 Maison Margiela", "des": "Silver 6 Logo Necklace", "price": 250, "imgd": " Image of Silver 6 Logo Necklace"}
]






function Itemlist(props) {
    const [outfitsaved, setoutfitsaved] = useState(false);
    const item = props.dataset;
    const currentUser = props.currentUser;

    const datatransfom = {"des":item.imgd, "img":item.img, "price":item.price};
    const handleoufitsave = (event) => {
        event.preventDefault();
        Additem(datatransfom, currentUser);
        setoutfitsaved(true);
    }

    return (
        <div className="cloth">
            <img src={item.img} alt={item.imgd} />
            <h1>{item.brand}</h1>
            <h2>{item.des}</h2>
            <p>{item.price}</p>
            {outfitsaved &&
                <button className="save-to-closet" type="button" > SAVED </button>
            }
            {!outfitsaved &&
                <button className="save-to-closet" type="button" onClick={handleoufitsave} > SAVE TO CLOSET </button>
            }
        </div>
    )
}

export function Result(props) { 
    const currentUser = props.currentUser;
    const items = data.map((item) => {
        return <Itemlist dataset={item} currentUser={currentUser} key={item.img} />
    })


    return (
        <div className="containerg">
            {items}
        </div>
    )
}
