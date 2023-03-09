// Input control
if(process.argv.length < 4 ){
    console.log("At least two argument please");
    return;
}

let listToRotate = [];

for(let i = 2; i < process.argv.length; i++){
    listToRotate.push(process.argv[i]);
}

// Parsing
function leftRotation(array){
    const firstElement = array.shift();

    array.push(firstElement);

    return array;
}

// Result
console.log(leftRotation(listToRotate));