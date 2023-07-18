let s="good";
let l=s.length;
var f=0;
for(let i=0;i<l/2;i++){
    if(s[i]!=s[l-i-1]){
        f=1;
    }
}
if(f==0)
console.log("Yes");
else
console.log("No");