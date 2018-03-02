module.exports = function count(s, pairs) {
    let N = 1, answer = 0, numStr;
  
    for(let i = 0; i < pairs.length; i++){
        N *= Math.pow(pairs[i][0], pairs[i][1]); 
    }
    if (N > 10000000) return 0;
    
    for(let k = 1; k <= N; k++){
        for(let j = 0; j < s.length; j++){
            numStr = nod(k + j,N);
            if(s[j] === '1' && numStr == 1) answer++;
            if(s[j] === '0' && numStr !== 1) answer++;
        }
      
    }
    
      const result = answer % 1000000007;
    
    return result;
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
