import React from 'react';
import { Nav, Footer } from "./footer&header";
// #props in this case is a single oject
function Options(props) {
    let need = props.input;
    return (
        <div>
            <label htmlFor="q1">{need.title}</label>
            <div id='choice'>
                <select name="weather" id="weather">
                    <option value="none" disabled hidden>{need.guide}</option>
                    <option value={need.op1}>{props.op1}</option>
                    <option value={need.op2}>{props.op2}</option>
                    <option value={need.op3}>{props.op3}</option>
                    <option value={need.op4}>{props.op4}</option>
                </select>
            </div>
        </div>
    )
}


// props in this case is an array of object
function FullChoice(props) {
    let data = props.Data1;
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
            <img scr = {re.des} alt={re.imgd} />
            <h1>{re.brand}</h1>
            <h2>{re.des}</h2>
            <p>{"$" + re.price}</p>
            <button className="save-to-closet" type="button"> SAVE TO CLOSET </button>
        </div>
    )
}

// # this function takes in an array of object with product information
function FullItem(props) {
    let items = props.Data2;
    let info = items?.map((single) => {
        <ItemDisplay intake={single} key={single.imgd} />
    })

    return (
        <div className="generated-cloth">
            {info}
        </div>
    )

}

export function All (props) {
    let base1 = props.data;
    let base2 = props.item;
    return(
        <main>
            <header className="subpage-title"><h1>GENERATING OUTFIT</h1></header>
            <div className='Container'>
                <FullChoice Data1={base1} />
                <FullItem Data2={base2}/>
            </div>
        </main>

    )
}