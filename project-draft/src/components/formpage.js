import { faAppleWhole } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Nav, Footer } from "./footer&header";


// # since We divide this page into two parts, thus, there will have two datasets, in order to render the web using one dataset, 
// we include one of them as const at the page as a constant to refer


const PickChoice = [
    {"title":"HOW IS THE WEATHER TODAY?", "guide":"Select an option", "op1":"Sunny", "op2":"Windy", "op3":"Rainy", "op4":"Snowy"},
    {"title":"YOU ARE GOING TO BE:", "guide":"Select an option", "op1":"Indoor", "op2":"Outdoor", "op3":"Both", "op4":"None"},
    {"title":"WHAT OCCASION YOU WILL BE?", "guide":"Select an option", "op1":"Date", "op2":"Causal", "op3":"Sports", "op4":"Business"},
    {"title":"WHAT ARE YOU DOING TODAY?", "guide":"Select an option", "op1":"Movie", "op2":"Picnic", "op3":"Work", "op4":"Hiking"}
]


// #props in this case is a single oject
function Options(props) {
    let need = props.input;
    return (
        <div>
            <label htmlFor="q1">{need.title}</label>
            <div id='choice'>
                <select name="weather" id="weather">
                    <option value="none" disabled hidden>{need.guide}</option>
                    <option value={need.op1}>{need.op1}</option>
                    <option value={need.op2}>{need.op2}</option>
                    <option value={need.op3}>{need.op3}</option>
                    <option value={need.op4}>{need.op4}</option>
                </select>
            </div>
        </div>
    )
}


// props in this case is an array of object
function FullChoice(props) {
    let data = PickChoice;
    let result = data?.map((each) => {
        return <Options input={each} key={each.title} />
    })
    return(
        <div className='generator'>
            <form>
                {result}
                <div id='choice'>
                    <label htmlFor="budget" id="BUDGET_input">BUDGET:$</label>
                    <input type="BUDGET" id="BUDGET_input" name="BUDGET" placeholder="0 - 10,000"></input>
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
            <div className='Container'>
                <FullChoice />
                <FullItem base={file}/>
            </div>
        </main>
    )
}