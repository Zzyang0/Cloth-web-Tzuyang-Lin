import React, { useEffect, useState } from "react";

import { About } from "./About";
import { Nav, Footer } from "./Footer&Header";
import { Homepage } from "./Homepage";
import { Display } from "./ItemGenerate";
import { Startquiz, Quiz } from "./Quiz"
import { Mycloset } from "./MyCloset"
import products from "./data/item.json";
import { Routes, Route, Navigate, Link, useNavigate, Outlet } from 'react-router-dom';
import { Whole } from "./Formpage";
import shoes from "./data/shoes.json";
import everything from "./data/clothes.json";
import blog from "./data/blog.json";
import SignIn from "./SignInPage";
import { getAuth, onAuthStateChanged } from 'firebase/auth';



function App(props) {
    const nullUser = { userId: null, userName: null }
    const [currentUser, setCurrentUser] = useState(nullUser);
    const navigateTo = useNavigate();
    

    useEffect(() => {

        const auth = getAuth();
        onAuthStateChanged(auth, (firebaseUser) => {
            if (firebaseUser) { //is defined, so "logged in"
                console.log("authentication state changed");
                console.log(firebaseUser);
                //add in the keys for the terms we want to use
                firebaseUser.userId = firebaseUser.uid;
                firebaseUser.userName = firebaseUser.displayName;
                setCurrentUser(firebaseUser);
            }
            else { //not defined, so logged out
                setCurrentUser(nullUser);
            }
        });
    }, [])

    const loginUser = (userObject) => {
        //can do more checking here if we want
        setCurrentUser(userObject);
        navigateTo('outfitgenerator'); //go to chat "after" we log in!
    }


    return (
        <div>
            <Routes>
                <Route element={<AppLayout currentUser={currentUser} />}>
                    {/* protected routes */}
                    <Route element={<ProtectedPage currentUser={currentUser} />}>
                        <Route path="/closet" element={
                            <Mycloset currentUser={currentUser} />
                        } />
                    </Route>
                    <Route path='/' element={<Homepage />} />
                    <Route path='outfitgenerator' element={<Whole require={shoes} />} />
                    <Route path='itemgenerator' element={<Display item={everything} />} />
                    <Route path='/closet' element={<Mycloset />} />
                    <Route>
                        <Route path="/quiz" element={<Startquiz />} />
                        <Route path="/quizquestion" element={<Quiz />} />
                    </Route>
                    <Route path='/about' element={<About />} />
                    <Route path='signin' element={<SignIn currentUser={currentUser} />} />
                    <Route path='*' element={<Navigate to='/' />} />
                </Route>

            </Routes>
            <Footer />
        </div>
    );
}

function AppLayout({ currentUser }) {
    return (
        <>
            <Nav currentUser={currentUser} />
            {/* the nested route */}
            <Outlet />
        </>
    )
}

function ProtectedPage(props) {
    //...determine if user is logged in
    if (!props.currentUser.uid) { //if no user, send to sign in
        return <Navigate to="signin" />
    }
    else { //otherwise, show the child route content
        return <Outlet />
    }
}

export default App;