// Output control
if(process.argv.length !== 3 ){
    console.log("Only one argument please, a string to Cut");
    return;
}

let stringToCut = process.argv[2];


// Parsing
function cutString(stringToCut){
    let newArr = stringToCut.split(/[\s\t\n]+/);

    for(let i = 0; i < newArr.length; i++){
        console.log(newArr[i]);
    }
}


// Return
cutString(stringToCut);
