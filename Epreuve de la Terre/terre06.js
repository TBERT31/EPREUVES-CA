if(process.argv.length !== 3){
    // Ici on aurait pu gérer le type et checker simplement que ce sois un string : typeof(process.argv[2]) === "String", mais dans tous les cas le type pas défault est string ...
    console.log("Please only one argument please.");
}

let stringToTurn = process.argv[2];
let stringTurned = ""

for(let i = stringToTurn.length-1;i>=0;i--){
    stringTurned+=stringToTurn[i];
}

console.log(stringTurned);