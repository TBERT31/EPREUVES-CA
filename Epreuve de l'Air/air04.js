// Control Input
if(process.argv.length !== 3 ){
    console.log("Only one argument please");
    return;
}

let stringToCheck = process.argv[2];

// Parsing
function onlyOneAtATime(stringToCheck){
    for(let i = 0; i < stringToCheck.length; i++){
        for(let j = 0; j <stringToCheck.length-1; j++ ){
            if(i === j+1 && stringToCheck[j] === stringToCheck[i]){
                stringToCheck = stringToCheck.slice(0, i) + stringToCheck.slice(i+1);
            }
        }
    }

    return stringToCheck;
}

// Return 
console.log(onlyOneAtATime(stringToCheck));