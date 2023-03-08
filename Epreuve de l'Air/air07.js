// Control Input
if(process.argv.length < 4 ){
    console.log("At least two argument please, numbers + an operation");
    return;
}


let listOfNumber = [];
let listOfNumberSorted = [];

for(let i = 2; i < process.argv.length-1;i++){

    if(isNaN(parseInt(process.argv[i]))){
        console.log("error, arguments must be number only");
        return;
    }

    listOfNumber.push(parseInt(process.argv[i]));
    listOfNumberSorted.push(parseInt(process.argv[i]));
}

listOfNumberSorted.sort(function(a, b) {
    return a - b;
});

for(let j = 0; j<listOfNumberSorted.length; j++){
    if(listOfNumber[j] !== listOfNumberSorted){
        console.log("error, you list of array is not sorted");
        return;
    }
}

let numberToInsert;

if(isNaN(parseInt(process.argv[process.argv.length-1]))){
    console.log("error, arguments must be number only");
    return;
}else{
    numberToInsert = parseInt(process.argv[process.argv.length-1]);
}

// Parsing
function insertInSortedArray(array, number){
    for(let i = 0; i < array.length-1; i++){
        if(array[i]<=number && array[i+1]>=number){
            array.splice(i, 0, number);
        }
    }

    return array;
}

// Result
console.log( insertInSortedArray(listOfNumber, numberToInsert) );