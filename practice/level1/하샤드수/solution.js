function solution(x) {
    var arr = String(x).split("")
    var sum = 0
    for(var i=0; i<arr.length; i++) sum += arr[i]*1
    return x%sum===0
}

let x = 10
console.log(solution(x))