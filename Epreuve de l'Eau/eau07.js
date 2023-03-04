// Contrôle d'entré
if(process.argv.length !== 3 ||  !isNaN(parseInt(process.argv[2])) ){
    console.log("error");
    return;
}

// Parsing
function returnStringMaj(str) {
    let newWord = "";
    let spaces = [...str.matchAll(/ /g)].map((match) => match.index);

    for (let i = 0; i < str.length; i++) {
        if (i===0 || spaces.indexOf(i-1) !== -1) {
            newWord += str[i].toUpperCase();
        } else {
            newWord += str[i].toLowerCase();
        }
    }

    return newWord;
}

// Return 
let correctPhrase = returnStringMaj(process.argv[2].toString());
console.log(correctPhrase)
