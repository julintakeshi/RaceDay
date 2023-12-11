// 1
let raceNumber = Math.floor(Math.random() * 1000);

// 2
let registeredEarly = true; // Variável booleana indicando se o corredor se registrou cedo.

// 3
let runnerAge = 25; // Idade do corredor.

// 4
if (runnerAge > 18 && registeredEarly) {
  raceNumber += 1000;
}

// 5
if (runnerAge > 18 && registeredEarly) {
  console.log(Corredor com número ${raceNumber} correrá às 9h30.);
} 

// 6
else if (runnerAge > 18 && !registeredEarly) {
  console.log(Corredor com número ${raceNumber} correrá às 11h00.);
} 

// 7
else if (runnerAge < 18) {
  console.log(Corredor com número ${raceNumber} correrá às 12h30.);
} 

// 8
// Insira diferentes combinações de valores para registeredEarly e runnerAge e execute o código para verificar as declarações impressas no conso…