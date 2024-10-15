function permutationSort(a) {
    if (isSorted(a)){
        return 1;
    }
    permCount = 1;
    n = a.length;
    c = new Array(n);
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
