// Contrôle d'entré
if(process.argv.length !== 4){
    console.log("error");
    return;
}

let myString = process.argv[2];
let searchString = process.argv[3];

let index = myString.indexOf(searchString);

if (index !== -1) {
  console.log(true);
} else {
  console.log(false);
}