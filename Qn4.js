let s=[5,9,8,12,22,18];
let a;
for(var i=0;i<s.length;i++){
    if(s[i]%3==0){
        s[i]="multiple";
    }
    console.log(s[i]);
}