function mixup(str1,str2){
    if(str1.length < 2 || str2.length < 2){
        return "The length  of both the strings must be gerater than 2";
    }

    const first2Of1 = str1.slice(0,2);
    const restOf1 = str1.slice(2);
    const first2Of2 = str2.slice(0,2);
    const restOf2 = str2.slice(2);
    return first2Of2 + restOf1 +" " + first2Of1 + restOf2;
}

function mixUpStrings(){
    const inputStr1 = document.getElementById("inputStr1").value;
    const inputStr2 = document.getElementById("inputStr2").value;

    const mixedString = mixup(inputStr1, inputStr2);
    document.getElementById("output").innerHTML= mixedString;
}