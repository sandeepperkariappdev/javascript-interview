//console.log("Hello");

// reverse of number
//1. input = [1,2,3], [1,2,3,4];
//2. output = [1,2,3,4,5,6], [4,3,2,1];
//6-2
function reverseNum(num){
    for(let i= 0; i<num.length; i++){
        num[i] = num[num.length -i]
    }
    return num;
}

// Time complexity


// Space Complexity


//Bubble sort
// compare the current number with the next number
function bubbleSort(){

}

// Selection Sort
function swap(a,i,j){
    var temp = a[i];
    a[i] = a[j];
    a[j] = temp;
}
//Number
function selectionSort(a){
    for(let i=0;i<a.length; i++){
        let min = i
        for(let j=i+1; j<a.length; j++){
            if(a[j] < a[min]){
                min= j;
            }
        }
        if(i !== min){
            swap(a,i,min);
        }
    }
    return a;
}



// Two sum problem
// Time complexity is o(n2)
function twoSum(a, s){
    for(let i=0; i<a.length; i++){
        for(let j=i+1; j<a.length; j++ ){
            if(a[i]+a[j] == s){
                return[a[i], a[j]]
            }
        }
    }
    return "No such pair found"
}

//o(nlogn)
// 1. sort the array
// 2. left = 0, rigth = a.length -1



// simple solution with o(n)
// a+ b = c
// a= c-b
function twoSum(a, s){
    var ta = [], i;
    for(i =0; i<a.length; i++){
        var t = s-a[i]
        if(ta.includes(t)){
            console.log([t, a[i]]);
            return [t, a[i]]
        } else{
            ta.push(a[i]);
        }
    }
    return "not found";

}

//twoSum([1,2,3,4], 4);

// N sum problem
// 3 sum problem
//[1, 12, -5, -6, 50, 3]



// Max Sub Array Problem
function maxSubArray(a, s){    
    for(let i = 0; i<a.length; i++){
        for(let j = i+1; i<a.length; j++){
            for(let j = i+1; i<a.length; j++){
        
            }
        }
    }
}

// Sub Set Sum

/*
    [-2, 1,-3, 4,-1,2,1,-5,4];
    [-2]

*/
// max subset sum of 4 numbers
function maxSubSetSum(a){
    let max_so_far = Number.NEGATIVE_INFINITY;
    let leftIndex = 0,
    maxSum=0,
    rightIndex = a.length -1,
    len = a.length;

    for (let i =0; i<a.length; i++){
        for(let j=i; j<a.length; j++){
            maxSum = 0;
            for(let k=i; k<j; k++){
                maxSum += a[k];
                if(max_so_far < maxSum){
                    max_so_far = maxSum;
                    leftIndex = i;
                    rightIndex = j;
                }             
            }
        }
    }
    console.log(max_so_far);
}

//maxSubSetSum([-2, 1,-3, 4,-1,2,1,-5,4]);


//Brute force approach
function subSetSum(a, s){
 
    let max_so_far = Number.NEGATIVE_INFINITY;
    let leftIndex = 0,
    maxSum=0,
    rightIndex = a.length -1,
    len = a.length,
    o=[], fo =[];

    //for (let i =0; i<a.length; i++){
        for(let j=0; j<a.length; j++){
            maxSum = 0, o=[];
            for(let k=0; k<=j; k++){
                maxSum += a[k];
                o.push(a[k]);
                if(s === maxSum){
                  fo.push(o);
                }             
            }
        }
    //}
    console.log(fo.toString());    
    return maxSum;
}
//subSetSum([1,2,3], 6);

// Sum of Subset
// Kadane Approach

function maxSubSet(a){
    let max_sp_far = 0, curr_max =0;
    for(let i= 0; i<a.length; i++){
        curr_max = Math.max(0, curr_max + a[i]);
        max_sp_far = Math.max(curr_max, max_sp_far)
    }
    return max_sp_far;
}
// maxSubSet();




// sum of n numbers
//https://javascript.info/task/sum-to
let o = 0;
function sumOfNum(a){    
    if(a>1){
        o = a + sumOfNum(a-1);
    } else{
        return 1;
    }
    return o;
}


//sumOfNum(5);


/*
1123581321..

*/
// Fibonacci Series
function fibonacci(num){
    let a = 1, b=0, temp;
    while(num>=0){
        temp = a;
        a= a+b;
        b= temp;
        num --;
    }
    return b;
}


// Palindrome

function palindrome(s){    
    let len = Math.floor((s.length)/2)
    for(let i=0; i<len; i++){
        if(s[i] !== s[s.length -i-1]){
            return false;
        }
    }
    return true;
}
// racecar

function isPalindrome(s){
    let i = i || 0;
    if(i <0 || i >= s.length >>1)
    // s.length >> 1 is equal to Math.floor(s.length/2)
    
 return (i=i||0)<0||i>=s.length>>1||s[i]==s[s.length-1-i]&&isPalindrome(s,++i);
}



// Sum of Consecutive numbers

// Compute the sum of absolute differences of consecutive numbers of a given array of integers

//console.log("consecutive sum");
function consecutiveDiffSum(a){
    let sum = 0;
    for(let i =0; i<a.length; i++){
        sum += Math.abs(a[i] - a[i-1]); 
    }
    console.log(sum);
    return sum;
}

//consecutiveDiffSum([1,2,3,2,-5]);


//console.log("consecutiveTwoNumSumMax");
// A= [1,2,3,14,5], k =2
function consecutiveTwoNumSumMax(a){
    let cur_sum = 0, max_sum=0, o=[];
    for(let i =0; i < a.length; i++){
        cur_sum = a[i]+ a[i+1];
        if(max_sum === 0) max_sum = cur_sum;
        if(cur_sum > max_sum) {
            max_sum = cur_sum;            
        }
        //o.push([a[i], a[i+1]]);
    }    
    return max_sum;
}
//console.log(consecutiveTwoNumSumMax([1,2,3,14,5]));
//console.log("consecutiveNNumSumMax")
// important
function consecutiveNNumSumMax(a,k){
    let cur_sum = 0, max_sum=0;
    for(let i=0; i<k-1; i++){
        cur_sum +=a[i];
    }
    for(let i = k-1; i < a.length; i++){
        cur_sum += a[i];        
        if(cur_sum > max_sum) {
            max_sum = cur_sum;            
        }
        // removing the first values
        cur_sum = cur_sum - a[i-k+1];
        console.log(cur_sum);
    }    
    return max_sum;
}
//console.log(consecutiveNNumSumMax([1,2,3,14,5], 3));


//Insertion Sort

// interview questions

// Pascal triangle


// longest palindrome.

console.log("balance Paranthesis")
// given string of unbalanced paranthesis, balance it
function balParanthesis(v){
    let stack =[], map = {
        '(' :')',
        '{':'}',
        '[':']'
    };
    ///for(let i = 0; i< array.length; i++){
        for(let b of v){
        //If character is an opening brace add it to a stack       
        if(b === "(" ||
        b === "{" ||
        b === "["){
            stack.push(b);
        }
        //  If that character is a closing brace, pop from the stack, which will also 
        //reduce the length of the stack each time a closing bracket is encountered.
        else{
            let last = stack.pop();
             //If the popped element from the stack, 
             //which is the last opening brace doesn’t 
             //match the corresponding closing brace in the 
             //map, then return false
            if(b !== map[last]){
                return false;
            }
        }
    }
     // By the completion of the for loop after checking 
     //all the brackets of the str, 
     //at the end, if the stack is not empty then fail
    if(stack.length !== 0){ return false;}
    return true;
}
console.log(balParanthesis("(){}"));

console.log("Missing Number in agiven interger of 1 to 100");
function missingNum(a){
 
}
console.log(missingNum([]));

console.log("Duplicate Number in a given interger array");
function duplicateNum(a){
 
}
console.log(duplicateNum([]));

console.log("Largest Number and Smallest Number in a given interger array");
function largestSmallestNum(a){
 let mid = a.length >> 1, st = a[0], 
 cur_max= a[0], max_so_far= 0, cur_l = a[0],
 l_so_far = 0;
    for(let i = 1; i <a.length; i++){
        if(a[i] > cur_max && a[i] - cur_max > max_so_far){
            max_so_far = a[i] - cur_max; 
        } else{
            cur_max = a[i];
        }
        if(a[i] < cur_l &&   a[i] - cur_l < l_so_far){
            l_so_far =  a[i] - cur_l
        } else{
            cur_l = a[i]
        }
    }
    console.log(`largest number ${max_so_far} and smallest number ${l_so_far}`);
}
largestSmallestNum([70,65,3,21,58,93,12,82,15,34,73,2,12]);


console.log("Given string is Anagram");
function isAnagram(str1, str2){
    let strObj1 = {}, strObj2 = {};
    if(str1.length == str2.length){
        for(let i in str1){

        }
    } else{
        return false
    }    
}
const checker = (l, obj) =>{
    if(obj[l] === undefined){
        return obj[l] = 1;
    } else{
        return obj[l] +=1
    }
}
const objEql = (o1, o2) => {
    for(let el in obj){
        if(o1[el] !== obj2[el]){
            return false
        }        
    }
    return true;
}
console.log(isAnagram("nukes", "kuine"));

console.log("Reverse of a Number")

function reverse(){
    
}



let a = ["2", "5", "7","8", "9", "10","11"]
/*
function Event(){     
    var ev = {};    
    var hOP = ev.hasOwnProperty;
}

EventSource.prototype.publish = function(e, v){
    if(!hOP.call(ev, e)) return;
    ev[e].forEach(function(itm){
        itm(e !== undefined ? e : {});
    })
}
EventSource.prototype.subscribe = function(e, c){
    if(!hOP.call(ev, e)) ev[e] = [];
    var index = ev[e].push(c) - 1;
    return {
        remove:function(){
            delete ev[e][index]
        }
    }
}
EventSource.prototype.unsubscribe = function(e){
    if(!hOP.call(ev, e)) return;
    if(ev.hasOwnProperty(e)){
        delete ev[e];
    }
}*/
