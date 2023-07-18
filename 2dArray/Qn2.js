let s=[10,80,60,99,20];
let h=s[0];
let b=s[0];
for(let i=0;i<s.length;i++){
         if(h<s[i])
         h=s[i];
         else if(b>s[i])
         b=s[i];
}
console.log(h);
console.log(b);