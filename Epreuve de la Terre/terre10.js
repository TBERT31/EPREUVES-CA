if(process.argv.length !== 3 || isNaN(parseInt(process.argv[2])) ){
    console.log("erreur.");
    return;
}

let number = parseInt(process.argv[2]);

function estUnNombrePremier(n) {
    if (n <= 1) {
        console.log(`Le paramètre doit être suppérieur à 1.`)
        return;
    }

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
        console.log(`Non, ${n} n'est pas un nombre premier.`)
        return;
        }
    }

    console.log(`Oui, ${n} est un nombre premier.`)
}
  
estUnNombrePremier(number);

