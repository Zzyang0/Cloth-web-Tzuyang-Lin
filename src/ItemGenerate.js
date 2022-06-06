import React, {useEffect, useState} from 'react';
import ItemDisplay from './ItemDisplay.js';

function ItemGenerateForm(props) {
    let data = props.products;
    const [want, setWant] = useState(['Shoes']);
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
        props.filterCategory(data, want);
        //props.budgetFilter(data, budget);
    }

    const handleBudgetChange = (event) => {
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
        props.filterCategory(data, want);
        //props.budgetFilter(data, budget);
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
                        <div className="input">
                            <input type="checkbox" id="Shoes" name="category" value="Shoes" defaultChecked onChange={handleInputChange}/>
                            <label htmlFor="vehicle1"> Shoes </label>
                        </div>
                        
                        {/* <br></br> */}
                        <div className='input'>
                            <input type="checkbox" id="Clothes" name="category" value="Clothes" onChange={handleInputChange}/>
                            <label htmlFor="vehicle2"> Clothes </label>
                        </div>

                        {/* <br></br> */}
                        <div className='input'>
                            <input type="checkbox" id="Bags" name="category" value="Bags" onChange={handleInputChange}/>
                            <label htmlFor="vehicle3"> Bags </label>
                        </div>
                        
                        {/* <br></br> */}
                        <div className='input'>
                            <input type="checkbox" id="Accessories" name="category" value="Accessories" onChange={handleInputChange}/>
                            <label htmlFor="vehicle3"> Accessories </label>
                        </div>
                        
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
                        <input type="number" className='budget_input' id="budget_input" name="BUDGET" placeholder="0 - 10,000" onChange={handleBudgetChange}></input>
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
    console.log(props);
    const originData = props.item;
    const data = [];
    for (let i = 0; i < originData.length; i++) {
        let categoryObject = originData[i];
        let category = Object.keys(categoryObject)[0];
        if (category !== 'Saveditem') {
            data.push(categoryObject);
        }
    }
    
    return (
        <main>
            <header className="subpage-title"><h1>GENERATE ITEM</h1></header>
            <div className='containerg'>
                <ItemGenerateForm products={data} filterCategory={props.applyFilterCallback} budgetFilter={props.applyBudgetFilter}/>
                <ItemDisplay item={data}/>
            </div>
        </main>
    )
}