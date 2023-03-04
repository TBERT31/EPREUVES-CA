// Contrôle d'entré
if(process.argv.length !== 3 ||  !isNaN(parseInt(process.argv[2])) ){
    console.log("error");
    return;
}

// Parsing
function returnStringMajMin(str){
    let transformedStr = "";
    for(let i = 0; i < str.length; i++){
        if(i % 2 === 0){
            transformedStr += str[i].toUpperCase();
        }else{
            transformedStr += str[i].toLowerCase();
        }
    }
    return transformedStr;
}

let transformStr = returnStringMajMin(process.argv[2]);

// Return
console.log(transformStr);