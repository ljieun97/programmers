function solution(w, h) {
    if(w==h) return w*h-w
    if(w==1|h==1) return 0
    
    let min = Math.min(w,h)
    let n = 0 
    for(let i=1; i<=min; i++){
        if(w%i==0&&h%i==0) n=i
    }
    
    return w*h-(w+h)+n
   
}

console.log(solution(8, 12))