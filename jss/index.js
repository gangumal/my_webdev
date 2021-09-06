

let num1 = 88
let num2 = 2

let calc = 0

let input1     = document.getElementById("input1")
let input2     = document.getElementById("input2")

let result     = document.getElementById("result")


input1.textContent = num1
input2.textContent = num2

text = result.textContent


function Add()
{

  calc = parseInt(input1.textContent) + parseInt(input2.textContent)
  
  result.textContent =  text + calc
  

}

function Substract()
{

  calc = input1 - Input2
  result.textContent = text + " " + calc

}



function Divide()
{

   calc = input1 / Input2
  result.textContent = text + " " + calc

}

function Multiply()
{

  calc = input1 * Input2
  result.textContent = text + " " + calc


}
