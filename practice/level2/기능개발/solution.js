function solution(progresses, speeds) {
    for(let i=0; i<progresses.length; i++){
        progresses[i] = Math.ceil((100-progresses[i])/speeds[i])
        
    }
    let maxday = progresses[0]
    let arr = [0]
    for(let i=0; i<progresses.length; i++){
        if(maxday>=progresses[i]) {
            arr[arr.length-1]++
        }else {
            maxday=progresses[i]
            arr.push(1)
        }
    }
    return arr
}

let progresses = [93, 30, 55]
let speeds = [1, 30, 5]
console.log(solution(progresses, speeds))