const filePath = __filename;
const dirPath = __dirname;

let fileName = filePath.replace(__dirname,'');
fileName = fileName.substring(1,fileName.length)

console.log(fileName);