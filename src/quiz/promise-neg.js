const array2D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, -9]
];

let promises = [];

array2D.forEach((row) => {
    const negPromise = new Promise((resolve, reject) => {
        if (row.filter((num) => num < 0).length > 0) {
            resolve(row)
        }
    });
    promises.push(negPromise);
});

Promise.any(promises)
.then((response) => {
    console.log(`Negative Row: ${response}`);
});
