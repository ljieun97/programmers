function solution(x, n) {
    var arr = []
    for(var i=1; i<=n; i++) arr.push(i*x)
    return arr
}

let x = 2
let n = 5
console.log(solution(x, n))