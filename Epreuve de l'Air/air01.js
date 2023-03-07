// Output control
if(process.argv.length !== 4 ){
    console.log("Two argument please, a string to Cut + a separator");
    return;
}

let stringToCut = process.argv[3];

let separator = process.argv[4];

// Parsing
function cutString(stringToCut, separator){
    let newArr = stringToCut.split(separator);

    for(let i = 0; i < newArr.length; i++){
        console.log(newArr[i]);
    }
}

// Return
cutString(stringToCut, separator);