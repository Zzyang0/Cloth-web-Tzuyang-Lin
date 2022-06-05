import { faAppleWhole } from '@fortawesome/free-solid-svg-icons';
import React , {useState} from 'react';
import { Nav, Footer } from "./Footer&Header";
import database from './data/database.json';

// # since We divide this page into two parts, thus, there will have two datasets, in order to render the web using one dataset, 
// we include one of them as const at the page as a constant to refer


const PickChoice = [
    {"title":"How IS THE WEATHER TODAY?", "guide":"Select an option", "op1":"Sunny", "op2":"Windy", "op3":"Rainy", "op4":"Snowy", "num":"q1"},  
    {"title":"WHERE YOU ARE GOING TO BE?", "guide":"Select an option", "op1":"Indoor", "op2":"Outdoor", "op3":"Both", "op4":"None", "art":"in-out", "num":"q2"},
    {"title":"WHAT OCCASION YOU WILL BE?", "guide":"Select an option", "op1":"Date", "op2":"Causal", "op3":"Sports", "op4":"Business", "art":"occasion", "num":"q3"},
    {"title":"WHAT ARE YOU DOING TODAY?", "guide":"Select an option", "op1":"Movie", "op2":"Picnic", "op3":"Work", "op4":"Hiking", "art":"activity", "num":"q4"}
]


// #props in this case is a single oject
function Options(props, data) {
    let need = props.input;
    
      const [value, setValue] = useState(need.guide);
      let backUp = [];
      let result = [];
      const handleChange = (e) => {
        setValue(e.target.value);
        backUp = [...backUp, e.target.value];
        console.log(backUp); // it will update each time as long as user select the option;
        
        // for (let i = 0; i < data.length; i++){ // into a single obj
        //    for (let j = 0; j < Object.values(data[i]).length; j++) {
        //        for (let k = 0; k < Object.values(data[i][j]).length; k++){
        //            if (Object.values(data[i][j]).includes(e.target.value)) {
        //                   result = [...result, data[i][j]];
        //            } 
        //        }
        //    }
        // }
        // there are 5 condition to be consider, weather, location, event, category, price
        // goes inside each category, only keep the item satisfy the condition, four times,
        // need first look for the values for each, and to see whether they
      };

    return (
        <div className='choice' id='choice'>
            <label htmlFor={need.num}>{need.title}</label>
                <select name={need.art} id={need.art} value={value} onChange={handleChange}>
                    <option value="none">{need.guide}</option>
                    <option value={need.op1}>{need.op1}</option>
                    <option value={need.op2}>{need.op2}</option>
                    <option value={need.op3}>{need.op3}</option>
                    <option value={need.op4}>{need.op4}</option>
                </select>
        </div>
    )
}


// props in this case is an array of object
function FullChoice(props) {
    let data = PickChoice;
    let result = data?.map((each) => {
        return <Options input={each} key={each.title} /> // run four times;
    })
    return(
        <div className='generator'>
            <form>
              {result}
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
        </div>
    )
}


// in this case, the props will be single item Object
function ItemDisplay(props) {
    let re = props.intake;
    return(
        <div className="cloth">
            <img src = {re.img} alt={re.imgd} />
            <h1>{re.brand}</h1>
            <h2>{re.des}</h2>
            <p>{"$" + re.price}</p>
            <button className="save-to-closet" type="button"> SAVE TO CLOSET </button>
        </div>
    )
}


// # this function takes in an array of object with product information
function FullItem(props) {
    let items = props.base;
    let info = items?.map((single) => {
       return  <ItemDisplay intake={single} key={single.imgd} />
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
    return(
        <main>
            <header className="subpage-title"><h1>GENERATING OUTFIT</h1></header>
            <div className='containerg'>
                <FullChoice />
                <FullItem base={file}/>
            </div>
        </main>
    )
}