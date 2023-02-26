// Define variables
let n1 = parseInt(process.argv[2]);
let n2 = parseInt(process.argv[3]);
let n3 = parseInt(process.argv[4]);

let threeNumber = [n1,n2,n3];

// Input control
if(process.argv.length !== 5 || isNaN(n1) || isNaN(n2) || isNaN(n3)){
    console.log("Pour les arguments, vous devez saisir 3 nombres");
    return;
}

if(n1 === n2 || n2 === n3 || n3 === n1){
    console.log("erreur");
    return;
}

// Treatment 
function findSwissLand(array){
    let sortedArray = array.sort(function(a, b) {
        return a - b;
    });
    console.log(sortedArray)
    console.log(sortedArray[1]);
}

// Result
findSwissLand(threeNumber);