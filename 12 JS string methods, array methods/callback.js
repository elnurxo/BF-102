// function Sum(num1,num2,callbackfn) {
//     let result = num1+num2;
//     callbackfn(result);
// }

// function DisplayResult(sum) {
//     console.log(sum);
// }

// Sum(2,5,(result)=> console.log(result));

let nums = [1,2,4,5,7,8];
function TotalOdd(arr) {
    let sumOdd = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]%2==1) {
            sumOdd+=arr[i];
        }
    }
    return sumOdd;
}
function TotalEven(arr) {
    let sumEven = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]%2==0) {
            sumEven+=arr[i];
        }
    }
    return sumEven;
}

function Total(callbackfn,arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (callbackfn(arr[i])!=undefined) {
            sum+=callbackfn(arr[i]);
        }
    }
    return sum;
}
function IsOdd(number) {
    if (number%2==1) {
        return number;
    }
}
function IsEven(number) {
    if (number%2==0) {
        return number;
    }
}


console.log(Total((x)=>{
    if (x%2==1) {
        return x;
    }
},nums));
console.log(Total(IsEven,nums));
