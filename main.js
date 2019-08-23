// BUBBLE SORT

function bub(arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length - i; j++) {
            if (arr[j] > arr[j + 1]) {
                var tmp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = tmp
            }
        }
    }
    return arr
}

// INSERTION SORT

function insert(arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = i - 1; j > -1; j--) {
            var tmp = arr[j + 1]
            if (arr[j] > tmp) arr[j + 1] = arr[j], arr[j] = tmp
            else break
        }
    }
    return arr
}


console.log(insert([33, 6, 1, 4, 5]))