// Contrôle d'entré
if(process.argv.length < 4 ){
    console.log("-1");
    return;
}

let phrase = [];

for(let i = 2; i < process.argv.length-1; i++){
    phrase.push(process.argv[i])
}

let response = phrase.indexOf(process.argv[process.argv.length-1]);


console.log(response);