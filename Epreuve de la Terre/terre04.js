//Variable
let number = parseInt(process.argv[2]);

//Input control
if(process.argv[2] === null || process.argv[2] === undefined || isNaN(number)){
    console.log('Tu ne me la mettras pas à l\'envers');
    return;
}


//Return
if(number % 2){
    console.log("impair");
}else{
    console.log("pair");
}