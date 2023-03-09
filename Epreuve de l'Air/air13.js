const fs = require('fs');
const { spawn } = require('child_process');

const exercises = [
  'air00.js',
  'air01.js',
  'air02.js',
  // ajoutez tous les noms de fichiers d'exercice ici
];

let successes = 0;
let failures = 0;

exercises.forEach((exercise, index) => {
  const filePath = `./exercises/${exercise}`;

  if (fs.existsSync(filePath)) {
    const testProcess = spawn('node', [filePath]);

    testProcess.stdout.on('data', (data) => {
      console.log(`${exercise} (${index + 1}/${exercises.length}) : ${data.toString().trim()}`);
      if (data.toString().includes('success')) {
        successes++;
      } else {
        failures++;
      }
    });

    testProcess.stderr.on('data', (data) => {
      console.error(`${exercise} (${index + 1}/${exercises.length}) : error - ${data.toString().trim()}`);
      failures++;
    });
  } else {
    console.error(`${exercise} (${index + 1}/${exercises.length}) : error - file not found`);
    failures++;
  }
});

setTimeout(() => {
  console.log(`Total success: (${successes}/${successes + failures})`);
}, 1000);