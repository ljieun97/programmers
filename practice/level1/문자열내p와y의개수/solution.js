function solution(s){
    var num = 0;
    s=s.toLowerCase()
    for(var i=0; i<s.length; i++){
        if(s[i]==='p') num++;
        if(s[i]==='y') num--;
    }
    return num===0;
   
}

let s = "pPoooyY"
console.log(solution(s))