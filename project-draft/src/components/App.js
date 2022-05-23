import { About } from "./about";
import { Nav, Footer } from "./footer&header";
import { Homepage } from "./homepage";
import { Display } from "./itemgenerate";
import products from "../data/item.json";
import { All } from "./formpage";
import { FullChoice, FullItem } from "./formpage";
import option from "../data/option.json";
import shoes from "../data/shoes.json";
import { Routes, Route } from 'react-router-dom';
import blog from "../data/blog.json"
import {Bloglist} from "./blog"

// import { Routes, Route, Navigate } from 'react-router-dom';

function App(props) {
    const data = props.data
    return (
        <>
            <Nav />
            {/* <Display item={products} /> */}
            <Routes>
            <Route path='/home' element={<Homepage />} />
            {/* <Route path='/outfit generator' element={< />} />
            <Route path='/item generator' element={< />} /> */}
            <Route path='/blog' element={<Bloglist blog={blog} />} />
            <Route path='/about' element={<About />} />

            </Routes>
            <Footer />
        </>
    );
}

export default App;