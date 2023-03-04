// Contrôle d'entré
if(process.argv.length !== 3){
    console.log("error");
    return;
}

// Parsing
function onlyNumber(str){
    if(!isNaN(parseInt(str))){
        return true;
    }else{
        return false;
    }
}

// Result
console.log(onlyNumber(process.argv[2]));