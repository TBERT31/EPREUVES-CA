// Control Input
if(process.argv.length < 4 ){
    console.log("At least two argument please, Strings + a string to search");
    return;
}

let listOfStrings = [];

for(let i = 2; i < process.argv.length-1;i++){
    listOfStrings.push(process.argv[i]);
}

let stringToSearch = process.argv[process.argv.length-1];

// Parsing
function searchString(listOfStrings, stringToSearch){
    let resultArray = [];
    // for(let i = 0; i < listOfStrings; i++){
    //     if(listOfStrings[i].indexOf(stringToSearch) === -1){
    //         resultArray.push(listOfStrings[i]);
    //     }
    // }
    for(let i = 0; i < listOfStrings; i++){
        if(!listOfStrings[i].includes(stringToSearch)){
            resultArray.push(listOfStrings[i]);
        }
    }

    return resultArray;
}

// Result
console.log(searchString(listOfStrings, stringToSearch));