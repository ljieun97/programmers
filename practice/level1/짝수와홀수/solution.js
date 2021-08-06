function solution1(num) {
    if (num%2===1||num%2===-1) return "Odd"
    if (num%2===0||num===0) return "Even"
}

function solution2(num) {
    return num%2 ? "Odd" : "Even"
}

let num = 3
console.log(solution1(num))
console.log(solution2(num))