import React, { useEffect, useState } from 'react';
import { getDatabase, ref, set as firebaseSet, onValue, push as firebasePush } from 'firebase/database';


function Item(props) {
    const re = props.itemdata;
    const handleremove = (event) => {
        Removeitem(re);
    }

    return (
        <div className="cloth">
            <img src={re.img} alt={re.imgd} />
            <h1>{re.brand}</h1>
            <h2>{re.des}</h2>
            <p>{"$" + re.price}</p>
            <button className="save-to-closet" type="button" onClick={handleremove} > Remove </button>
        </div>
    )
}

function Removeitem(item) {
    const itemkey = item.firebaseKey;
    const db = getDatabase(); 
    const itemref = ref(db, "Saveditem/" + itemkey); 
    firebaseSet(itemref,null);
}


function Displaycloset(props) {
    const itemarray = props.item;
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

    const db = getDatabase(); 
    const allMsgRef = ref(db, "Saveditem"); 

    firebasePush(allMsgRef, newitem);

}

export function Mycloset(props) {
    const currentUser = props.currentUser;
    const [itemarray, setitemarray] = useState([])

    useEffect(() => {
        const db = getDatabase(); 
        const allMsgRef = ref(db, "Saveditem");
        const offFunction = onValue(allMsgRef, (snapshot) => {
            const newValObj = snapshot.val();
            const keys = Object.keys(newValObj);

            const addkeylist = keys.map((keyString) => {
                const item = newValObj[keyString];
                item.firebaseKey = keyString;
                return item
            })

            const arr = addkeylist.filter((value, index, self) =>
                index === self.findIndex((t) => (
                    t.userId === currentUser.userId && t.des === value.des
                ))
            )
            setitemarray(arr);


        })


        const cleanup = function () {
            offFunction();
        }
        return cleanup; 
    }, [])
    return (
        <div>
            <div className='welcome'>
                <p>{currentUser.userName} 's Closet</p>
            </div>
            <div className='containerg'>
                <Displaycloset item={itemarray} currentuser={currentUser} />
            </div>
        </div>
    );
}