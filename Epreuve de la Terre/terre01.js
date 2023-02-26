//Variables
const filePath = __filename;
const dirPath = __dirname;

//Resultion
let fileName = filePath.replace(__dirname,'');
fileName = fileName.substring(1,fileName.length)

//Return
console.log(fileName);