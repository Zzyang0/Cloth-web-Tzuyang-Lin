import React, {useState} from 'react';
import ItemDisplay from './ItemDisplay.js';

function ItemGenerateForm(props) {
    let data = props.products;
    const [dataBudget, setDataBudget] = useState(data);
    const [dataSearch, setDataSearch] = useState(data);
    const [want, setWant] = useState([]);
    const [queryText, setQueryText] = useState('');
    let wantCopy = want;
    let budgetInput;
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
        setDataBudget(filterData);
        setDataSearch(filterData);
        props.setDisplay(filterData);
    }

    const handleBudgetChange = (event) => {
        const budget = event.target.value;
        let filterData = props.budgetFilter(dataBudget, budget);
        props.setDisplay(filterData);
    }

    const handleSeachChange = (event) => {
        setQueryText(event.target.value);
        let filterData = props.searchFilter(dataSearch, event.target.value);
        console.log(filterData);
        props.setDisplay(filterData);
    }
    
    return (
        <div>
            <div className='generator'>
                <form>
                    <label className="ques" htmlFor="q1">Which category of items do you want?</label>
                    <p className="budgetMessage">Note: Please fill out this section before entering Budget!</p>
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
                    <div className="search">
                        <label htmlFor="searchQuery" className="ques">Which brand are you looking for?</label>
                        <input type="text" className="written-input" placeholder="Search for a brand" value={queryText} onChange={handleSeachChange} />
                    </div>

                    <div className='choice' id='choice'>
                        <p>
                        <label htmlFor="budget" className='ques' id="budget_input">BUDGET:$</label>
                        </p >
                        <input type="number" className='written-input' id="budget_input" name="BUDGET" value={budgetInput} placeholder="0 - 10,000" onChange={handleBudgetChange}></input>
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
                <ItemGenerateForm products={originData} filterCategory={props.applyFilterCallback} budgetFilter={props.applyBudgetFilter} searchFilter={props.applySearchFilter} setDisplay={setDisplay}/>
                <ItemDisplay item={display} currentUser={currentUser} />
            </div>
        </main>
    )
}