function textReverse(text) {
    let invertido = "";
    for (let character of text) {
        invertido = character + invertido;
    }
    return invertido;
}

function textReverse2(text) {


    return text.split("").reverse().join("");
}

console.log(textReverse("severla"))
console.log(textReverse2("2severla"))
