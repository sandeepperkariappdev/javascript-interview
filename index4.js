// selection sort


// input = 11223313
// o = 2122231113
// import mocha from "mocha";

// mocha.setup("bdd");
// const {asssert} = chai;

function repCount(a){ 
    let  o= [], i=0, c=1;   
    while(i< a.length){
        o.push(count(a, i, c));
        o.push(a[i]);
    }
    return o.join("");
}
function count(a, j, c){       
    if(a[j] == a[j+1]){
        c++;
        count(a,j++, c)
    }    
    return c;
}

function isPrime(num){
    for(let i =2, s = Math.sqrt(num); i<num; i++){
        if(num % i) return false;
    }
    return num >1;
}

// function evenDigits(){
//     for(){

//     }
// }


//Given an array of integers, find the largest difference between two elements such that the element of lesser value must come before the greater element


// time complexity o[n^2] and space complexity o[n]
function diffNum(a){
    let mid = (a >>1), cur_max =0, max_so_far =0, o =[];
    for(let i=a.length -1; i>0; i--){
        for(let j= 0; i<a.length; j++){
            cur_max = a[i] - a[j];
            if(cur_max > max_so_far){
                max_so_far = cur_max;
                o.push([a[i], a[j]]);
            }             
        }
    }
    console.log(max_so_far + " max_so_far : o : " + o);
}

diffNum([[7, 8, 4, 9, 9, 15, 3, 1, 10]]);

// same question in less time complexity

function diffNumSmart(a){
    let cur_max =0, max_so_far = 0;
    cur_max = a[0];
    if(cur_max.length <=0) return -1; 
    for(let i =0; i<a.length; i++){
        if(a[i] > cur_max && a[i] - cur_max > max_so_far){
            max_so_far = a[i] - cur_max
        } else if (a[i] < cur_max){
            cur_max = a[i]
        }
    }    
    if(max_so_far <=0 ) return -1; 
    return max_so_far;
}

// sandeep
function repChars(s){        
    var r = {},x;
    for(let i =0; i<s.length; i++){
        x = s[i];
        if(r[x]){
            return false;
        }
        r[x]  =true;
    }
    return true;
}

function repeatedCharsInString(s){

    return s;
}

function isIsomorphic(s, b){
// does the string have repeated characters
}

function decimalToBinary(digit){
    if(digit >= 1){
        if(digit % 2){
            return decimalToBinary((digit -1)/2) +1;
        } else {
            return decimalToBinary(digit /2) + 0;
        }
    } else{
        return '';
    }
}

function binarySearch(s, itm){
    let x = s.sort(), mid = s.length >> 1;
    if(x[mid] === itm) return mid;
    if(x[mid] > itm){
        return binarySearch;
    }
    if(x[mid] < itm){
        return ;
    }  
}

function totalZeros(n){

    return n;
}



function fizzBuzz(n){
    let output =[];
    for(let i=0; i<=n; i++){
        if(n%2 === 0) output.push(n);
        if(n%3 === 0) output.push(n);
        if(n%6 === 0) output.push(n);
    }
    return output;
}


// describe("fizzBuzz", () =>{
//     beforeEach(() => (output = fizzBuzz(30)));
//     it("should return true", ()=>{
//         asssert.equal(output[0], 1);
//     })
// });

function printRepChars(s){
    let r = {};
    for(let i =0; i<s.length; i++){
        if(r[s[i]] !==-1){
            r[s[i]]= r[s[i]] + 1 || 1;
        } else{
            r[s[i]] = 1;
        }
    }
}

//check-for-repeated-characters-in-a-string-javascript

//javascript-function-to-automatically-count-consecutive-letters-in-a-string

// Caesar Cipher

// two sum
// [1,2,2,3,4], 4
function twoSum(a, sum){
    let cur_max =0, max_so_far = 0, result= [];
    cur_max = a[0];
    for(let i=0; i<a.length; i++){
        var diff = sum - a[i];
        var k = a.indexOf(diff);
        if(k > -1 && k !==i){
            result.push(i);
            result.push(k);
        }
    }
    return result;
}

twoSum([2,7,11,15], 9);




