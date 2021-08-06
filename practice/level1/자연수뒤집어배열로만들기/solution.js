function solution(n) {
    var arr = (n+"").split('').reverse()
    for (var i=0; i<arr.length; i++)
        arr[i]=arr[i]*1
    return arr
}

let n = 12345
console.log(solution(n))