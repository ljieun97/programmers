function solution(word) {
    let result = 0
    let arr = [781, 156, 31, 6, 1]
    word=word.split("")
    for(let i=0; i<word.length; i++){
        if(word[i]==='A'){
            result+=arr[i]*0+1
        }else if(word[i]==='E'){
            result+=arr[i]*1+1
        }else if(word[i]==='I'){
            result+=arr[i]*2+1
        }else if(word[i]==='O'){
            result+=arr[i]*3+1
        }else {
            result+=arr[i]*4+1
        }
    }
    return result
}

console.log(solution("AAAAE"))
console.log(solution("AAAE"))
console.log(solution("I"))
console.log(solution("EIO"))