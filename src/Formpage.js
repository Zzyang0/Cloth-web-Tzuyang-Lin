import { faAppleWhole } from '@fortawesome/free-solid-svg-icons';
import React , {useState} from 'react';
import { Nav, Footer } from "./Footer&Header";
import database from './data/database.json';
import { Mycloset, Displaycloset, Additem } from './MyCloset';

function FullChoice(props) { 
      let backUp = [];
      const handleChange = (e) => {
        // setValue(e.target.value);
        backUp.push(e.target.value);
        console.log(backUp); // it will update each time as long as user select the option;

      };
    return(
        <div className='generator'>
            <form>
                <div className='choice' id='choice'>
                <label htmlFor='q1'>How IS THE WEATHER TODAY?</label>
                    <select name='weather' id='weather' onChange={handleChange}>
                        <option value="none">Select an option</option>
                        <option value='sunny'>Sunny</option>
                        <option value='windy'>Windy</option>
                        <option value='rainy'>Rainy</option>
                        <option value='snowy'>Snowy</option>
                    </select>
                </div>
                <div className='choice' id='choice'>
                <label htmlFor='q2'>WHERE YOU ARE GOING TO BE?</label>
                    <select name='in-out' id='in-out' onChange={handleChange}>
                        <option value="none">Select an option</option>
                        <option value='indoor'>Indoor</option>
                        <option value='outdoor'>Outdoor</option>
                        <option value='both'>Both</option>
                        <option value='none'>None</option>
                    </select>
                </div>
                <div className='choice' id='choice'>
                <label htmlFor='q3'>WHAT OCCASION YOU WILL BE?</label>
                    <select name='occasion' id='occasion' onChange={handleChange}>
                        <option value="none">Select an option</option>
                        <option value='date'>Date</option>
                        <option value='casual'>Casual</option>
                        <option value='sports'>Sports</option>
                        <option value='business'>business</option>
                    </select>
                </div>
                <div className='choice' id='choice'>
                <label htmlFor='q4'>WHAT ARE YOU DOING TODAY?</label>
                    <select name='activity' id='activity' onChange={handleChange}>
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
                <input type="BUDGET" className='written-input' id="budget_input" name="BUDGET" placeholder="0 - 10,000"></input>
            </div>
    
            <div className="output">
                <button className="Generator" type="button">
                    GENERATE
                </button>
            </div> 
            </form>
        </div>
    )
}

// in this case, the props will be single item Object
function ItemDisplay(props) {
    const currentUser = props.currentUser;
    let re = props.intake;
    const [saved, setsaved] = useState(false);

    const handlesave = (event) => {
        event.preventDefault();
        console.log(re);
        Additem(re, currentUser);
        setsaved(true);
    }

    // if(saved) {
    //     const display = none;
    // }

    return (
        <div className="cloth">
            <img src={re.img} alt={re.imgd} />
            <h1>{re.brand}</h1>
            <h2>{re.des}</h2>
            <p>{"$" + re.price}</p>
            {saved &&
                <button className="save-to-closet" type="button" > SAVED </button>
            }
            {!saved &&
                <button className="save-to-closet" type="button" disabled={saved} onClick={handlesave} > SAVE TO CLOSET </button>
            }

        </div>
    )
}

// # this function takes in an array of object with product information
function FullItem(props) {
    const currentUser = props.currentUser;
    let items = props.base;
    let info = items?.map((single) => {
       return  <ItemDisplay intake={single} key={single.imgd} currentUser={currentUser} />
    })

    return (
        <div className="generated-cloth">
            {info}
        </div>
    )

}

// # combine the whole structure into ine function and export it
export function Whole(props) {
    const file = props.require;
    const currentUser = props.currentUser;
    return(
        <main>
            <header className="subpage-title"><h1>GENERATING OUTFIT</h1></header>
            <div className='containerg'>
                <FullChoice />
                <FullItem base={file} currentUser={currentUser} />
            </div>
        </main>
    )
}