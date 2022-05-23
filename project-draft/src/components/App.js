import { About } from "./about";
import { Nav, Footer } from "./footer&header";
import { Display } from "./itemgenerate";
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
            <Display item={products} />
            <Footer />
        </>
    );
}

export default App;