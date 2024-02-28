const array2D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let promises = [];

array2D.forEach((row) => {
    const sumPromise = new Promise((resolve, reject) => {
        sum = 0;
        row.forEach((num) => sum += num);
        resolve(sum);
    });
    promises.push(sumPromise);
});

Promise.all(promises)
.then((responses) => {
    sum = 0;
    responses.forEach((num) => sum += num);
    console.log(`2D Array Sum: ${sum}`);
})
.catch((error) => console.log(error));
