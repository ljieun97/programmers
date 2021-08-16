function solution(scores) {
    let result = ''
    let average = 0
    for(let i=0; i<scores.length; i++){
        let max = -1
        let min = 101
        let sum = 0
        let leng = scores.length
        for(let j=0; j<scores.length; j++){
            max=Math.max(max, scores[j][i])
            min=Math.min(min, scores[j][i])
            sum+=scores[j][i]
        }
        let maxcount = 0
        let mincount = 0
        for(let j=0; j<scores.length; j++){
            if(scores[j][i]===max) { maxcount++ 
            } else if(scores[j][i]===min) mincount++
        }
        if((maxcount===1&&max===scores[i][i])|(mincount===1&&min===scores[i][i])) {
            sum-=scores[i][i]
            leng--
        }
        average=sum/leng
        if (average>=90) {
            result+='A'
        } else if (average<90 && average>=80) {
            result+='B'
        } else if (average<80 && average>=70) {
            result+='C'
        } else if (average<70 && average>=50) {
            result+='D'
        } else if (average<50){
            result+='F'
        } 
    }
    return result
}

let scores = [[100, 90, 98, 88, 65], [50, 45, 99, 85, 77], [47, 88, 95, 80, 67], [61, 57, 100, 80, 65], [24, 90, 94, 75, 65]]
console.log(solution(scores))