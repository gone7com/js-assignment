import * as readline from 'readline';


  let valFromRuntime = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

        valFromRuntime.question('Please enter a Number ',(userInput) => {
console.log(myFact(userInput));
// var answer:number=0;
// var newNumber:number=parseInt(userInput);
// for(var i:number=newNumber;i<=0;i--){
// if(newNumber>1)
// answer+=(newNumber)*(newNumber-1);
// else if(newNumber==0)
// console.log(answer)

})

function myFact(userInput){
  var newNumber:number=parseInt(userInput);

  if(newNumber==0) {
     return 1;
  }
  return newNumber * myFact(newNumber-1);
}
