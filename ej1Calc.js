
const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const result = document.getElementById('result')

function clearInput(){
    input1.value = ''
    input2.value = ''
}

function getValueInputPlus(){
    const inputValuePageFirst = input1.value
    const inputValuePageSecond = input2.value
    const resultNumber = +inputValuePageFirst + +inputValuePageSecond
 result.innerHTML = resultNumber
 clearInput()
}

function getValueInputMinus(){
    const inputValuePageFirst = input1.value
    const inputValuePageSecond = input2.value
    const resultNumber = +inputValuePageFirst - +inputValuePageSecond
 result.innerHTML = resultNumber
 clearInput()
}

function getValueInputTimes(){
    const inputValuePageFirst = input1.value
    const inputValuePageSecond = input2.value
    const resultNumber = +inputValuePageFirst * +inputValuePageSecond
 result.innerHTML = resultNumber
 clearInput()
}

function getValueInputDivide(){
    const inputValuePageFirst = input1.value
    const inputValuePageSecond = input2.value
    const resultNumber = +inputValuePageFirst / +inputValuePageSecond
 result.innerHTML = resultNumber
 clearInput()
}