if(process.argv.length < 4 ){
    console.log("error");
    return;
}

let arrayNumber = [];

for(let i = 2; i < process.argv.length; i++){
    arrayNumber.push(process.argv[i]);
}

function asciiSort(arr) {
    return arr.sort();
  }
  
  console.log(asciiSort(arrayNumber));