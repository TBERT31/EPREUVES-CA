// Variables
let hours = parseInt(process.argv[2].substring(0,2));
let separator = process.argv[2].substring(2,3);
let minutes = parseInt(process.argv[2].substring(3,5));


// input control
if(process.argv.length !== 3 || isNaN(hours) || isNaN(hours) || separator !== ":" || hours < 0 || minutes <0){
    console.log("error, you must enter the time in 24h format, example : 00:00");
    return;
}

if(hours > 23){
    console.log("Il n'y a que 24h dans une journée");
    return;
}

if(minutes > 59){
    console.log("Il n'y a que 60 minutes dans une heure");
    return;
}

// Resolution
function transform24To12(hours, minutes){
    if(hours > 0 && hours < 12){
        console.log(`${hours < 10 ? `0${hours}` : hours}:${minutes<10 ? `0${minutes}` : minutes}AM`);
    }else if((hours > 12 || (hours===12  && minutes!==0)) && hours < 24){
        console.log(`${hours-12 < 10 ? `0${hours-12}` : hours-12}:${minutes<10 ? `0${minutes}` : minutes}PM`);
    }else if(hours === 0 && minutes === 0){
        console.log(`12:00AM`);
    }else if(hours === 12 && minutes === 0){
        console.log(`12:00PM`);
    }else{
        console.log("erreur.")
    }
}

// Result
transform24To12(hours,minutes);
