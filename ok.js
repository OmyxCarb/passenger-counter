let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")

console.log(countEl)

let count = 0

function increment() {
    count += 1
    countEl.innerText = count
}

function save() {
    let var1 = count + " - "
    saveEl.innerText += var1
    countEl.innerText = 0
    count = 0
}
function reset() {
    saveEl.innerText = "Previous enteries: "
    countEl.innerText = 0
}