function solve(){
    const choices = document.getElementById("inputStr").value.split(",")

    const suffixes = ["th", "st", "nd","rd"]

    function getSuffix(number){
        const tens = number % 100;
        const units = number % 10;

        if(tens >= 11 && tens<=13){
            return suffixes[0];
        }
        return suffixes[units] || suffixes[0];

    }
    const output = document.getElementById("output");
    output.innerHTML = "";

    choices.forEach((choice,index)=>{
        const position = index+1;
        const suffix = getSuffix(position);
        const listItem = document.createElement('li');
        listItem.textContent = `My ${position}${suffix} choice is ${choice.trim()}`;
        output.appendChild(listItem);
    })
}