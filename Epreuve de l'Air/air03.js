// Control Input
if(process.argv.length < 3 ){
  console.log("At least two argument please");
  return;
}

let arrayToCheck = [];

for(let i = 2; i < process.argv.length-1; i++){
  arrayToCheck.push(process.argv[i]);
}

// Parsing
function removeDuplicates(arr) {
  return arr.filter((value, index) => arr.indexOf(value) !== index);
}


// Return
console.log(removeDuplicates(arrayToCheck)); 