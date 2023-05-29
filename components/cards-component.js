import { renderingDifficulty } from "./difficulty-component.js"

function presentsCards() {
    if (window.globalThis.difficulty === "easy") {
        window.globalThis.mainElement.innerHTML = `
        <h1>ЛЕГКИЙ УРОВЕНЬ</h1>
        <button class="difficulty__buttonStart">Назад</button>
        `
    } else if (window.globalThis.difficulty === "normal") {
        window.globalThis.mainElement.innerHTML = `
        <h1>СРЕДНИЙ УРОВЕНЬ </h1>
        <button class="difficulty__buttonStart">Назад</button>
        `
    } else if (window.globalThis.difficulty === "hard") {
        window.globalThis.mainElement.innerHTML = `
        <h1>СЛОЖНЫЙ УРОВЕНЬ</h1>
        <button class="difficulty__buttonStart">Назад</button>
        `
    }

    document.querySelector(".difficulty__buttonStart").addEventListener("click", () => {
        renderingDifficulty();
    })
}

export { presentsCards }

// export { presetsCards as renderingPresetsCards }