function solution1(s) {
    let number = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
    
    for(let i=0; i<number.length; i++){
        s=s.split(number[i]).join(i)
    }
    return Number(s)
}

function solution2(s) {
    return Number(s.replace(/zero/g,0).replace(/one/g,1).replace(/two/g,2).replace(/three/g,3).replace(/four/g,4).replace(/five/g,5).replace(/six/g,6).replace(/seven/g,7).replace(/eight/g,8).replace(/nine/g,9))
}

let s = "one4seveneight"
console.log(solution1(s))
console.log(solution2(s))