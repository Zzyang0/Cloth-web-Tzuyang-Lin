import React, {useEffect, useState} from 'react';
import ItemDisplay from './ItemDisplay.js';

function FilterCategory (filteredData, want) { // filter database with user input
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
            }
        }
        return finalItem;
    }
}

function ItemGenerateForm(props) {
    let data = props.products;
    const [want, setWant] = useState(['Shoes']);
    const [needData, setNeedData] = useState(data);
    let wantCopy = [];
    const handleInputChange = (event) => {
        const {value, checked} = event.target;
        wantCopy = [...want];
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
    
    

    /*let currData = filterCategory(base3);
    const forceRender = (item) => {
        setWant(wantCopy);
    } */
    /*const forceRender = (data) => {
        console.log("I went in");
        return <FullProduct Data3={data}/>
    }*/
    //forceRender(currData);
    
    return (
        <div>
            <div className='generator'>
                <form>
                    <label htmlFor="q1">Which category of items do you want?</label>
                    <div className='category'>
                        <input type="checkbox" id="Shoes" name="category" value="Shoes" defaultChecked onChange={handleInputChange}/>
                        <label htmlFor="vehicle1"> Shoes </label>
                        {/* <br></br> */}
                        <input type="checkbox" id="Clothes" name="category" value="Clothes" onChange={handleInputChange}/>
                        <label htmlFor="vehicle2"> Clothes </label>
                        {/* <br></br> */}
                        <input type="checkbox" id="Bags" name="category" value="Bags" onChange={handleInputChange}/>
                        <label htmlFor="vehicle3"> Bags </label>
                        {/* <br></br> */}
                        <input type="checkbox" id="Accessories" name="category" value="Accessories" onChange={handleInputChange}/>
                        <label htmlFor="vehicle3"> Accessories </label>
                        {/* <br></br> */}
                    </div>
                    <p>
                    <label htmlFor="q2">Optional: What other item you want to pair with?</label>
                    </p >
                    <div>
                        <select name="activity" id="activity">
                            <option value="none" defaultValue disabled hidden>Select an option</option>
                            <option value="Rings">Rings</option>
                            <option value="Hats">Hats</option>
                            <option value="Glasses">Glasses</option>
                            <option value="Scarves">Scraves</option>
                        </select>
                    </div>

                    <div className='choice' id='choice'>
                        <p>
                        <label htmlFor="budget" className='budget_input' id="budget_input">BUDGET:$</label>
                        </p >
                        <input type="BUDGET" className='budget_input' id="budget_input" name="BUDGET" placeholder="0 - 10,000"></input>
                    </div>

                    <div className="output">
                        <button className="Generator" type="button">
                            GENERATE
                        </button>
                    </div>
                </form>
                <br></br>
                <p>The category/ies you chose are: {want} </p >
            </div>
            
        </div>
    );
}

export function ItemGenerate(props) {
    const data = props.item;


    return (
        <main>
            <header className="subpage-title"><h1>GENERATE ITEM</h1></header>
            <div className='containerg'>
                <ItemGenerateForm changeFilter={data}/>
                <ItemDisplay item={data}/>
            </div>
        </main>
    )
}