function solution(arr) {
    if (arr.length===1) return [-1]
    arr.splice(arr.indexOf(Math.min(...arr)), 1)
    return arr
}

let arr = [4, 3, 2, 1]
console.log(solution(arr))