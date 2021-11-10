let arr = [12, 13, 22, 23, 24, 33, 34, 35, 36, 37, 44, 45, 46, 47, 55, 56, 57, 63]

for(let i = 0; i<arr.length; i++){
    if(arr[i] == 34){
        arr.splice(i, 1)
    }
}

console.log(arr);