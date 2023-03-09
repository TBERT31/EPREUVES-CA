// Input control
if(process.argv.length !== 4 ){
    console.log("At least two number in argument please");
    return;
}

let listOfNumber = [];

for(let i = 0; i < process.argv.length; i++){
    if(isNaN(parseInt(process.argv[i]))){
        console.log("Only number in argument");
        return;
    }
    listOfNumber.push(parseInt(process.argv[i]));
}


// Parsing
function myQuickSort(arr) {
    if (arr.length <= 1) {
      return arr;
    } else {
      const pivot = arr[0];
      const left = [];
      const right = [];
  
      for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
          left.push(arr[i]);
        } else {
          right.push(arr[i]);
        }
      }
  
      return myQuickSort(left).concat(pivot, myQuickSort(right));
    }
  }

// Result 
console.log(myQuickSort(listOfNumber));