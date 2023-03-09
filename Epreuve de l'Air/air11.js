// Input control
if(process.argv.length !== 4 ){
    console.log("two argument please, first: character - second: number");
    return;
}

if(isNaN(parseInt(process.argv[3]))){
    console.log("Please prompt a number in second argument");
    return;
}

// Parsing
function pyramid(char, num) {
    for (let i = 1; i <= num; i++) {
      let row = '';
      for (let j = 1; j <= num - i; j++) {
        row += ' ';
      }
      for (let k = 1; k <= 2 * i - 1; k++) {
        row += char;
      }
      console.log(row);
    }
  }
  
  // Return
  console.log(pyramid(process.argv[2], parseInt(process.argv[2])));