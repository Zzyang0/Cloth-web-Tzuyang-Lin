import { About } from "./about";
import { Nav, Footer } from "./footer&header";
import {ShoeOnly} from "./itemgenerate";
import products from "../data/item.json";


// import { Routes, Route, Navigate } from 'react-router-dom';

function App(props) { 
    return(
        <>
        <Nav />
        {/* <ShoeOnly base3={products}/> */}
        <Footer />
        </>
    );
}

export default App;