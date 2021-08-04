function solution(arr, divisor) {
    var newa = []
    for(var i=0; i<arr.length; i++){
        if(arr[i]%divisor===0)
            newa.push(arr[i])
    }
    return newa.length ? newa.sort((a,b)=>a-b) : [-1]
}

let arr = [5, 9, 7, 10]
let divisor = 5
console.log(solution(arr, divisor))