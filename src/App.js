import React, { useEffect, useState } from "react";
import { About } from "./About";
import { Nav, Footer } from "./Footer&Header";
import { Homepage } from "./Homepage";
import { ItemGenerate } from "./ItemGenerate";
import { Mycloset } from "./MyCloset"
import { Routes, Route, Navigate, useNavigate, Outlet } from 'react-router-dom';
import { OutfitGenerate } from "./Formpage";
import SignIn from "./SignInPage";
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import database from "./data/database.json";

function App(props) {
    const nullUser = { userId: null, userName: null }
    const dataArray = Transform(database);
    const dataArrayWithoutSaveItem = RemoveSavedItem(dataArray);
    const [currentUser, setCurrentUser] = useState(nullUser);
    const navigateTo = useNavigate();

    function FilterCategory(want) { // filter database with user input
        if (want.length === 0) {
            return dataArrayWithoutSaveItem;
        } else {
            let finalItem = [];
            let filterItem = dataArrayWithoutSaveItem;
            // console.log(filterItem);
            for (let i = 0; i < want.length; i++) {
                filterItem = dataArrayWithoutSaveItem.filter((categoryObject) => {
                    if (Object.keys(categoryObject)[0] === want[i]) {
                        console.log(categoryObject); // Print the object to the console
                        return true;
                    } else {
                        return false;
                    }
                });
                for (let j = 0; j < filterItem.length; j++) {
                    finalItem.push(filterItem[j]);
                }

            }
            // console.log(Object.keys(categoryObject)[0]);
            return finalItem;
        }
    }

    function FilterBudget(database, budget) {
        if (budget === "") {
            return database;
        } else {
            let finalItem = [];
            for (let i = 0; i < database.length; i++) {
                let categoryObject = database[i];
                let category = Object.keys(categoryObject)[0];
                let itemObjectArray = categoryObject[category];
                for (let j = 0; j < itemObjectArray.length; j++) {
                    let itemObject = itemObjectArray[j];
                    let item = Object.keys(itemObject)[0];
                    let infoArray = itemObject[item];
                    for (let k = 0; k < infoArray.length; k++) {
                        let infoObject = infoArray[k];
                        let infoName = Object.keys(infoObject)[0];
                        if (infoName === 'price') {
                            let price = infoObject[infoName][0];
                            if (price <= budget) {
                                finalItem.push(itemObject);
                            }
                        }
                    }
                }
            }
            let finalItemObject = [{ 0: finalItem }];
            return finalItemObject;
        }
    }

    function SearchFilter(database, searchTerm) {
        if (searchTerm === "") {
            return database;
        } else {
            let finalItem = [];
            let filterItem = dataArrayWithoutSaveItem;
            for (let i = 0; i < filterItem.length; i++) {
                let categoryObject = filterItem[i];
                let category = Object.keys(categoryObject)[0];
                let itemObjectArray = categoryObject[category];
                // console.log(category);
                for (let j = 0; j < itemObjectArray.length; j++) {
                    let itemObject = itemObjectArray[j];
                    let item = Object.keys(itemObject)[0];
                    let infoArray = itemObject[item];
                    // console.log(itemObject);
                    // console.log(infoArray.length);
                    for (let k = 0; k < infoArray.length; k++) {
                        let infoObject = infoArray[k];
                        let infoName = Object.keys(infoObject)[0];
                        if (infoName === 'brand') {
                            let brand = infoObject[infoName][0];
                            // console.log(brand.toLowerCase());
                            // console.log(searchTerm.toLowerCase());
                            if (brand.toLowerCase().indexOf(searchTerm.toLowerCase()) >= 0) {
                                finalItem.push(itemObject);
                            }
                        }
                    }
                }
            }
            let finalItemObject = [{ 0: finalItem }];
            return finalItemObject;
        }
    }

    function FilterOutfit(want) { // filter database with user input
        let count = 0;
        let newwant = []
        for(let i=0; i<want.length; i++){
            if(want[i] == 'none'){
                count++;
            }else {
                newwant.push(want[i]);
            }
        }
        console.log(newwant);
        if(count == 4 || count == want.length) return dataArrayWithoutSaveItem;

        if (want.length === 0) {
            return dataArrayWithoutSaveItem;
        } else {
            let finalItem = [];
            let filterItem = dataArrayWithoutSaveItem;
            // console.log(filterItem.length);
            // console.log(database)
            for (let i = 0; i < filterItem.length; i++) {
                let categoryObject = filterItem[i];
                let category = Object.keys(categoryObject)[0];
                let itemObjectArray = categoryObject[category];
                // console.log(itemObjectArray.length);
                for (let j = 0; j < itemObjectArray.length; j++) {
                    let itemObject = itemObjectArray[j];
                    let item = Object.keys(itemObject)[0];
                    let infoArray = itemObject[item];
                    let count = 0;
                    for (let k = 0; k < infoArray.length; k++) {
                        let infoObject = infoArray[k];
                        let infoName = Object.keys(infoObject)[0];
                        if (infoName === 'weather' || infoName === 'location' || infoName === 'activity' || infoName === 'event') {
                            for (let z = 0; z < infoObject[infoName].length; z++) {
                                for (let b = 0; b < newwant.length; b++) {
                                    if (newwant[b] === infoObject[infoName][z]) {
                                        count++;
                                    }
                                }
                            }
                        }
                    }
                    if (count == newwant.length) {
                        finalItem.push(itemObject)
                        console.log(itemObject);
                    } else {
                        console.log('None')
                    }
                    
                }
            }
            if(finalItem.length == 0) console.log('None');
            let finalItemObject = [{ 0: finalItem }];
            return finalItemObject;
        }
    }

    // function FilterOutfit(count) { // filter database with user input
    //     let finalItem = [];
    //     let filterItem = dataArrayWithoutSaveItem;
    //     for (let i = 0; i < filterItem.length; i++) {
    //         let itemObject = filterItem[i];
    //         let itemKey = Object.keys(itemObject)[0];
    //         let itemArray = itemObject[itemKey];
    //         let item = itemArray[count];
    //         finalItem.push(item);
    //         console.log(itemObject);
    //     }
    //     let finalItemObject = [{ 0: finalItem }];
    //     // console.log(finalItemObject);
    //     return finalItemObject;
    // }

    useEffect(() => {

        const auth = getAuth();
        const login = onAuthStateChanged(auth, (firebaseUser) => {
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
        function cleanup() {
            login();
        }
        return cleanup;
    }, [])

    return (
        <div>
            <Routes>
                <Route element={<AppLayout currentUser={currentUser} />}>
                    {/* protected routes */}
                    <Route element={<ProtectedPage currentUser={currentUser} />}>
                        <Route path="/closet" element={
                            <Mycloset currentUser={currentUser} />
                        } />
                        <Route path='outfitgenerator' element={<OutfitGenerate item={dataArrayWithoutSaveItem} applyBudgetFilter={FilterBudget} applyFilterOutfit={FilterOutfit} currentUser={currentUser} />} />
                        <Route path='itemgenerator' element={<ItemGenerate item={dataArrayWithoutSaveItem} applyFilterCallback={FilterCategory} applyBudgetFilter={FilterBudget} applySearchFilter={SearchFilter} currentUser={currentUser} />} />
                        <Route path='/closet' element={<Mycloset />} />
                    </Route>
                    <Route path='/' element={<Homepage />} />
                    <Route path='/about' element={<About />} />
                    <Route path='signin' element={<SignIn currentUser={currentUser} />} />
                    {/* handel error routes */}
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


function IdExtract(categoryValue) {
    let categoryInfo = [];
    let itemId = Object.keys(categoryValue); //[top, bottom];
    for (let a = 0; a < itemId.length; a++) {
        let id = itemId[a]; // values of top or bottom
        let itemInfo = [];
        let itemValueObject = categoryValue[id]; // top value is an object of object
        let itemValueKeys = Object.keys(itemValueObject); // keys of top value object
        for (let b = 0; b < itemValueKeys.length; b++) {
            let column = itemValueKeys[b]; // keys of top value object
            let value = itemValueObject[itemValueKeys[b]];
            let itemColumn = [];
            if (typeof (value) === 'object') {
                let valueKeys = Object.keys(value);
                for (let c = 0; c < valueKeys.length; c++) {
                    itemColumn.push(value[valueKeys[c]]);
                }
            } else {
                itemColumn.push(value);
            }
            let info = { [column]: itemColumn }; // info is an object of object
            itemInfo.push(info);
        }
        let item = { [id]: itemInfo };
        categoryInfo.push(item);
    }
    return categoryInfo;
}

function Transform(database) {
    let dataCopy = database;
    let dataArray = [];
    let key = Object.keys(dataCopy);
    let keyLength = key.length; // it should be 5
    for (let i = 0; i < keyLength; i++) {
        let category = key[i]; //read each category at one time
        let categoryValue = dataCopy[category]; //reads in the value of correspond key
        categoryValue = IdExtract(categoryValue);
        let singleCategory = { [category]: categoryValue };
        dataArray.push(singleCategory);

    }
    return dataArray;
}

function RemoveSavedItem(database) {
    const data = [];
    for (let i = 0; i < database.length; i++) {
        let categoryObject = database[i];
        let category = Object.keys(categoryObject)[0];
        if (category !== 'Saveditem') {
            data.push(categoryObject);
        }
    }
    return data;
}

export default App;