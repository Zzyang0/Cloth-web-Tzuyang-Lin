import React, {useEffect, useState} from 'react';
import { Nav, Footer } from "./footer&header";

var currData = [
    {"img":"img/550.png", "brand":"New Balance", "des":"New Balance 550 White Grey", "price":191, "imgd":"image of the shoes", "category": "Shoes"},
    {"img":"img/boots1.png", "brand":"Alexander McQueen", "des":"Alexander McQueen Tread Slick Boot", "price":500, "imgd":"image of the boots", "category": "Shoes"},
    {"img":"img/crocs.png", "brand":"Crocs", "des":"Crocs Classic Clog Pizzaslime", "price":125, "imgd":"image of the crocs", "category": "Shoes"},
    {"img":"img/shoes.png", "brand":"AXEL ARIGATO", "des":"White & Grey Clean 90 Sneakers", "price":225, "imgd":"image of the shoes", "category": "Shoes"}
];

function ItemShow(props) {
    let need = props.intake;
    return (
        <div className="cloth">
            <img src={need.img} alt={need.imgd} />
            <h1>{need.brand}</h1>
            <h2>{need.des}</h2>
            <p>{"$" + need.price}</p>
            <button className="save-to-closet" type="button"> SAVE TO CLOSET </button>
        </div>
    )
}

// # this function takes in an array of object with product information
function FullProduct(props) {
    let products = props.Data3;
    let info = products?.map((single) => {
        return <ItemShow intake={single} key={single.imgd} />
    })

    return (
        <div className="generated-cloth">
            {info}
        </div>
    )

}

function ShoeOnly(props) {
    let base3 = props.products;
    const [want, setWant] = useState(['Shoes']);
    const handleInputChange = (event) => {
        const {value, checked} = event.target;
        const wantCopy = [...want];
        if (checked) {
            wantCopy.push(value);
        } else {
            for (let i = 0; i < wantCopy.length; i ++) {
                if (wantCopy[i] === value) {
                    wantCopy[i] = '';
                }
            }
        }
        setWant(wantCopy);
    }
    const filterCategory = (filteredData) => {
        if (want.length === 0) {
            return filteredData;
        } else {
            let finalItem = [];
            let filterItem = filteredData;
            for (let i = 0; i < want.length; i++) {
                filterItem = filteredData.filter(
                    (item) => item.category === want[i]
                );
                for (let j = 0; j < filterItem.length; j++) {
                    finalItem.push(filterItem[j]);
                }<FullProduct />
            }
            return finalItem;
        }
    }
    
    let currData = filterCategory(base3);
    /*const forceRender = (data) => {
        console.log("I went in");
        return <FullProduct Data3={data}/>
    }*/
    //forceRender(currData);
    console.log(currData);

    return (
        <>
            <div className='generator'>
                <form>
                    <label htmlFor="q1">Which category of items do you want?</label>
                    <div>
                        <input type="checkbox" id="Shoes" name="category" value="Shoes" defaultChecked onChange={handleInputChange}/>
                        <label htmlFor="vehicle1"> Shoes </label>
                        <br></br>
                        <input type="checkbox" id="Clothes" name="category" value="Clothes" onChange={handleInputChange}/>
                        <label htmlFor="vehicle2"> Clothes </label>
                        <br></br>
                        <input type="checkbox" id="Bags" name="category" value="Bags" onChange={handleInputChange}/>
                        <label htmlFor="vehicle3"> Bags </label>
                        <br></br>
                        <input type="checkbox" id="Accessories" name="category" value="Accessories" onChange={handleInputChange}/>
                        <label htmlFor="vehicle3"> Accessories </label>
                        <br></br>
                    </div>
                    <label htmlFor="q2">Optional: What other item you want to pair with?</label>
                    <div>
                        <select name="activity" id="activity">
                            <option value="none" defaultValue disabled hidden>Select an option</option>
                            <option value="Rings">Rings</option>
                            <option value="Hats">Hats</option>
                            <option value="Glasses">Glasses</option>
                            <option value="Scarves">Scraves</option>
                        </select>
                    </div>

                    <div id='choice'>
                        <label htmlFor="budget" id="budget_input">BUDGET:$</label>
                        <input type="BUDGET" id="budget_input" name="BUDGET" placeholder="0 - 10,000"></input>
                    </div>

                    <div className="output">
                        <button className="Generator" type="button">
                            GENERATE
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export function Display(props) {
    const data = props.item;
    return (
        <main>
            <header className="subpage-title"><h1>Item OUTFIT</h1></header>
            <div className='containerg'>
                <ShoeOnly products={data}/>
                <FullProduct Data3={currData} />
            </div>
        </main>
    )
}

