//console.log("app cargado")
let firstValue
let secondValue
let selectedOperator

/*const numberOnClick= function(event){
  display.innerText+=event.target.textContent
}*/

const ggFunction= function (event) {
  display.innerText += event.target.textContent
}

const cleanFunction= function(event) {
  display.innerText=''
}

const operatorFunction = function () {
  firstValue = parseFloat(display.innerText)
  display.innerText = ''
  selectedOperator = event.target.textContent
}
const pointFunction= function() {
  display.innerText+='.'
}

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
btnOne.onclick= ggFunction
btnTwo.onclick=ggFunction
btnThree.onclick=ggFunction
btnFour.onclick=ggFunction
btnFive.onclick=ggFunction
btnSix.onclick=ggFunction
btnSeven.onclick=ggFunction
btnEight.onclick=ggFunction
btnNine.onclick=ggFunction
btnCero.onclick=ggFunction

btnC.onclick=cleanFunction

btnPoint.onclick=pointFunction

btnMult.onclick=operatorFunction
btnDiv.onclick=operatorFunction
btnRest.onclick=operatorFunction
btnPlus.onclick=operatorFunction

btnEqual.onclick=resultFunction
}

//limpiar el display


/*
//darle funcion a los operadores
const operatorFunction= function(event){
  firstValue= parseFloat(display.innerText);
  display.innerText=""
  selectedOperator=event.target.textContent
  }

btnDiv.onclick=operatorFunction
btnMult.onclick=operatorFunction



//boton de igual
btnEqual.onclick= function(event){
  secondValue= parseFloat(display.innerText)
  let result
  switch (selectedOperator) {
    case "+":
      result= firstValue+secondValue
      break;
      case "-":
        result= firstValue-secondValue
        break;
        case "*":
          result= firstValue*secondValue
          break;
          case "/":
            result= firstValue/secondValue
            break;
    default:
    break;
      }
      display.innerText= result

    }

  /*}
btnOne.onclick= function(event){
  display.innerText+=event.target.textContent
}*/
