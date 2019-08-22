// BUBBLE SORT

function bub(arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length - i; j++) {
            if (arr[j] > arr[j + 1]) {
                var temporarilyStored = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temporarilyStored
            }
        }
    }
    return arr
}