// Contrôle d'entré
if(process.argv.length !== 4 ||  isNaN(parseInt(process.argv[2])) || isNaN(parseInt(process.argv[3]))){
    console.log("error");
    return;
}

// Parsing
function minMax(n1, n2){
    let min;
    let max;

    if(n1<=n2){
        min = n1;
        max = n2;
    }else{
        min = n2;
        max = n1;
    }

    let resultArray = [];
    for(let i = min; i <= max; i++){
        resultArray.push(i);
    }

    return resultArray;
}

// Result
console.log(minMax(parseInt(process.argv[2]), parseInt(process.argv[3])))