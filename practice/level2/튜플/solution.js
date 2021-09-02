function solution(s) {
    s=s.replace("{{", "").replace("}}", "").split("},{")
        .sort((a,b)=>a.length < b.length ? -1 : 1)
        .join().split(',')
    let arr1 = [...new Set(s)]
    let arr2 = []
    for(let i=0; i<arr1.length; i++){
        arr2.push(Number(arr1[i]))
    }
    return arr2
}

console.log(solution("{{2},{2,1},{2,1,3},{2,1,3,4}}"))
console.log(solution("{{1,2,3},{2,1},{1,2,4,3},{2}}"))
console.log(solution("{{20,111},{111}}"))
console.log(solution("{{123}}"))
console.log(solution("{{4,2,3},{3},{2,3,4,1},{2,3}}"))