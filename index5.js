
// import mocha from "mocha";

// mocha.setup("bdd");
// const {asssert} = chai;

// mocha.run();
function sam(s){    
    let r = {};
    for(let i of s){
        r[i] = r[i] + 1;
        for(let j in r){
            console.log(j);
        }
    }
    // for(let i in x){
    //     console.log(i);
    // }
}

//sam("sandeep");

function printRepChars(s){
    let r = {},  max_so_far = 0, cur_max = 0; 
    for(let c of s){
        r[c] = r[c] + 1 ||1;
         max_so_far = 0, cur_max = 0; 
           for(let i in r){
                cur_max=r[i];
                if(cur_max >max_so_far){
                    max_so_far = cur_max;
                }
           }
    }
    console.log(max_so_far)
}
//printRepChars("sandeep");


// find prime numbers from 0 to n
// console.log("prime numbe test")
function primeNumbers(n){
    let num = arguments[0], o = [];
    for(let i=2; i<= num; i++){
        if(isPrime(i)){
            o.push(i);
        }
    }
    console.log(o)
}

function isPrime(num){
    for(let i=2; i<= Math.sqrt(num); i++){
        if((num%i ===0)){
           return false;
        }
    }
    return true;
}

var data = [10]
//primeNumbers.apply(null, data)

// Given list of stock prices find the min buy and max buy of the stock prices
// max of numbers while 

// console.log("max profit ")
function maxProfit(num){
    let cur_max = num[0], max_so_far = 0;
    for(let i=1; i<num.length; i++){
        if(num[i] - cur_max> 0 &&  num[i] - cur_max> max_so_far){
            max_so_far =  num[i] - cur_max;
        } else{
            cur_max = num[i];
        }        
    }
    console.log(max_so_far);
}

// maxProfit([1,2,3,4,5]);


// Fibonacci Series
// 1,1,2,3,5,8..
// o[n]
function fibonacci(num){
    let a =1, b=0,temp;
    while(num>=0){
        temp =a;
        a= a+b;
        b = temp;
        console.log(b);
        num --;
    } 
}
//fibonacci(6);

console.log("Stair case");

function pyramid(n){
    let r= '#', o = "";
    for(let i =3; i<=n; i++){
        for(let j= 3; j<=i; j++){
            o += j + "     ";
        }
        console.log(o);
        o = "";
    }
    

}
pyramid(6);