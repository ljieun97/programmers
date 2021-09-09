function solution(cacheSize, cities) {
    if(cacheSize===0) return cities.length*5
    let count = 0
    let arr = []
    cities=cities.map((a)=>a.toLowerCase())
    
    for(let i=0; i<cities.length; i++){
        if(arr.length<cacheSize){
            //같은게있으면
            for(let j=0; j<arr.length; j++){
                if(cities[i]===arr[j]){
                    //같은거삭제
                    arr.splice(j, 1)
                    //새거삽입
                    arr.push(cities[i])
                    break
                }
            }
            //같은게없으면
            if(arr[arr.length-1]!==cities[i]){
                arr.push(cities[i])
                count++
            }

        }else{
            //같은게있으면
            for(let j=0; j<arr.length; j++){
                if(cities[i]===arr[j]){
                    //같은거삭제
                    arr.splice(j, 1)
                    //새거삽입
                    arr.push(cities[i])
                    break
                }
            }

            //같은게없으면
            //맨앞거삭제
            if(arr[arr.length-1]!==cities[i]){
                arr.shift()
                arr.push(cities[i])
                count++
            }
        
        }
    }

    
    return count*5+cities.length-count
}

console.log(solution(3, ["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "Jeju", "Pangyo", "Seoul", "NewYork", "LA"]))
console.log(solution(3, ["Jeju", "Pangyo", "Seoul", "Jeju", "Pangyo", "Seoul", "Jeju", "Pangyo", "Seoul"]))
console.log(solution(2, ["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "SanFrancisco", "Seoul", "Rome", "Paris", "Jeju", "NewYork", "Rome"]))
console.log(solution(5, ["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "SanFrancisco", "Seoul", "Rome", "Paris", "Jeju", "NewYork", "Rome"]))
console.log(solution(2, ["Jeju", "Pangyo", "NewYork", "newyork"]))
console.log(solution(0, ["Jeju", "Pangyo", "Seoul", "NewYork", "LA"]))