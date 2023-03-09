const fs = require('fs');

// Récupérer le nom de fichier donné en argument
const fileName = process.argv[2];

// Vérifier si un nom de fichier a été donné en argument
if (!fileName) {
  console.error('Veuillez fournir un nom de fichier en argument.');
  process.exit(1);
}

// Lire le contenu du fichier et l'afficher dans la console
fs.readFile(fileName, 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(data);
});