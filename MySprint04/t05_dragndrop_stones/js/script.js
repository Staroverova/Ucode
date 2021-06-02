let stones = document.getElementsByClassName('stone');
let cont = document.querySelector('.container');

let dragValue;

for (let stone of stones) {
    stone.onclick = function () {
        if (stone.classList.contains('active')) {
            stone.classList.remove('active')
        }
        else {
            stone.classList.add('active')
            dragElement(stone)
        }
    }
}

function dragElement(stone){
    stone.onmousedown = function () {
        if (stone.classList.contains('active')) {
            dragValue = stone;
        }
    }
}

document.onmousemove = function(e) {
    let x = e.pageX;
    let y = e.pageY;

    dragValue.style.left = (x - 45) + 'px';
    dragValue.style.top = (y - 45) + 'px';
}

document.onmouseup = function () {
    dragValue = null;
}