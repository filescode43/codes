function solve(){
    let sentence = document.getElementById("inputStr").value;
    const notIndex = sentence.toLowerCase().indexOf('not');
    const badIndex = sentence.toLowerCase().indexOf('bad');
    let outputStr = "";

    if(notIndex != -1 && badIndex != -1 && badIndex > notIndex){
        outputStr = sentence.slice(0,notIndex) + "good" + sentence.slice(badIndex+3);
    }
    else {
        outputStr = sentence;
    }

    document.getElementById("output").innerHTML = outputStr;

}