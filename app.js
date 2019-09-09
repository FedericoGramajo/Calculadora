//console.log("app cargado")
let firstValue
let secondValue
let selectedOperator

//Numeros en el display
const onClickFunction= function (event) {
  display.innerText += event.target.textContent
}

//Limpia el display
const cleanFunction= function(event) {
  display.innerText=''
}

//Darle funcion a los operadores
const operatorFunction = function () {
  firstValue = parseFloat(display.innerText)
  display.innerText = ''
  selectedOperator = event.target.textContent
}

//Pone el punto
const pointFunction= function() {
  display.innerText+='.'
}

//Realiza las operaciones y las muestra en el display
const resultFunction = function (event) {
  secondValue = parseFloat(display.innerText)
  let result
  switch (selectedOperator) {
    case '*':
      result = firstValue * secondValue
      break
    case '+':
      result = firstValue + secondValue
      break
    case '-':
      result = firstValue - secondValue
      break
    case '/':
      result = firstValue / secondValue
      break
    default:
      break
  }
  display.innerText = result
}

window.onload = function () {

const display= document.getElementById("display")

const btnOne= document.getElementById("btnOne")
const btnTwo= document.getElementById("btnTwo")
const btnThree= document.getElementById("btnThree")
const btnFour= document.getElementById("btnFour")
const btnFive= document.getElementById("btnFive")
const btnSix= document.getElementById("btnSix")
const btnSeven= document.getElementById("btnSeven")
const btnEight= document.getElementById("btnEight")
const btnNine= document.getElementById("btnNine")
const btnCero= document.getElementById("btnCero")

const btnMC= document.getElementById("btnMC")
const btnMadd= document.getElementById("btnMC+")
const btnMrest = document.getElementById("btnM-")
const btnDiv= document.getElementById("btn/")
const btnMult= document.getElementById("btn*")
const btnRest= document.getElementById("btn-")
const btnPlus= document.getElementById("btn+")
const btnC= document.getElementById("btnC")
const btnPoint= document.getElementById("btn.")
const btnEqual= document.getElementById("btn=")

//numeros en el display
btnOne.onclick= onClickFunction
btnTwo.onclick=onClickFunction
btnThree.onclick=onClickFunction
btnFour.onclick=onClickFunction
btnFive.onclick=onClickFunction
btnSix.onclick=onClickFunction
btnSeven.onclick=onClickFunction
btnEight.onclick=onClickFunction
btnNine.onclick=onClickFunction
btnCero.onclick=onClickFunction

btnC.onclick=cleanFunction

btnPoint.onclick=pointFunction

btnMult.onclick=operatorFunction
btnDiv.onclick=operatorFunction
btnRest.onclick=operatorFunction
btnPlus.onclick=operatorFunction

btnEqual.onclick=resultFunction
}
