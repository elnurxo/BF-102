let inputStr = "bdcea";

//alphabetical order function
function AlphabeticalOrder(str,callbackfn) {
  let result = str.split("").sort().toString().replaceAll("," , "");
  callbackfn(result);
  return result;
}
//call the function
AlphabeticalOrder(inputStr,(res)=>{console.log(res)});