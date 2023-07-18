const s=["Edstem","technology","private","limited"];
var b=s.reduce((ac,e)=>
{
   return ac+'_'+e
})
console.log(b)