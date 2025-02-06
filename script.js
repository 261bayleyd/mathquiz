let answer
let operators = ["+", "-", "x", "÷"];
let points = 0
let clicked = false
function next(){
    clicked = false
    let result = document.getElementById("result")
    result.innerHTML = ""
    document.getElementById("guess").value = ""
    let cnum = Math.floor(Math.random() * operators.length)
    let num1 = Math.floor(Math.random() * 100)
    let num2 = Math.floor(Math.random() * 100)
    let equation = num1 + " " + operators[cnum] + " " + num2
    if (operators[cnum] == "+"){
        answer = num1 + num2
    }
    else if (operators[cnum] == "-"){
        if (num2 > num1){
            equation = num2 + " " + operators[cnum] + " " + num1
            answer = num2 - num1
        }
        else{
            answer = num1 - num2
        }
    }
    else if (operators[cnum] == "x"){
        answer = num1 * num2
    }
    else if (operators[cnum] == "÷"){
        if (num2 > num1){
            equation = num2 + " " + operators[cnum] + " " + num1
            answer = num2 / num1
        }
        else{
            answer = num1 / num2
        }
    }
    let countryprint = document.getElementById("countryprint")
    countryprint.innerHTML = equation
}
next()
function check(){
    if (clicked == false){
        clicked = true
        let guess = document.getElementById("guess").value
        let result = document.getElementById("result")
        let pointcount = document.getElementById("pointcount")
        if(guess == answer){
            result.innerHTML = "Correct!"
            points += 1
        }
        else{
            result.innerHTML = "Incorrect" + " The correct answer is: " + answer
        }
        pointcount.innerHTML = "Correct Count: " + points
    }
    else{
        result.innerHTML = "You have already guessed!"
    }
}