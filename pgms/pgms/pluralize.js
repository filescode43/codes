function solve(){
    const number = parseInt(document.getElementById("inputNum").value)
    const noun = document.getElementById("inputStr").value;

    const specialCases = {
        sheep: 'sheep',
        goose: 'geese',
        person: 'people',
        child: 'children',
        mouse: 'mice',
        fish: 'fish'
    };

    let pluralNoun;
    if (number === 1) {
        pluralNoun = noun;
    } else if (specialCases[noun]) {
        pluralNoun = specialCases[noun];
    } else {
        if (noun.endsWith('y') && !noun.endsWith('ay') && !noun.endsWith('ey') && !noun.endsWith('iy') && !noun.endsWith('oy') && !noun.endsWith('uy')) {
            pluralNoun = noun.slice(0, -1) + 'ies';
        } else if (noun.endsWith('s') || noun.endsWith('sh') || noun.endsWith('ch') || noun.endsWith('x') || noun.endsWith('z')) {
            pluralNoun = noun + 'es';
        } else {
            pluralNoun = noun + 's';
        }
    }

    document.getElementById("output").innerHTML = `${number} ${pluralNoun}`;
}