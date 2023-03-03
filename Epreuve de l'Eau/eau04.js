// Contrôle d'entré
if(process.argv.length > 3 || isNaN(parseInt(process.argv[2])) || parseInt(process.argv[2]) < 0){
    console.log("Please send only one positive number in argument");
    return;
}


// Test si le nombre est premier
function isPrime(n) {
    if (n <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  }
  
// Obtient le nomber premier suppérieur à n
function getNextPrime(n) {
    let next = n + 1;
    while (!isPrime(next)) {
        next++;
    }
    return next;
}

// Return
let numberArg = parseInt(process.argv[2]);

let nextPrime = getNextPrime(numberArg);

console.log(nextPrime);