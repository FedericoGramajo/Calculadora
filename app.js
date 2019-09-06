console.log("app cargado")
window.onload=function(){
let firstValue
let secondValue
let selectedOperator

const display= document.getElementById("display")

const btnOne= document.getElementById("btnOne")
const btnSeven= document.getElementById("btnSeven")
const btnEight= document.getElementById("btnEight")
const btnNine= document.getElementById("btnNine")
const btnFour= document.getElementById("btnFour")
const btnFive= document.getElementById("btnFive")
const btnSix= document.getElementById("btnSix")
const btnTwo= document.getElementById("btnTwo")
const btnThree= document.getElementById("btnThree")
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

const numberOnclick= function(event){
  display.innerText+=event.target.textContent
  }
//numeros en el display
btnOne.onclick= numberOnclick
btnSeven.onclick=numberOnclick
btnEight.onclick=numberOnclick
btnNine.onclick=numberOnclick
btnFour.onclick=numberOnclick
btnFive.onclick=numberOnclick
btnSix.onclick=numberOnclick
btnTwo.onclick=numberOnclick
btnThree.onclick=numberOnclick
btnCero.onclick=numberOnclick


//limpiar el display
btnC.onclick(function){
  display.innerText=""
  }

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

}
  /*}
btnOne.onclick= function(event){
  display.innerText+=event.target.textContent
}*/
