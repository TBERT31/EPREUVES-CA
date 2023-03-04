// Contrôle d'entrée
if(process.argv.length < 4 ||  isNaN(parseInt(process.argv[2])) || isNaN(parseInt(process.argv[3]))){
    console.log("error");
    return;
}

let arrayNumber = [];

for(let i = 2; i < process.argv.length; i++){
    if(isNaN(parseInt(process.argv[i]))){
        console.log("error");
        return;
    }else{
        arrayNumber.push(parseInt(process.argv[i]));
    }
}



let absoluteMin = Math.abs(arrayNumber[0] - arrayNumber[1]);


// Parsing
for(let i = 0 ; i < arrayNumber.length; i++){
    for(let j = 0; j < arrayNumber.length; j++){
        //Traitement
        if(Math.abs(arrayNumber[i] - arrayNumber[j]) < absoluteMin && i!==j){
            absoluteMin = Math.abs(arrayNumber[i] - arrayNumber[j]);
        }
    }
}


// Result
console.log(absoluteMin);
