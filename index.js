console.log("Hello Javascript");
// count the repeated values in the array
/*
var ae = ["a", "b", "c", "d", "e", "a", "b", "c", "f", "g", "h", "h", "h", "e", "a"];
count(ae);
function count(v){    
    let cc= Array.prototype.slice.call(v);
    let ob = {};      
    while(cc.length >0){
        const idx = cc.lastIndexOf(cc[0]);                           
            ob.hasOwnProperty(cc[0]) ? ob[cc[0]] = ob[cc[0]]+ 1 : ob[cc[0]] = 1;                
            cc.splice(idx, 1);         
    }
    console.log(JSON.stringify(ob));
}
console.log("*******************************");

//  Get all the NonUnique Values (1.e duplicate/more than one occurence) in an array

//nonduplictes(ae);
function nonduplictes(v){    
    let cc= Array.prototype.slice.call(v);         
    while(cc.length >0){
        const idx = cc.lastIndexOf(cc[0]);                                       
        if (cc.lastIndexOf(cc[0]) !== cc.indexOf(cc[0])) {
            cc.splice(idx, 1);         
        } 
    }
    console.log(cc);
}
//**************** */

/*

//  Linear Search
function linearSearch(v, x){
    let c = Array.prototype.slice.call(v);
    for(let i= 0; i<c.length; i++){
        if(c[i] === x){
            return i
        }
    }
    return -1;
}
*/

/*
console.log("Binary search");


let ls = [13, 21, 54, 81, 90];
let itm = 81;

// Binary Search
function binarySearch(v, x){
    let len = v.length;
    let st = 0;
    let ed = len-1;
    let md = Math.floor(len/2);
console.log(md);
console.log(ed);
console.log(st);
console.log(x);
console.log(v);
    while(ed>=st){
        if(x=== v[md]){            
            console.log("result "+md);
            return md;
        }
        if(x>v[md]){
            st = md +1;
        }
        if(x<v[md]){
           ed = md-1; 
        }
        md = Math.floor(len/2);
    }
    console.log("result  : -1");
    return -1;
}


console.log("Binary search");
*/
//binarySearch(ls, itm);

// Bubble Sort

// Bubble Sort
/* function bubbleSort(v){
    for(let i =0; i<v.length;i++){
        let flag = false;
        for(let j =0; j<v-i-1; j++){
            let temp = v[j+1];
            if(v[j] > v[j+1]){
                v[j+1] = v[i];
                v[j] = temp;
                flag = true;
            }
        }
        if(!flag){
            break;
        }
    }
    console.log(v);
 }
*/
/*

let stack = [];

function Stack(){
    this.stack  = [];
}
Stack.prototype.pop = function(){
    return this.stack.pop();
}

Stack.prototype.push = function(i){
    return this.stack.push(i);
}

Stack.prototype.peak = function(i){
    var len =  this.stack.length;
    return (this.stack[len-1] !== null) ? this.stack[len-1] : null;
}
Stack.prototype.peak = function(i){
    return this.stack.length;
}

function reverseWords(w){
    let x = w.split(" ");
    x.reverse().join(" ");
}

function reverse(l){
    if(Object.prototype.toString.call(l) === "[object Array]"){
        for(let i =0; i<l.length; i++){

        }
    }
}

*/

