const array = [0, 3, 2, 10, 1, 4, -6, 8, 3];

function quick_sort(array) {
    if (array.length <= 1) {
        return array;
    }

    let half = Math.round(array.length / 2);

    let small = [];
    let big = [];

    for (let i = 0; i < array.length; i++) {
        if (i === half) {
            continue;
        }
        if (array[i] < array[half]) {
            small.push(array[i]);
        } else {
            big.push(array[i]);
        }
    }

    return [...quick_sort(small), array[half], ...quick_sort(big)];
}

console.log(quick_sort(array));