import { About } from "./About";
import { Nav, Footer } from "./Footer&Header";
import { Homepage } from "./Homepage";
import { Display } from "./ItemGenerate";
import {Quiz} from "./Quiz"
import {Mycloest} from "./MyCloest"
import products from "./data/item.json";
import { Routes, Route } from 'react-router-dom';
import { Whole } from "./Formpage";
import shoes from "./data/shoes.json";
import everything from "./data/clothes.json";
import blog from "./data/blog.json"


function App(props) {
    const data = props.data
    return (
        <>
            <Nav />
            <Routes>
            <Route exact path='/' element={<Homepage />} />
            <Route path='outfitgenerator' element={<Whole require={shoes} />} />
            <Route path='itemgenerator' element={<Display item={everything} />} />
            <Route path='/closet' element={<Mycloest />} />
            <Route path='/quiz' element={<Quiz />} />
            <Route path='/about' element={<About />} />

            </Routes>
            <Footer />
        </>
    );
}

export default App;