// BUBBLE SORT

function bubbleSort(arr) {
    for (var i = 0; i < arr.length; i++) {
        let swapped = false
        for (var j = 0; j < arr.length - i; j++) {
            if (arr[j] > arr[j + 1]) {
                swapped = true
                var tmp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = tmp
            }
        }
        if(!swapped) return arr
    }
    return arr
}









// INSERTION SORT

function insertionSort(arr) {
    for (var i = 1; i < arr.length; i++) {
        for (var j = i - 1; j > -1; j--) {
            var tmp = arr[j + 1]
            if (arr[j] > tmp) arr[j + 1] = arr[j], arr[j] = tmp
            else break
        }
    }
    return arr
}

// QUICK SORT

function quickSort(arr) {
    if (arr.length < 2) return arr

    let pivot = arr.pop()
    let [left, right] = [[], []]

    arr.forEach(e => e >= pivot ? right.push(e) : left.push(e))

    return [...quickSort(left), pivot, ...quickSort(right)]
}

// MERGE SORT

function mergeSort(arr) {
    if (arr.length < 2) return arr

    let m = Math.floor(arr.length / 2)
    let left = arr.slice(0,m)
    let right = arr.slice(m,arr.length)

    return helper(mergeSort(left), mergeSort(right))
}

function helper(left, right) {
    let res = []

    while(left.length && right.length){
        left[0] < r[0]
        ? res.push(left.shift())
        : res.push(right.shift())
    }

    return res.concat(left).concat(right)
}