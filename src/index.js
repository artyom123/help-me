module.exports = function count(s, pairs) {
    let N = 1, answer = 1;
  
    for(let i = 0; i < pairs.length; i++){
        N *= Math.pow(pairs[i][0], pairs[i][1]); 
    }

    if (N > 100000000) {
        if(pairs.length === 1) return double(Math.pow(pairs[0][0], 9), (pairs[0][1] - 1) / 9);
        else if(s !== '1') return 0;
    }

    if (s === '1' && s.length === 1){
        pairs.forEach(item => answer *= (item[0] - 1));
        return answer;
    }

    for(let k = 0; k < N; k++) {
        let  numnP = 1;
        for(let j = 0; j < s.length; j++) {
            if(s[j] === '1' && nod(N, k + j) !== 1) numnP = 0;
            else if(s[j] === '0' && nod(N, k + j) === 1) numnP = 0;
        }
        answer += numnP;
    }
    
    return (answer - 1) % 1000000007;
}

function nod(n, m) {
    if(m > 0){ 
      let k = n % m;
      return nod(m, k); 
    } 
    else { 
      return Math.abs(n);  
    }
}

function double(a, b) {
    let s = a;

    for(let y = 1; y < b; y++) {
        s = (s * a) % 1000000007;
    }
    return s;
}
