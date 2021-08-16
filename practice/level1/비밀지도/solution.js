function solution(n, arr1, arr2) {
    let arr = []
    for(let i=0; i<n; i++){
        let result = ''
        for(let j=n-1; j>=0; j--){
            if((arr1[i]/Math.pow(2, j)<1)&&(arr2[i]/Math.pow(2, j)<1)) {
                result+=' '
            } else result+='#'
            arr1[i]=arr1[i]%Math.pow(2, j)
            arr2[i]=arr2[i]%Math.pow(2, j)
        }
        arr[i]=result
    }
    return arr
}

let n = 5
let arr1 = [9, 20, 28, 18, 11]
let arr2 = [30, 1, 21, 17, 28]
console.log(solution(n, arr1, arr2))