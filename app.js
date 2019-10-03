window.onload = function () {

  let firstValue
  let secondValue
  let selectedOperator
  let memoryNumber=0


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
//console.log("app cargado")
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
  selectedOperator = event.target.textContent
  display.innerText = ''
  console.log("firstValue", firstValue)
  console.log("selectedOperator", selectedOperator0)
}

//Pone el punto
const pointFunction= function() {
  display.innerText+='.'
}
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

btnMadd.onclick = function(event){
  memoryNumber +=parseFloat(display.innerText)
  console.log("memoryNumber+",memoryNumber)
}

btnMrest.onclick = function(event){
  memoryNumber -=parseFloat(display.innerText)
  console.log("memoryNumber-",memoryNumber)
}



btnMC.onclick = function(event){
  memoryNumber = ""
  console.log("memoryNumberC",memoryNumber)
}


//Realiza las operaciones y las muestra en el display
btnEqual.onclick = function(){
  switch(selectedOperator){
    case '/':
    selectedOperator = 'divide';
    break;
    case '+':
    selectedOperator = 'plus';
    break;
    case '-':
    selectedOperator = 'minus';
    break;
    case '*':
    selectedOperator = 'multiply';
    break;
  }

  secondValue = parseFloat(display.innerText)
  const option = {
    baseURL : "http://localhost:3000",
    timeout : 5000,
    method  : "GET",
    headers :{
      "Content-Type":"application/json",
    }
  }
  fetch(`http://localhost:3000/getresult/${firstValue}/${secondValue}/${selectedOperator}`,option)
  .then(res =>res.json())
  .then((response)=> {
    console.log(response)
    display.innerText = response.result
  })


}



}
