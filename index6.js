let a=["a","","","b","c","", "","d", "e", ""];
function sol(a){
    let l = a.length;
    for(let i=0; i<l;i++){
        if(a[i] === ""){            
            a.splice(i,1);                      
            i--;
        }        
    }
    return a;
}

//console.log(sol(a))
let i = "11233142";
let o =  211223111412;

let r = "11122344555"
let o1= 3122132435
function sol1(a){
    let c = 0, j = 0, o = "";
    for(let i=0; i<a.length;i++){
        c = 1;
        if(a[i+1] === a[i]){
            c++, i=i+1;
            while(i<a.length){
                if(a[i+1] != a[i]){
                    break;
                } else {
                    c++, i++;
                }
            }
        } 
        o = o + c + a[i];               
    }
    return o;
}
console.log(sol1(r));