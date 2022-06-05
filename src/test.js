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
            if (typeof(value) === 'object') {
                let valueKeys = Object.keys(value);
                for (let c = 0; c < valueKeys.length; c++) {
                    itemColumn.push(value[valueKeys[c]]);  
                }
            } else {
                itemColumn.push(value);
            }
            let info = {[column]: itemColumn}; // info is an object of object
            itemInfo.push(info);
        }
        let item = {[id]: itemInfo};
        categoryInfo.push(item);
    }
    return categoryInfo;
}

export default function Transform (database) {
    let dataCopy = database;
    let dataArray = [];
    // console.log(database);
    let key = Object.keys(dataCopy);
    let keyLength = key.length; // it should be 4
    for (let i = 0; i < keyLength; i++) {
        let category = key[i]; //read each category at one time
        let categoryValue = dataCopy[category]; //reads in the value of correspond key
        if (category === 'clothes') { 
            for (let j = 0; j < Object.keys(categoryValue).length, j++;) {
                let clothesCategory = Object.keys(categoryValue)[j];
                let clothesCategoryValue = categoryValue[clothesCategory];
                clothesCategoryValue = IdExtract(clothesCategoryValue);
            }
        }
        categoryValue = IdExtract(categoryValue);
        let singleCategory = {[category]: categoryValue};
        dataArray.push(singleCategory);
    }
    return dataArray;
}
