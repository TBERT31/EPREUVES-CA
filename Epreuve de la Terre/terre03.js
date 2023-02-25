const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

let startLetter = process.argv[2].toLowerCase();
// let testNumber = parseInt(process.argv[2]);

if(process.argv[2].length > 1){
    console.log("Veuillez choisir une lettre en Argument");
}else if(/*testNumber !== 'NaN'*/ ['0','1','2','3','4','5','6','7','8','9'].indexOf(process.argv[2]) === -1 ){
    console.log("Veuillez choisir une lettre en Argument");
}

let startIndex = alphabet.indexOf(startLetter);

let output = '';
for(let i = startIndex; i<alphabet.length; i++){
    output += alphabet[i];
}

output += '\n';

console.log(output);