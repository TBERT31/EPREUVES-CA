//Input control
if(process.argv.length !== 4 || isNaN(parseInt(process.argv[2])) || isNaN(parseInt(process.argv[3])) ){
    console.log("erreur.");
    return;
}

//Variables
let number = process.argv[2];
let power = process.argv[3];

//Return
console.log(number**power);