import { presetsCards } from "./cards-component.js";

function renderingDifficulty() {
    window.globalThis.mainElement.innerHTML = `
<section class="difficulty">
<h1 class="difficulty__title">Выбери сложность</h1>
<div class="difficulty__choose">
    <button class="difficulty__chooseButton">1</button>
    <button class="difficulty__chooseButton">2</button>
    <button class="difficulty__chooseButton">3</button>
</div>
<button class="difficulty__buttonStart">Старт</button>
</section>
`;

    checkButtonDifficulty();
}

function checkButtonDifficulty() {
    const chooseButtonElements = document.querySelectorAll(
        ".difficulty__chooseButton"
    );
    const startButtonElement = document.querySelector(
        ".difficulty__buttonStart"
    );

    for (const chooseButtonElement of chooseButtonElements) {
        chooseButtonElement.addEventListener("click", () => {
            for (const chooseButtonElement of chooseButtonElements) {
                chooseButtonElement.classList.remove("-button-active");
            }
            chooseButtonElement.classList.add("-button-active");
            if (chooseButtonElement.textContent === "1") {
                window.globalThis.difficulty = "easy";
                window.globalThis.cards = "6 карточек (3 пары)";
            } else if (chooseButtonElement.textContent === "2") {
                window.globalThis.difficulty = "normal";
                window.globalThis.cards = "12 карточек (6 пар)";
            } else if (chooseButtonElement.textContent === "3") {
                window.globalThis.difficulty = "hard";
                window.globalThis.cards = "18 карточек (9 пар)";
            }
        });
    }

    startButtonElement.addEventListener("click", () => {
        if (!window.globalThis.difficulty) {
            alert("Сначала выберете сложность");
            return;
        }
        presetsCards();
    });
}

export { renderingDifficulty };
