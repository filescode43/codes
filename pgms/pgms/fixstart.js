function solve(){
    const str = document.getElementById("inputStr").value;
    // let str = "babble"
    let ele = str[0];
    let output = [];
    if(str.length == 1) {
        output = str;
        document.getElementById("output").innerHTML = output;
    }
    else{
        output.push(ele);
        for(let i = 1 ; i< str.length ; i++){
            if(str[i] === ele){
                output.push("*");
            }
            else{
                output.push(str[i])
            }
        }
        output = output.join("");
        document.getElementById("output").innerHTML = output;
    }

    
    // console.log(output)

}
// solve()