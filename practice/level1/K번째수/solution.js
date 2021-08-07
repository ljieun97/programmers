function solution(array, commands) {
    let arr = []
    for(let x=0; x<commands.length; x++){
        let i = commands[x][0]
        let j = commands[x][1]
        let k = commands[x][2]
        arr.push(array.slice(i-1, j).sort((a,b)=>a-b)[k-1])
    }
    return arr
}

let array = [1, 5, 2, 6, 3, 7, 4];
let commands = [[2, 5, 3], [4, 4, 1], [1, 7, 3]];
console.log(solution(array, commands))