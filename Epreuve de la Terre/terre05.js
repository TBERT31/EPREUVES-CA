let dividend = parseInt(process.argv[2]);

let divider = parseInt(process.argv[3]);

if(divider === 0 || dividend < divider || process.argv[2] === null || process.argv[2] === undefined || isNaN(dividend) || process.argv[3] === null || process.argv[3] === undefined || isNaN(divider)){
    console.log("erreur.");
    return;
}


let quotient = Math.trunc(dividend/divider);

let rest = dividend % divider;


console.log(`resultat: ${quotient}`);
console.log(`reste: ${rest}`);