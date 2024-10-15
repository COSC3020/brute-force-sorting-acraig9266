function permutationSort(a) {
    permCount = 0;
        for (i = 0; i < n; i++){
            c[i] = 0;
        }
        i = 0;
        while (i < n){
            permCount += 1;
            if (c[i] < i){
                if(i % 2){
                    swap(a[0], a[i]);
                } else {
                    swap(a[c[i]], a[i]);
                }
                c[i]++;
                i = 1; 
            } else {
                c[i] = 0;
                i++;
            }
            if(isSorted(a) == true){
                break;
            }
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
