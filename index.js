const difficultyElement = document.querySelector(".difficulty");

difficultyElement.innerHTML = `
<h1 class="difficulty__title">Выбери сложность</h1>
<div class="difficulty__choose">
    <button class="difficulty__chooseButton">1</button>
    <button class="difficulty__chooseButton">2</button>
    <button class="difficulty__chooseButton">3</button>
</div>
<button class="difficulty__buttonStart">Старт</button>
`

const chooseButtonElements = document.querySelectorAll(".difficulty__chooseButton")
const startButtonElement = document.querySelector(".difficulty__buttonStart")

startButtonElement.addEventListener("click", () => {
    console.log("Нажали");
})

for (const chooseButtonElement of chooseButtonElements) {
    chooseButtonElement.addEventListener("click", () => {
        console.log("Нажали");
    })
}