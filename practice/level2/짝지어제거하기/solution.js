function solution(s){
    let arr = []
    for(let i=0; i<s.length; i++){
        arr.push(s[i])
        if(arr[s.length-1]===arr[s.length-2]) {
            arr.pop()
            arr.pop()
        }
    }
    return arr[0] ? 0 : 1
}

let s = "baabaa"
console.log(solution(s))