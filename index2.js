// Time and Space Complexity

let num = [112213];
let otp = [21221113];

function rf(x, j, c, o){
    if(x[j] === x[j+1]){
        c ++;
        rf(x, j+1, )
    } else{
        o.push(c);        
    }    
    return j;
}

function cn(x){
    let o=[];
    let c =0;
    let i=0;
    //for(let i =0; i<x.length;i++){
    while(i<x.length){
       let k =  rf(x,i,c,o);
        c=0;
        i = k++;

    }
    console.log(o.join(""));
    return o.join("");
}
cn(num);


// Selection Sort
