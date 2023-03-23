import{question} from "readline-sync"
let k:number=Number((question("Nhap vao do dai doan thang:")));
let output="";
for(let i=1;i<=k;i++){
    if(i%2==0){
        output+="$ ";
    }
    else output+="* ";
}
console.log(output)