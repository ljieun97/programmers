function solution(s) {
    let arr = []
    s=s.split(" ")
    for(let i=0; i<s.length; i++){
        for(let j=0; j<s[i].length; j++){
            j%2 ? arr.push(s[i][j].toLowerCase()) : arr.push(s[i][j].toUpperCase())
        }
        arr.push(" ")
    }
    arr.pop()
    return arr.join("")
}

let s = "try hello world"
console.log(solution(s))