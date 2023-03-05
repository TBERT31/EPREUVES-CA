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



function my_select_sort(arr) {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
      let min = i;
      for (let j = i + 1; j < len; j++) {
        if (arr[j] < arr[min]) {
          min = j;
        }
      }
      if (i !== min) {
        let temp = arr[i];
        arr[i] = arr[min];
        arr[min] = temp;
      }
    }
    return arr;
  }

  console.log(my_select_sort(arrayNumber));