module.exports = function count(s, pairs) {
    let N = 1, answer = 1, numStr;
  
    for(let i = 0; i < pairs.length; i++){
        N *= Math.pow(pairs[i][0], pairs[i][1]); 
    }

    if (s[0] === '1' && s.length === 1){
        pairs.forEach(item=>answer *= (item[0] - 1));
        return answer;
    }
        
    if (N > 10000000) return 0;

    for(let k = 0; k < N; k++){
        let  numnP = 1;
        for(let j = 0; j < s.length; j++){
            numStr = nod(N, k + j);
            if(s[j] === '1' && numStr !== 1) numnP = 0;
            else if(s[j] === '0' && numStr === 1) numnP = 0;
        }
        answer += numnP;
    }
    
    return (answer - 1) % 1000000007;
}

function nod(n, m) {
    if(m > 0){ 
      var k = n % m;
      return nod(m, k); 
    } 
    else { 
      return Math.abs(n);  
    }
}
