#!/usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
    type:"input",
    name:"num_1",
    message:"Enter number 1 :",
},
{
    type:"input",
    name:"num_2",
    message:"Enter number 2 :",
},
{
    type:"list",
    name:"operator",
    choices:["+","-","*","/"],
    message:"Select the operator :",
}]);
const{num_1,num_2,operator}=answer;
let result: number=0;
if(num_1&&num_2&&operator)
{
   
if(operator=="+"){
     result=parseInt(num_1)+ parseInt(num_2);
}
else if(operator=="-")
{
    result=num_1-num_2
}
else if(operator=="*")
{
    result=num_1*num_2
}
else if(operator=="/")
{
    result=num_1/num_2
}
}
console.log("result :" , result)
