function squareNumber(number){
    const result = number * number;
    return result;
}

function halfNumber(number){
    const result = number / 2;
    return result;
}

function percentOf(num1, num2){
    const result = (num1/num2) * 100;
    return result;
}

function areaOfCircle(radius){
    const result = 3.14 * radius * radius;
    return result;
}

function complexCalculation(){
    const inputNum = document.getElementById("inputNumber").value;
    if(isNaN(inputNum)){
        alert("please enter a valid number");
        return;
    }


const number = parseFloat(inputNum);
const half = halfNumber(number);
const squared = squareNumber(half);
const area = areaOfCircle(squared);
const percent  = percentOf(area, squared);

const output = `Half of number is ${half} , squared of half is : ${squared} , 
                Area of circle with squared half : ${area} , percent : ${percent}`;

document.getElementById("output").innerHTML = output;
}