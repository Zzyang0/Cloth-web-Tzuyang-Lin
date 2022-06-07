import React, {useState} from 'react';
import ItemDisplay from './ItemDisplay.js';

function ItemGenerateForm(props) {
    let data = props.products;
    const [want, setWant] = useState([]);
    let wantCopy = want;
    const handleInputChange = (event) => {
        const {value, checked} = event.target;
        wantCopy = want;
        if (checked) {
            wantCopy.push(value);
        } else {
            for (let i = 0; i < wantCopy.length; i ++) {
                if (wantCopy[i] === value) {
                    //wantCopy = wantCopy.splice(i, 1);
                    delete wantCopy[i];
                }
            }
        }
        let copy = wantCopy.filter(n => n);
        setWant(copy);
        let filterData = props.filterCategory(copy);
        props.setDisplay(filterData);
    }

    const handleBudgetChange = (event) => {
        const budget = event.target.value;
        props.budgetFilter(data, budget);
    }

    
    return (
        <div>
            <div className='generator'>
                <form>
                    <label className="ques" htmlFor="q1">Which category of items do you want?</label>
                    <div className='category'>
                        <div className="input">
                            <input type="checkbox" id="Shoes" name="category" value="shoes" onChange={handleInputChange}/>
                            <label htmlFor="vehicle1"> Shoes </label>
                        </div>
                        
                        
                        <div className='input'>
                            <input type="checkbox" id="Clothes" name="category" value="top" onChange={handleInputChange}/>
                            <label htmlFor="vehicle2"> Top </label>
                        </div>

                        <div className='input'>
                            <input type="checkbox" id="Clothes" name="category" value="bottom" onChange={handleInputChange}/>
                            <label htmlFor="vehicle2"> Bottom </label>
                        </div>

                        
                        <div className='input'>
                            <input type="checkbox" id="Bags" name="category" value="bags" onChange={handleInputChange}/>
                            <label htmlFor="vehicle3"> Bags </label>
                        </div>
                        
                        
                        <div className='input'>
                            <input type="checkbox" id="Accessories" name="category" value="accessories" onChange={handleInputChange}/>
                            <label htmlFor="vehicle3"> Accessories </label>
                        </div>
                        
                        
                    </div>
                    <p>
            
                    <label className='ques' htmlFor="q2">Optional: What other item you want to pair with?</label>
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
            </div>
            
        </div>
    );
}

export function ItemGenerate(props) {
    const currentUser = props.currentUser;
    const originData = props.item;
    const [display, setDisplay] = useState(originData);
    
    return (
        <main>
            <header className="subpage-title"><h1>GENERATE ITEM</h1></header>
            <div className='containerg'>
                <ItemGenerateForm products={display} filterCategory={props.applyFilterCallback} budgetFilter={props.applyBudgetFilter} setDisplay={setDisplay}/>
                <ItemDisplay item={display} currentUser={currentUser}/>
            </div>
        </main>
    )
}