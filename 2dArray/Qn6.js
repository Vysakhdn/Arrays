const s=['edstem','technologies'];
var b='';
for(let i=0;i<s.length;i++)
    {
    for(let j=0;j<s[i].length;j++)
        {
        b=b+s[i][j];
        }
    if(i<s.length-1)
        b=b+'_';
    }   
console.log(b);