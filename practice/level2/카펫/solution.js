function solution1(brown, yellow) {
    let a = (4+brown)/2
    let b = Math.sqrt(Math.pow(a, 2)-4*(yellow+brown))
    return [(a+b)/2, (a-b)/2]
}
function solution2(brown, yellow) {
    for(var h=3; h<=(brown+yellow)/h; h++){
        var w = (brown+yellow)/h
        if((w-2)*(h-2)===yellow)
            break;
    }
    return [w, h]
}

let brown = 10
let yellow = 2
console.log(solution1(brown, yellow))
console.log(solution2(brown, yellow))
