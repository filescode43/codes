function solve(){
    let str = document.getElementById("inputStr").value;
    if(str.length < 3){
        alert("The string length must be at least 3 ")
        return
    }

    const suffix = str.split(-3);

    if(suffix === "ing"){
        str += "ly"
    }
    else{
        str += "ing";
    }

    document.getElementById("output").innerHTML = str;

}