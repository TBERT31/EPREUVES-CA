if(process.argv.length < 4 ||  isNaN(parseInt(process.argv[2])) || isNaN(parseInt(process.argv[3]))){
    console.log("error");
    return;
}

let arrayNumber = [];

for(let i = 2; i < process.argv.length; i++){
    if(isNaN(parseInt(process.argv[i]))){
        console.log("error");
        return;
    }else{
        arrayNumber.push(parseInt(process.argv[i]));
    }
}



function my_bubble_sort(arr) {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
      for (let j = 0; j < len - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
    return arr;
  }

  console.log(my_bubble_sort(arrayNumber));