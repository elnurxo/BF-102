// input: "S%O%F%T%W%A%RE D%E%V%E%L%O%P%M%E%N%T";
// output: ["software","development"];

//func
function ToArray(str) {
    let result = str.toLowerCase().replaceAll("%","").split(" ");
    return result;
}

let inputValue = "S%O%F%T%W%A%RE D%E%V%E%L%O%P%M%E%N%T";
let resArr = ToArray(inputValue);
console.log(resArr);
