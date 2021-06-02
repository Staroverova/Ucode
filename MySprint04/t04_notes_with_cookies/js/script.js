let notes = document.querySelector("#output")
let text = document.querySelector("#input")
let counter = 0

function textInput() {
    if (text.value === "") {
        alert("It's empty. Try to input something in 'Text input'.")
    }
    else {
        let cookieValue = escape(document.form.name.value)
        data = new Date()
        data.setMonth(data.getMonth() + 1)
        data = data.toUTCString()

        notes.value += " --> " + cookieValue + "\n"
        document.cookie = `${counter}name =` + cookieValue + `;expires =` + data
        counter++
    }
}

function clearNodes() {
    let result = confirm("Are you sure?")
    if (result == true) {
        notes.value = ""
        text.value = ""
        let cook = document.cookie.split(";")
        for (let i = 0; i < cook.length; i++) {
            let cookie = cook[i]
            let pos = cookie.indexOf("=")
            let name = pos > -1 ? cookie.substr(0, pos) : cookie
            document.cookie = name + "expires=" + data
        }
    }
}