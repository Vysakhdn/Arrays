let s=[[1,2,3],[4,5,6],[7,8,9]];
var p1=0;
var p2=0;
var d;
for(let i=0;i<s.length;i++){
    p1=p1+s[i][i];
    d=s[i].length-1-i;
    p2=p2+s[i][d];
}
console.log(p1);
console.log(p2);
console.log(p1-p2);