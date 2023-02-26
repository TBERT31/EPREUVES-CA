if(process.argv.length !== 4 || isNaN(parseInt(process.argv[2])) || isNaN(parseInt(process.argv[3])) ){
    console.log("erreur.");
    return;
}

let number = process.argv[2];
let power = process.argv[3];

console.log(number**power);