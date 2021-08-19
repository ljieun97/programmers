function solution(arr1, arr2) {
    
    let result = []
    for(let i=0; i<arr1.length; i++){
        result[i]=[] 
    }
    for(let k=0; k<arr1.length; k++){
        for(let i=0; i<arr2[0].length; i++){
            let mul = 0
            for(let j=0; j<arr1[0].length; j++){
                mul+=arr1[k][j]*arr2[j][i]

            }   
            result[k][i]=mul
        }
    }
    return result
}

let arr1 = [[1, 4], [3, 2], [4, 1]]
let arr2 = [[3, 3], [3, 3]]
console.log(solution(arr1, arr2))