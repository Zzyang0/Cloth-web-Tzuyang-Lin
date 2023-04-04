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
    const [selectedValues, setSelectedValues] = useState({}); // initialize an empty object to hold the selected values
    const handleCategoryChange = (event) => {
        const { name, value } = event.target;
        setSelectedValues((prevState) => ({
          ...prevState,
          [name]: prevState[name] === value ? null : value // update the selected value only if it's different from the current value, otherwise clear it
        }));
      };

      const handleSubmit = (event) => {
        event.preventDefault();
        const selectedValuesArray = Object.values(selectedValues);
        let filteredData = []
        if (selectedValuesArray.every((value) => value === null)) {
            filteredData = props.filterOutfit([]);
        } else {
            filteredData = props.filterOutfit(selectedValuesArray.filter((value) => value !== null));
        }
        // const filteredData = props.filterOutfit(selectedValuesArray.filter((value) => value !== null));
        // console.log(selectedValuesArray);
        props.setDisplay(filteredData);
      };
      
      

    // const handleCategoryChange = (event) => {
    //     const { name, value } = event.target; // use name to identify the category
    //     setSelectedValues((prevState) => ({
    //         ...prevState,
    //         [name]: value, // update the selected value for the category
    //     }));
    // };

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     const selectedCategories = Object.keys(selectedValues); // get the names of all the selected categories
    //     const selectedValuesArray = selectedCategories.map((category) => selectedValues[category]); // get an array of the selected values
    //     console.log(selectedValuesArray);
    //     const filteredData = props.filterOutfit(selectedValuesArray); // filter the data using the selected values
    //     // setDataBudget(filteredData);
    //     // setDataSearch(filteredData);
    //     props.setDisplay(filteredData);
    // };


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
                        <select name='weather' id='weather' onChange={handleCategoryChange}>
                            <option value="none">Select an option</option>
                            <option value='sunny'>Sunny</option>
                            <option value='windy'>Windy</option>
                            <option value='rainy'>Rainy</option>
                            <option value='snowy'>Snowy</option>
                        </select>
                    </div>
                    <div className='choice' id='choice'>
                        <label htmlFor='q2'>WHERE YOU ARE GOING TO BE?</label>
                        <select name='in-out' id='in-out' onChange={handleCategoryChange}>
                            <option value="none">Select an option</option>
                            <option value='indoor'>Indoor</option>
                            <option value='outdoor'>Outdoor</option>
                            <option value='both'>Both</option>
                        </select>
                    </div>
                    <div className='choice' id='choice'>
                        <label htmlFor='q3'>WHAT OCCASION YOU WILL BE?</label>
                        <select name='occasion' id='occasion' onChange={handleCategoryChange}>
                            <option value="none">Select an option</option>
                            <option value='date'>Date</option>
                            <option value='casual'>Casual</option>
                            <option value='sports'>Sports</option>
                            <option value='business'>Business</option>
                        </select>
                    </div>
                    <div className='choice' id='choice'>
                        <label htmlFor='q4'>WHAT ARE YOU DOING TODAY?</label>
                        <select name='activity' id='activity' onChange={handleCategoryChange}>
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
                <ItemDisplay item={display} currentUser={currentUser} />
            </div>
        </main>
    )
}