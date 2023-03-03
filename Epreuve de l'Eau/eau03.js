// Definition :
//F0 = 0; F1= 1; FN = FN-1 + FN-2 Pour n >= 2

// Contrôle d'entré
if(process.argv.length > 3 || isNaN(parseInt(process.argv[2])) || parseInt(process.argv[2]) < 0){
    console.log("Please send only one positive number in argument");
    return;
}

// Parsing
function Fibonacci(n) {
    let fib = [0, 1];
    for (var i = 2; i < n; i++) {
      fib[i] = fib[i-1] + fib[i-2];
    }
    return fib[fib.length-1] + fib[fib.length-2];
}

// Return
let FN = Fibonacci(parseInt(process.argv[2]));

console.log(FN);