let s="I'm learning javascript basics.";
var c=[];
var b='';
var i=0;
while(i<s.length)
    {
    b=b+s[i];
    if(s[i]==" " || s[i]==".")
    {

    c.push(b);
    b='';
    }
    i++;
    }
console.log(c);
