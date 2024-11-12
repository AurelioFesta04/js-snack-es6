const biciDaCorsa = [
    { nome: "Bici 1", peso: 20 },
    { nome: "Bici 2", peso: 25 },
    { nome: "Bici 3", peso: 20 },
    { nome: "Bici 4", peso: 30 },
    { nome: "Bici 5", peso: 18 },
    { nome: "Bici 6", peso: 25 },
    { nome: "Bici 7", peso: 27 },
    { nome: "Bici 8", peso: 23 },
    { nome: "Bici 9", peso: 26 },
    { nome: "Bici 10", peso: 24 },
];

let lightestBici = biciDaCorsa[0];

for (let i = 0; i < biciDaCorsa.length; i++) {
    let curBici = biciDaCorsa[i];
    if (curBici.peso < lightestBici.peso) {
        lightestBici = curBici;
    }
}
console.log(`La bici con il peso minore è: ${lightestBici.nome} con un peso di ${lightestBici.peso} kg.`);