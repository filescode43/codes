function solve(){
    // const str = document.getElementById("inputStr").value;
    let str = "babble"
    let ele = str[0];
    let output = [];
    if(str.length == 1) {
        output = str;
    }
    else{
        output.push(ele);
    }

    for(let i = 1 ; i< str.length ; i++){
        if(str[i] === ele){
            output.push("*");
        }
        else{
            output.push(str[i])
        }
    }
    output = output.join("");
    // document.getElementById("output").innerHTML = str;
    console.log(output)

}
solve()