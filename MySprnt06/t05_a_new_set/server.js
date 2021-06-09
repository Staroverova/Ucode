'use strict'

let result = [];
const form = document.getElementsByTagName('form');

form[0].addEventListener('submit', showData);

console.log(form);

function showData(e) {
    let render = "POST</br></br>Array</br>(</br><pre>";
    e.preventDefault();
    [...form[0]].map(item => {
        if(item.name) {
            result.push([item.name, item.value]);
            render += `\t [${item.name}] => ${item.value}\n`;
            // render += "\t [" + item.name + "] => " + item.value + "\n";
        }
    });
    render += "</pre>)</br>";
    console.log(result);

    document.querySelector("#result").innerHTML = render;
}