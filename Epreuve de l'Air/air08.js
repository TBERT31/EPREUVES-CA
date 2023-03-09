// Control Input
if(process.argv.length < 5 ){
    console.log("At least three argument please, two sorted list and \"fusion\"");
    return;
}


let firstListOfNumber = [];
let firstListOfNumberSorted = [];
let secondListOfNumber = [];
let secondListOfNumberSorted = [];
let indexFusion;

if(process.argv.indexOf("fusion") !== -1){
    indexFusion = process.argv.indexOf("fusion");
}else{
    console.log("We need to have the \"fusion\" in the argument list");
    return;
}


for(let i = 2; i < indexFusion;i++){

    if(isNaN(parseInt(process.argv[i]))){
        console.log("error, arguments must be number only (except fusion)");
        return;
    }

    firstListOfNumber.push(parseInt(process.argv[i]));
    firstListOfNumberSorted.push(parseInt(process.argv[i]));
}

firstListOfNumberSorted.sort(function(a, b) {
    return a - b;
});

for(let j = 0; j<firstListOfNumberSorted.length; j++){
    if(listOfNumber[j] !== firstListOfNumberSorted){
        console.log("error, you list of array is not sorted");
        return;
    }
}

for(let i = indexFusion+1; i < process.argv.length-1;i++){

    if(isNaN(parseInt(process.argv[i]))){
        console.log("error, arguments must be number only (except fusion)");
        return;
    }

    secondListOfNumber.push(parseInt(process.argv[i]));
    secondListOfNumberSorted.push(parseInt(process.argv[i]));
}

secondListOfNumberSorted.sort(function(a, b) {
    return a - b;
});

for(let j = 0; j<secondListOfNumberSorted.length; j++){
    if(listOfNumber[j] !== secondListOfNumberSorted){
        console.log("error, you list of array is not sorted");
        return;
    }
}


// Parsing
function mergeAndSortList(array1, array2){
    let resultArray = array1.concat(array2);

    resultArray.sort(function(a, b) {
        return a - b;
    });

    return resultArray;
}

// Result
console.log( mergeAndSortList(firstListOfNumber, secondListOfNumber) );