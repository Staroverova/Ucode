let notification = document.querySelector(`#notification`)
notification.innerHTML = "Sorting by _, order: _"

const superhero = [
    { name: 'Black Panther', strength: 66, age: 53 },
    { name: 'Captain America', strength: 79, age: 137 },
    { name: 'Captain Marvel', strength: 97, age: 26 },
    { name: 'Hulk', strength: 80, age: 49 },
    { name: 'Iron Man', strength: 88, age: 48 },
    { name: 'Spider-Man', strength: 78, age: 16 },
    { name: 'Thanos', strength: 99, age: 1000 },
    { name: 'Thor', strength: 95, age: 1000 },
    { name: 'Yon-Rogg', strength: 73, age: 52 },
]

let placeholder = document.querySelector(`#placeholder`)
let table = document.createElement('table')
let arr = ["Name", "Strength", "Age"]
let checkSort = false

createTable(placeholder, 3, 10)

function createTable(parent, cols, rows) {
    for (let i = 0; i < rows; i++) {
        let tr = document.createElement('tr')
        for (let j = 0; j < cols; j++) {
            let td = document.createElement('td')
            if (i == 0) {
                td.innerText = arr[j]
            } else {
                if (j == 0) {
                    td.innerText = superhero[i - 1].name
                }
                if (j == 1) {
                    td.innerText = superhero[i - 1].strength
                }
                if (j == 2) {
                    td.innerText = superhero[i - 1].age
                }
            }
            tr.appendChild(td)
        }
        table.appendChild(tr)
    }
    parent.appendChild(table)
}

let sortedRows = new Intl.Collator() //конструктор сортировщиков

function test(event) {
    if (event.target.innerHTML === 'Name') {
        if (!checkSort) {
            superhero.sort((a, b) => sortedRows.compare(a.name, b.name))
            notification.innerHTML = "Sorting by Name, order: ASC"
            checkSort = true
        } else {
            superhero.sort((a, b) => sortedRows.compare(b.name, a.name))
            notification.innerHTML = "Sorting by Name, order: DESC"
            checkSort = false
        }

    } else if (event.target.innerHTML === 'Strength') {
        if (!checkSort) {
            superhero.sort((a, b) => sortedRows.compare(a.strength, b.strength))
            notification.innerHTML = "Sorting by Strength, order: ASC"
            checkSort = true
        } else {
            superhero.sort((a, b) => sortedRows.compare(b.strength, a.strength))
            notification.innerHTML = "Sorting by Strength, order: DESC"
            checkSort = false
        }

    } else if (event.target.innerHTML === 'Age') {
        if (!checkSort) {
            superhero.sort((a, b) => sortedRows.compare(a.age, b.age))
            notification.innerHTML = "Sorting by Age, order: ASC"
            checkSort = true
        } else {
            superhero.sort((a, b) => sortedRows.compare(b.age, a.age))
            notification.innerHTML = "Sorting by Age, order: DESC"
            checkSort = false
        }
    }

    clearTable();
}

let x = document.querySelector("tr")

x.addEventListener('click', test)

function clearTable() {
    let count = 0
    let tdTable = document.querySelectorAll("td")
    for (let i = 3; tdTable[i]; i++) {
        if (i % 3 == 0) {
            tdTable[i].innerHTML = superhero[count].name
            tdTable[i + 1].innerHTML = superhero[count].strength
            tdTable[i + 2].innerHTML = superhero[count].age
            count++;
        }
    }
}

