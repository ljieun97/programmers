function solution(left, right) {
    var sum = 0
    for(var i=left; i<=right; i++){
        var count = 0
        for(var j=1; j<=i; j++)
            if(i%j===0) count++
        if(count%2) sum-=i
        else sum+=i
    }
    return sum
}

let left = 13
let right = 17
console.log(solution(left, right))