for(let i = 0; i < 100 ; i++){
    for(let j= 0; j < 100; j++){
        let firstCouple = i < 10 ? `0${i}` : i;
        let secondCouple = j < 10 ? `0${j}` : j;
        console.log(`${firstCouple} ${secondCouple}`);
    }
}