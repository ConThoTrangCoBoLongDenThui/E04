let x=1,y=20;
let chan:string="Chan:";
let le:string="Le:";
for(x;x<=y;x++){
    if(x%2==0){
        chan+=String(x )+" "
    } else le+=String(x )+" "
}
console.log(chan);
console.log(le);