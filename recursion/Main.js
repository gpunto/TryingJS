
function sum(arr) {
    if (arr.length == 0)
        return 0;
    else
        return arr[0] + sum(arr.slice(1));
}

function count(arr) {
    if (arr.length == 0)
        return 0;
    else
        return 1 + count(arr.slice(1));
}

function max(arr) {
    if (arr.length == 0)
        return undefined;
    else
        return maxH(arr.slice(1), arr[0]);
}

function maxH(arr, current) {
    if (arr.length == 0)
        return current;
    else {
        const head = arr[0];
        if (head > current)
            return maxH(arr.slice(1), head);
        else
            return maxH(arr.slice(1), current);
    }
}

function contained(element, arr) {
    if (arr.length == 0)
        return false;
    else
        return containedH(element, arr, 0, arr.length - 1)
}

function containedH(element, arr, lo, hi) {
    const mid = Math.floor((lo + hi) / 2);

    if (arr[mid] == element)
        return true;
    else if (lo >= hi)
        return false;
    else
        return containedH(element, arr, lo, mid) || containedH(element, arr, mid + 1, hi);
}