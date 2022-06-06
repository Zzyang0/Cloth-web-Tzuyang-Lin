import React, { useEffect, useState } from 'react';
import { getDatabase, ref, set as firebaseSet, onValue, push as firebasePush } from 'firebase/database';


function Item(props) {
    const re = props.itemdata;
    // const key = props.keys;
    const [removed, setremoved] = useState(false);


    const handleremove = (event) => {
        Removeitem(re)
        //console.log(re.firebaseKey);
        setremoved(true);
    }

    return (
        // <div className="cloth">
        //     {!removed &&
        //         <span>
        //             <img src={re.img} alt={re.imgd} />
        //             <h1>{re.brand}</h1>
        //             <h2>{re.des}</h2>
        //             <p>{"$" + re.price}</p>
        //             <button className="save-to-closet" type="button" onClick={handleremove} > remove </button>
        //         </span>
        //     }
        //     {removed &&
        //         <>
        //         </>
        //     }
        // </div>
        <div className="cloth">
            <img src={re.img} alt={re.imgd} />
            <h1>{re.brand}</h1>
            <h2>{re.des}</h2>
            <p>{"$" + re.price}</p>
            <button className="save-to-closet" type="button" onClick={handleremove} > remove </button>
        </div>
    )
}


function Removeitem(item) {
    const itemkey = item.firebaseKey;
    const db = getDatabase(); //url for the database, not the data itself
    const itemref = ref(db, "Saveditem/" + itemkey); //refers to "message" location in the database
    //const clothingItemRef = ref(db, "allItems/" + firebaseKey);
    firebaseSet(itemref,null);
}




function Displaycloset(props) {
    const currentUser = props.currentuser;
    const itemarray = props.item;
    // const keys = props.keys
    //const [itemarray, setitemarray] = useState([])
    //newMessageComponentArray is an array of elements [<>]
    const newitemArray = itemarray.map((itemobj) => {
        const transformed = (
            <Item itemdata={itemobj} key={itemobj.firebaseKey} />
        )
        return transformed;
    })

    if (newitemArray.length === 0) {
        return <p className='welcome_text'>You have no clothes in the Closet right now</p>
    }

    // content to show!

    return (
        <div className='generated-cloth'>
            {newitemArray}
        </div>
    )

}


export function Additem(item, currentUser) {
    const newitem = {
        userId: currentUser.userId,
        img: item.img,
        des: item.des,
        price: item.price
    }

    const db = getDatabase(); //url for the database, not the data itself
    const allMsgRef = ref(db, "Saveditem"); //refers to "message" location in the database

    firebasePush(allMsgRef, newitem);

}

export function Mycloset(props) {
    const currentUser = props.currentUser;
    const [itemarray, setitemarray] = useState([])
    const [key, setkey] = useState({});

    useEffect(() => {
        //what to do FIRST TIME the component loads

        //hook up listener for when a value changes
        const db = getDatabase(); //url for the database, not the data itself
        const allMsgRef = ref(db, "Saveditem");
        const offFunction = onValue(allMsgRef, (snapshot) => {
            const newValObj = snapshot.val();
            const keys = Object.keys(newValObj);
            const values = Object.values(newValObj);

            const addkeylist = keys.map((keyString) => {
                const item = newValObj[keyString];
                item.firebaseKey = keyString;
                return item
            })
            console.log(addkeylist);

            const arr = addkeylist.filter((value, index, self) =>
                index === self.findIndex((t) => (
                    t.userId === currentUser.userId && t.des === value.des
                ))
            )


            console.log(arr);
            // const newObjArray = arr.map((keyString) => {
            //     //return newValObj[keyString]
            //     return keyString
            // })
            setitemarray(arr);


        })

        //what to do when component unmounts (is removed, not shown)
        const cleanup = function () {
            //turn out the lights
            //need to remove the value listener to clean up
            offFunction();
        }
        return cleanup; //tell people to do that when it leaves
    }, [])
    return (
        <div>
            <div className='welcome'>
                <p>{currentUser.userName} 's Closet</p>
            </div>
            <div className='containerg'>
                <Displaycloset item={itemarray} currentuser={currentUser} />
            </div>
            {/* <div className='welcome_text'>
                <p>You have no clothes in the Closet right now</p>
            </div> */}
        </div>
    );
}