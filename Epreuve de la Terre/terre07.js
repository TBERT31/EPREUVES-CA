if(process.argv.length !== 3 || !isNaN(parseInt(process.argv[2]))){
     console.log("erreur.");
     return;
}

console.log(process.argv[2].length);