function solution(n) {
    var result = ''
    for(var i=1; i<=n; i++){
        i%2 ? result+='수': result+='박'
    }
    return result
}

let n = 3
console.log(solution(n))