import { About } from "./about";
import { Nav, Footer } from "./footer&header";
import { FullProduct, ShoeOnly } from "./itemgenerate";
import products from "../data/item.json";
import { All } from "./formpage";
import { FullChoice, FullItem } from "./formpage";
import option from "../data/option.json";
import shoes from "../data/shoes.json";



// import { Routes, Route, Navigate } from 'react-router-dom';

function App(props) {
    const data = props.data
    return (
        <>
            <Nav />
               {/*<main>
                    <header className="subpage-title"><h1>GENERATING OUTFIT</h1></header>
                    <div className='Container'>
                        <FullChoice Dt={option} />
                        <FullItem Da={shoes} />
                    </div>
                </main> */}
            <main>
                <header className="subpage-title"><h1>Item OUTFIT</h1></header>
                <div className='Container'>
                    <ShoeOnly />
                    <FullProduct Data3={products} />
                </div> *

            </main>
            <Footer />
        </>
    );
}

export default App;