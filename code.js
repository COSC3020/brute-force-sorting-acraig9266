function permutationSort(a) {
    permCount = 0;
    while (isSorted(a) = false) {
        a = newPerm(a, permCount);
        permCount += 1;
    }
    return permCount;
}

function isSorted(array){
    for(i = 0; i < array.length; i++){
        if (array[i] > array[i + 1]){
            return false;
        }
    }
    return true;
}

function newPerm(array, n){
    for(i = 0; i < array.length; i++){
        
    }
}
