function finder (i) {
    for (x = 2; x <= i/2; x++) if (i % x == 0) return (1);
    return (0);
}

function countPrimeNumbers () {
    const listy = [];
    for (i = 2; i <= 100; i++) if (!finder(i)) listy.push(i);
    return listy;
}

const t0 = performance.now();
for (let n = 0; n < 100; n++) setTimeout(function() { countPrimeNumbers(); }, n);
const t1 = performance.now();
console.log(`Execution time of printing countPrimeNumbers was ${t1 - t0} milliseconds.`);
