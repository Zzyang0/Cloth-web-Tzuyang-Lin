import { About } from "./About";
import { Nav, Footer } from "./Footer&Header";
import { Homepage } from "./Homepage";
import { Display } from "./ItemGenerate";
import { Startquiz, Quiz } from "./Quiz"
import { Mycloset } from "./MyCloset"
import products from "./data/item.json";
import { Routes, Route, Navigate, Link } from 'react-router-dom';
import { Whole } from "./Formpage";
import shoes from "./data/shoes.json";
import everything from "./data/clothes.json";
import blog from "./data/blog.json"


function App(props) {
    const data = props.data
    return (
        <div>
            <Nav />
            <Routes>
                <Route exact path='/' element={<Homepage />} />
                <Route path='outfitgenerator' element={<Whole require={shoes} />} />
                <Route path='itemgenerator' element={<Display item={everything} />} />
                <Route path='/closet' element={<Mycloset />} />
                <Route>
                    <Route path="/quiz" element={<Startquiz />} />
                    <Route path="/quizquestion" element={<Quiz />} />
                </Route>
                <Route path='/about' element={<About />} />
                <Route path='*' element={<Navigate to='/' />} />

            </Routes>
            <Footer />
        </div>
    );
}

export default App;