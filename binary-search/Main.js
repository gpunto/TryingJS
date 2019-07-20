
function search(what, where) {
    let low = 0;
    let high = where.length - 1;

    while (low <= high) {
        const mid = Math.floor((high + low) / 2);
        const guess = where[mid];
        if (guess == what)
            return mid;
        else if (what < where[mid])
            high = mid - 1;
        else
            low = mid + 1;
    }

    return -1;
}

const arr = [-1, 1, 2, 3, 4, 5, 7, 8, 9];
console.log(search(-1, arr) == 0);
console.log(search(8, arr) == 7);
console.log(search(1, arr) == 1);
console.log(search(120, arr) == -1);
console.log(search(-10, arr) == -1);
console.log(search(10, []) == -1);
console.log(search(1, [1]) == 0);