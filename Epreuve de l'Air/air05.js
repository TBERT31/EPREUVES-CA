// Control Input
if(process.argv.length < 4 ){
    console.log("At least two argument please, numbers + an operation");
    return;
}

let listOfNumber = [];

for(let i = 2; i < process.argv.length-1;i++){

    if(isNaN(parseInt(process.argv[i]))){
        console.log("error, arguments must be number and operation only");
        return;
    }

    listOfNumber.push(parseInt(process.argv[i]));
}


let operator = process.argv[process.argv.length-1].charAt(0);
let regex = /^[+\-\/\*\%]/;


if (!regex.test(operator)) {
    console.log("Operator is not valid !");
    return
} 

let numberToOperate;

if(isNaN(parseInt(process.argv[process.argv.length-1].slice(1)))){
    console.log("Careful after operator, you have to prompt a number");
    return;
}else{
    numberToOperate = parseInt(process.argv[process.argv.length-1].slice(1));
}

// Parsing
function operationOnList(array, operator, number){
    let resultArray = [];
    for(let i = 0; i < array.length; i++){
        let tempOperation = `${array[i]}${operator}${number}`;
        resultArray.push(eval(tempOperation.replace(operator, operator)));
    }
    return resultArray;
}


// Result
console.log(operationOnList(listOfNumber,operator,numberToOperate));