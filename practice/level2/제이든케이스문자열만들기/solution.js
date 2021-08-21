function solution(s) {
    s=s.split(" ")

    for(let i=0; i<s.length; i++){
        s[i]=s[i].charAt(0).toUpperCase()+s[i].substring(1).toLowerCase()
    }

    return s.join(" ")
}

let s = "3people unFollowed me"
console.log(solution(s))