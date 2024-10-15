function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
}

function permutationSort(arr) {
    perms = 1;
    const n = arr.length;
    const c = new Array(n).fill(0); // Control array initialized to 0
    let i = 0;
    while (i < n) {
        perms++;
        if (c[i] < i) {
            swap(arr, (i % 2 === 0) ? 0 : c[i], i); // Swap based on i's parity
            c[i]++;
            i = 1; // Reset index
        } else {
            c[i] = 0;
            i++; // Move to the next index
        }
        if (isSorted(arr)) {
            return perms;
        }
    }
    return perms;
}

function isSorted(array) {
    for (i = 0; i < array.length; i++) {
        if (array[i] > array[i + 1]) {
            return false;
        }
    }
    return true;
}
