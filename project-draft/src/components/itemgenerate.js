import React from 'react';
import { Nav, Footer } from "./footer&header";

function ItemShow(props) {
    let need = props.intake;
    return (
        <div className="cloth">
            <img src={need.img} alt={need.imgd} />
            <h1>{need.brand}</h1>
            <h2>{need.des}</h2>
            <p>{"$" + need.price}</p>
            <button className="save-to-closet" type="button"> SAVE TO CLOSET </button>
        </div>
    )
}

// # this function takes in an array of object with product information
export function FullProduct(props) {
    let products = props.Data3;
    let info = products?.map((single) => {
        return <ItemShow intake={single} key={single.imgd} />
    })

    return (
        <div className="generated-cloth">
            {info}
        </div>
    )

}

export function ShoeOnly(props) {
    let base3 = props.products;
    return (
        <>
            <div className='generator'>
                <form>
                    <label htmlFor="q1">Which category of items do you want?</label>
                    <div>
                        <input type="checkbox" id="Shoes" defaultChecked />
                        <label htmlFor="vehicle1"> Shoes </label>
                        <br></br>
                        <input type="checkbox" id="Clothes" />
                        <label htmlFor="vehicle2"> Clothes </label>
                        <br></br>
                        <input type="checkbox" id="Bags" />
                        <label htmlFor="vehicle3"> Bags </label>
                        <br></br>
                        <input type="checkbox" id="Accessories" />
                        <label htmlFor="vehicle3"> Accessories </label>
                        <br></br>
                    </div>
                    <label htmlFor="q2">Optional: What other item you want to pair with?</label>
                    <div>
                        <select name="activity" id="activity">
                            <option value="none" defaultValue disabled hidden>Select an option</option>
                            <option value="Movie">Rings</option>
                            <option value="Picnic">Hats</option>
                            <option value="Work">Glasses</option>
                            <option value="Biking">Scraves</option>
                        </select>
                    </div>

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
        </>
    )
}