import { faAppleWhole } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import { Mycloset, Displaycloset, Additem } from './MyCloset';
import ItemDisplay from './ItemDisplay';

function FullChoice(props) {
    let data = props.items;
    const [count, setCount] = useState(0);
    const [want, setWant] = useState([]);
    const [dataBudget, setDataBudget] = useState(data);
    let budgetInput;
    const handleChange = (e) => {
        /*backUp.push(e.target.value);
        //console.log(backUp);
        let pass = props.items;
        for (let i = 0; i < pass.length; i++) { // i = 5
            // console.log(pass[i]);
            for (let j = 0; j < Object.values(pass[i]).length; j++) { // j = 10
                // console.log(Object.values(pass[i])[j]); 
                for (let k = 0; k < (Object.values(pass[i])[j]).length; k++) {
                    // console.log((Object.values(pass[i])[j])[k]);
                    for (let l = 0; l < Object.values((Object.values(pass[i])[j])[k]).length; l++) {
                        // console.log(Object.values((Object.values(pass[i])[j])[k])[l]);
                        for (let m = 0; m < Object.values((Object.values(pass[i])[j])[k])[l].length; m++) {
                            let each = Object.values((Object.values(pass[i])[j])[k])[l][m];
                            console.log(each);
                            if (backUp.length === 4) {
                            
                            }
                        }

                    }

                }

            }
        }*/
    }
    const handleWeatherChange = (event) => {
        let wantCopy = [...want, event.target.value];
        setWant(wantCopy);
    }

    const handleLocationChange = (event) => {
        let wantCopy = [...want, event.target.value];
        setWant(wantCopy);
    }

    const handleEventChange = (event) => {
        let wantCopy = [...want, event.target.value];
        setWant(wantCopy);
    }

    const handleActivityChange = (event) => {
        let wantCopy = [...want, event.target.value];
        setWant(wantCopy);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        let filterData = props.filterOutfit(count);
        if (count <= 8) {
            setCount(count + 1);
        } else {
            setCount(0);
        }
        props.setDisplay(filterData);
    }

    const handleBudgetChange = (event) => {
        const budget = event.target.value;
        let filterData = props.budgetFilter(dataBudget, budget);
        props.setDisplay(filterData);
    }

    return (
        <div>
        <div className='generator'>
            <form onSubmit={handleSubmit}>
                <div className='choice' id='choice'>
                    <label htmlFor='q1'>HOW IS THE WEATHER TODAY?</label>
                    <select name='weather' id='weather' onChange={handleWeatherChange}>
                        <option value="none">Select an option</option>
                        <option value='sunny'>Sunny</option>
                        <option value='windy'>Windy</option>
                        <option value='rainy'>Rainy</option>
                        <option value='snowy'>Snowy</option>
                    </select>
                </div>
                <div className='choice' id='choice'>
                    <label htmlFor='q2'>WHERE YOU ARE GOING TO BE?</label>
                    <select name='in-out' id='in-out' onChange={handleLocationChange}>
                        <option value="none">Select an option</option>
                        <option value='indoor'>Indoor</option>
                        <option value='outdoor'>Outdoor</option>
                        <option value='both'>Both</option>
                    </select>
                </div>
                <div className='choice' id='choice'>
                    <label htmlFor='q3'>WHAT OCCASION YOU WILL BE?</label>
                    <select name='occasion' id='occasion' onChange={handleEventChange}>
                        <option value="none">Select an option</option>
                        <option value='date'>Date</option>
                        <option value='casual'>Casual</option>
                        <option value='sports'>Sports</option>
                        <option value='business'>Business</option>
                    </select>
                </div>
                <div className='choice' id='choice'>
                    <label htmlFor='q4'>WHAT ARE YOU DOING TODAY?</label>
                    <select name='activity' id='activity' onChange={handleActivityChange}>
                        <option value="none">Select an option</option>
                        <option value='movie'>Movie</option>
                        <option value='picnic'>Picnic</option>
                        <option value='work'>Work</option>
                        <option value='hiking'>Hiking</option>
                    </select>
                </div>

                <div className='choice' id='choice'>
                        <p>
                        <label htmlFor="budget" className='ques' id="budget_input">BUDGET:$</label>
                        </p >
                        <input type="number" className='written-input' id="budget_input" name="BUDGET" value={budgetInput} placeholder="0 - 10,000" onChange={handleBudgetChange}></input>
                    </div>

                <div className="output">
                    <button className="Generator" type="submit">
                        GENERATE
                    </button>
                </div>
            </form>
        </div>
        </div>
    )
}

// # combine the whole structure into ine function and export it
export function OutfitGenerate(props) {
    const file = props.item;
    const currentUser = props.currentUser;
    const [display, setDisplay] = useState(file);

    return (
        <main>
            <header className="subpage-title"><h1>GENERATING OUTFIT</h1></header>
            <div className='containerg'>
                <FullChoice items={file} filterOutfit={props.applyFilterOutfit} budgetFilter={props.applyBudgetFilter} setDisplay={setDisplay} />
                <ItemDisplay item={display} currentUser={currentUser}/>
            </div>
        </main>
    )
}