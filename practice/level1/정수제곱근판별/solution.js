function solution(n) {
    var x=Math.sqrt(n)
    if (x%1!==0) return -1
    return Math.pow(x+1, 2)
}

let n = 121
console.log(solution(n))