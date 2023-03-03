// Input control
const startList = [];

if(process.argv.length < 2){
    console.log("Please send at least 1 number in argument");
    return;
}


//Parsing
for(let i = 2; i<process.argv.length; i++){

    if(typeof(process.argv[i]) === "string"){
        startList.push(process.argv[i]);
    }else{
        console.log("Please no array or object in argument");
        return;
    }
}


//Result
for(let j = startList.length-1; j >= 0; j--){
    console.log(startList[j]);
}