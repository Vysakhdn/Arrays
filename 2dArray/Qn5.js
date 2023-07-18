let s=["assignment","problrm","mrdia","upload"];
let b=[];
for(let i=0;i<s.length;i++){
        j=s[i].length-1;
        if(s[i][0]=='a'|| s[i][j]=='a'){
            b.push(s[i])
        }
        
    }
    console.log(b)