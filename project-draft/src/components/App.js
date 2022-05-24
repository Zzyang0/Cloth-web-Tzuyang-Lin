import { About } from "./about";
import { Nav, Footer } from "./footer&header";
import { Homepage } from "./homepage";
import { Display } from "./itemgenerate";
import {Bloglist} from "./blog"
import {Mycloest} from "./my_cloest"
import products from "../data/item.json";
import { Routes, Route } from 'react-router-dom';
import { Whole } from "./formpage";
import shoes from "../data/shoes.json";
// import everything from "../data/clothes.json";
import blog from "../data/blog.json"


function App(props) {
    const data = props.data
    return (
        <>
            <Nav />
            <Routes>
            <Route exact path='/home' element={<Homepage />} />
            <Route path='outfitgenerator' element={<Whole require={shoes} />} />
            <Route path='itemgenerator' element={<Display item={products} />} />
            <Route path='/closet' element={<Mycloest />} />
            <Route path='/blog' element={<Bloglist blog={blog} />} />
            <Route path='/about' element={<About />} />

            </Routes>
            <Footer />
        </>
    );
}

export default App;