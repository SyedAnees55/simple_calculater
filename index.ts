
import inquirer from "inquirer";

const answer = await inquirer.prompt(
    [
        { message: "Enter your first number", type: "number", name: "firstNumber" },
        { message: "Enter your secound number",
         type: "number",
          name: "secoundNumber" },
        { message: "select one of operaters to perform action",
         type: "list",
          name: "operater",
        choices: ["Addition", "Substraction", "Multiplication", "Division"]},
    ])
    if (answer.operater ==="Addition") {
        console.log(answer.firstNumber + answer.secoundNumber);
    }if (answer.operater ==="Substraction") {
        console.log(answer.firstNumber - answer.secoundNumber);}
     else if (answer.operater ==="Multiplication") {
            console.log(answer.firstNumber * answer.secoundNumber);}
     else if (answer.operater ==="Division") {
                console.log(answer.firstNumber / answer.secoundNumber);
     }else{
        console.log("please correct the  your iformation");
        
     }