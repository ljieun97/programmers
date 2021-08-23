function solution(clothes) {
    let result = 1
    let arr1 = []
    for(let i=0; i<clothes.length; i++){
        arr1.push(clothes[i][1])
    }
    let arr2 = [...new Set(arr1)]
    for(let i=0; i<arr2.length; i++){
        var count = 0
        for(let j=0; j<clothes.length; j++){
            if(clothes[j][1]===arr2[i]) count++
        }
        arr2[i]=count
    }
    if(arr2.length===1){
        return clothes.length
    } else {
        for(let i=0; i<arr2.length; i++){
            result*=arr2[i]+1
        }
        return result-1
    }
}

let clothes = [["yellowhat", "headgear"], ["bluesumglasses", "eyewear"], ["green_turban", "headgear"]]
console.log(solution(clothes))