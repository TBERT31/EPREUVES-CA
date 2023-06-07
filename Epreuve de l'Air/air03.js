// Control Input
if(process.argv.length < 3 ){
  console.log("At least two argument please");
  return;
}

let arrayToCheck = [];

for(let i = 2; i < process.argv.length; i++){
  arrayToCheck.push(process.argv[i]);
}

// Parsing
function findDuplicates(arr){
  let duplicateArr = [];
  let fullArr = [];
  for(let i = 0; i < arr.length; i++){
      if(fullArr.indexOf(arr[i]) === -1){
        fullArr.push(arr[i]);
      }else if(fullArr.indexOf(arr[i]) !== -1){
        fullArr.push(arr[i]);
        duplicateArr.push(arr[i]);
      }
  }
  return duplicateArr;
}


function removeDuplicates(arr) {
  return arr.filter(value => !findDuplicates(arr).includes(value));
}


// Return
console.log(removeDuplicates(arrayToCheck)); 