import { About } from "./about";
import { Nav, Footer } from "./footer&header";
import {Bloglist} from "./blog";
// import { Routes, Route, Navigate } from 'react-router-dom';



function App(props) {
    const blogdata = props.blog;

    return(
        <>
        <Nav />
        <Bloglist blog={blogdata} />
        <Footer />
        </>
    );
}

export default App;