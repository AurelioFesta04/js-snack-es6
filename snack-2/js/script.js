const squadreDicalcio = [
    { 'nome': "squadra 1", 'puntifatti': 0, 'fallisubiti': 0 },
    { 'nome': "squadra 2", 'puntifatti': 0, 'fallisubiti': 0 },
    { 'nome': "squadra 3", 'puntifatti': 0, 'fallisubiti': 0 },
    { 'nome': "squadra 4", 'puntifatti': 0, 'fallisubiti': 0 },
    { 'nome': "squadra 5", 'puntifatti': 0, 'fallisubiti': 0 },
    { 'nome': "squadra 6", 'puntifatti': 0, 'fallisubiti': 0 },
    { 'nome': "squadra 7", 'puntifatti': 0, 'fallisubiti': 0 },
    { 'nome': "squadra 8", 'puntifatti': 0, 'fallisubiti': 0 },
    { 'nome': "squadra 9", 'puntifatti': 0, 'fallisubiti': 0 },
    { 'nome': "squadra 10", 'puntifatti': 0, 'fallisubiti': 0 },
];

function numeriCasuali() {
    return Math.floor(Math.random() * 50) + 1;
}

function tuttoInUno(squadreDicalcio) {
    const risultati = [];

    for (let i = 0; i < squadreDicalcio.length; i++) {
        let randomPuntiFatti = numeriCasuali();
        let randomFallisubiti = numeriCasuali();

        squadreDicalcio[i].puntifatti = randomPuntiFatti;
        squadreDicalcio[i].fallisubiti = randomFallisubiti;

        risultati.push({
            nome: squadreDicalcio[i].nome,
            puntifatti: squadreDicalcio[i].puntifatti,
            fallisubiti: squadreDicalcio[i].fallisubiti
        });
    }

    console.log(risultati);

    const nomiEFalli = [];

    for (let i = 0; i < risultati.length; i++) {
        nomiEFalli.push({
            nome: risultati[i].nome,
            fallisubiti: risultati[i].fallisubiti
        });
    }

    console.log(nomiEFalli);
}

tuttoInUno(squadreDicalcio);