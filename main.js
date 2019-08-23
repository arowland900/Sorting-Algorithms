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
        console.log(arr[i])
        for (var j = i - 1; j > -1; j--) {
            var tmp = arr[j + 1]
            console.log("ARR J", arr[j], "TMP", tmp)
            if (arr[j] > tmp) {
                // console.log(arr[j], tmp)
                console.log("BEFORE", arr)
                arr[j + 1] = arr[j]
                console.log("DURING", arr)
                arr[j] = tmp
                console.log("AFTER", arr)
            } else {
                console.log('NO HIT', arr)
                break
            }
        }
    }
    return arr
}

console.log(insert([33, 6, 1, 4, 5]))