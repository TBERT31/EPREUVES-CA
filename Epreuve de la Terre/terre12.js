// Variables
let hours = parseInt(process.argv[2].substring(0,2));
let separator = process.argv[2].substring(2,3);
let minutes = parseInt(process.argv[2].substring(3,5));
let meridiem = process.argv[2].substring(5,8);


// input control
if(process.argv.length !== 3 || isNaN(hours) || isNaN(hours) || separator !== ":" || ["AM","PM"].indexOf(meridiem) === -1 || hours < 0 || minutes < 0){
    console.log("error, you must enter the time in 12h format, example : 00:00AM or 11:59PM");
    return;
}

if(hours > 12){
    console.log("Il n'y a que 12h dans une demi-journée");
    return;
}

if(minutes > 59){
    console.log("Il n'y a que 60 minutes dans une heure");
    return;
}

// Resolution
function transform12To24(hours, minutes){
    if(meridiem === "AM"){
        console.log(`${hours < 10 ? `0${hours}` : hours}:${minutes<10 ? `0${minutes}` : minutes}`);
    }else if(meridiem === "PM"){
        console.log(`${hours+12}:${minutes<10 ? `0${minutes}` : minutes}`);
    }
}

// return
transform12To24(hours,minutes);