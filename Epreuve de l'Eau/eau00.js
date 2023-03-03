// On prend tous les nombres de 0 à 999 par défaut, il y aura forcément tous les triplets dedans
let triple = [];
for(let i = 0 ; i < 1000 ; i++){
    if(i<10){
        triple.push(`00${i}`);
    }else if(i<100){
        triple.push(`0${i}`);
    }else{
        triple.push(`${i}`);
    }
}

// On vien réordonner les triplets, afin qu'il sois tous dans l'ordre croissant
for(let j = 0; j < triple.length; j++){
    let tempArray = [];
    let finalStr = '';
    tempArray.push(triple[j].split(''));

    finalStr = tempArray.join("").replace(/,/g,"");
    triple.splice(j, 1, finalStr);

}

// On vire lorsqu'il y a deux valeur identique ou que ce n'est pas classé dans l'ordre croissant (ça dégage les duplicate)
let filteredTriple = triple.filter(elmt => elmt[0] < elmt[1] && elmt[1] < elmt[2]);

// Result
console.log(filteredTriple);