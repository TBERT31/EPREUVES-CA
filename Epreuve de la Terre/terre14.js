// Define variables
const sortedList = [];
const startList = [];

for(let i = 2; i<process.argv.length; i++){
    if(!isNaN(parseInt(process.argv[i]))){
        startList.push(parseInt(process.argv[i]));
    }else{
        console.log("Please only number in argument");
        return;
    }
}


for(let i = 2; i<process.argv.length; i++){
    if(!isNaN(parseInt(process.argv[i]))){
        sortedList.push(parseInt(process.argv[i]));
    }else{
        console.log("Please only number in argument");
        return;
    }
}

sortedList.sort(function(a, b) {
    return a - b;
});


// Input control
if(process.argv.length < 2){
    console.log("Please send at least 1 number in argument");
    return;
}

// Treatment 
function checkListSorted(startList, sortedList){
    for(j=0; j<sortedList.length;j++){
        if(startList[j] !== sortedList[j]){
            console.log("Pas triée !");
            return;
        }
    }

    console.log("Triée !");
    // if(startList === sortedList){
    //     console.log(startList);
    //     console.log(sortedList);
    //     console.log("Triée !");
    // }else{
    //     console.log(startList);
    //     console.log(sortedList);
    //     console.log("Pas triée !");
    // }
}

// Result
checkListSorted(startList, sortedList);