const name = document.querySelector(".name")
const points = document.querySelector(".points")
let addButton = document.querySelector(".addTask")
let taskContainer = document.querySelector(".tasks")
let number = localStorage.getItem("number");

let myKeysValue = window.location.search
let searchcParams = new URLSearchParams(myKeysValue)

console.log(localStorage)

function LoadSite() {
    let currentDate = new Date().getDate().toString()

    for (let i = 1; i <= (localStorage.length / 2 - 1); i++) {

        if (localStorage.getItem(`date[${i}]`) === currentDate) {

            let task = document.createElement("div")
            task.classList.add("singleTask")

            let nameSpan = document.createElement("span")
            nameSpan.append(localStorage.getItem(`name[${i}]`))

            let pointsSpan = document.createElement("span")
            pointsSpan.classList.add("pointsSpan")
            pointsSpan.append(localStorage.getItem(`points[${i}]`))
            pointsSpan.style.backgroundColor = searchcParams.get("color")

            task.append(nameSpan)
            task.append(pointsSpan)
            taskContainer.append(task)
        }
    }
}

LoadSite()
addButton.addEventListener("click", () => {
    number++;
    localStorage.setItem("number", number)

    let card = document.createElement("div")
    card.classList.add("card")

    let nameSpan = document.createElement("span")
    nameSpan.append(name.value)
    localStorage.setItem(`name[${localStorage.getItem("number")}]`, name.value)

    let pointsSpan = document.createElement("span")
    pointsSpan.append(points.value)
    pointsSpan.classList.add("pointsSpan")
    localStorage.setItem(`points[${localStorage.getItem("number")}]`, points.value)

    if (searchParams.get("topic") === "red") {
        pointsSpan.style.backgroundColor = "red"
    }

    let dateOfCreation = new Date().getDate().toString()
    localStorage.setItem(`date[${localStorage.getItem("number")}]`, dateOfCreation)

    card.append(nameSpan)
    card.append(pointsSpan)
    taskContainer.append(card)
})

