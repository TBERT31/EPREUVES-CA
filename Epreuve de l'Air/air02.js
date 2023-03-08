// Control Input
if(process.argv.length < 4 ){
    console.log("At least three argument please, Strings to concat + a separator");
    return;
}

let arrayToConcat = [];

for(let i = 2; i < process.argv.length-1;i++){
    arrayToConcat.push(process.argv[i]);
}

let separator = process.argv[process.argv.length-1];

// Parsing
function concatString(arrayToConcat, separator){
    let newStr = arrayToConcat.join(separator);

    return newStr;
}


// Return
console.log(concatString(arrayToConcat, separator));