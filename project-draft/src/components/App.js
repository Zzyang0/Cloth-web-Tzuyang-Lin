import { About } from "./about";
import { Nav, Footer } from "./footer&header";
import { Homepage } from "./homepage";
import { Display } from "./itemgenerate";
import products from "../data/item.json";
import { All } from "./formpage";
import { FullChoice, FullItem } from "./formpage";
import option from "../data/option.json";
import shoes from "../data/shoes.json";
import everything from "../data/clothes.json";
import { Routes, Route } from 'react-router-dom';
import blog from "../data/blog.json"
import {Bloglist} from "./blog"
import {Mycloest} from "./my_cloest"


function App(props) {
    const data = props.data
    return (
        <>
            <Nav />
            <Routes>
            <Route exact path='/home' element={<Homepage />} />
            <Route path='outfitgenerator' element={<Display item={everything} />} />
            <Route path='/itemgenerator' element={<Display item={products} />} />
            <Route path='/closet' element={<Mycloest />} />
            <Route path='/blog' element={<Bloglist blog={blog} />} />
            <Route path='/about' element={<About />} />

            </Routes>
            <Footer />
        </>
    );
}

export default App;