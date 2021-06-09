'use strict'
console.log(document.getElementsByTagName("form"));
function checkForm() {
    let form = document.getElementsByTagName("form");
    let result = null;
    for(let item of form[0]) {

        if(item.checked) {
            console.log(item.value);
            result = item.value;
        }
    }
    if(result == 2) {
        alert('Ответ правильный');
    } else {
        alert('Вы ошиблись. Подумайте получше!');
    }
}