// function solution(n, lost, reserve) {
//     for(var i=0; i<reserve.length; i++){
//         for(var j=0; j<lost.length; j++){
//             if (reserve[i]-1===lost[j])
//                 lost.splice(j);
                
//             if (reserve[i]+1===lost[j])
//                 lost.splice(j);
        
//         }
//     }
//     return n-lost.length;
// }

// let n = 5;
// let lost = [2,4];
// let reserve = [1,3,5]
// console.log(solution(n, lost, reserve));