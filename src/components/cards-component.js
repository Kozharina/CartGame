import { renderingDifficulty } from "./difficulty-component.js";
import { randomSuitAndRank, randomButtonElements } from "../index.js";

const gameTitleElement = `
<div class="game__title">
    <div class="game__time-box">
        <div class="game__text-box">
            <p class="game__text">min</p>
            <p class="game__text">sek</p>
        </div>
        <p class="game__time">00.00</p>
    </div>
    <button class="game__again-button">Начать заново</button>
</div>
`;

function presetsCards() {
    switch (window.globalThis.difficulty) {
        case "easy":
            randomSuitAndRank(3);
            window.globalThis.mainElement.innerHTML = `
            <div class="game">
                ${gameTitleElement}
                <div class="game__cards">
                    ${randomButtonElements(6)}
                </div>
            </div>
            `;
            break;
        case "average":
            randomSuitAndRank(6);
            window.globalThis.mainElement.innerHTML = `
            <div class="game">
                ${gameTitleElement}
                <div class="game__cards">
                    ${randomButtonElements(12)}
                </div>
            </div>
            `;
            break;
        case "hard":
            randomSuitAndRank(9);
            window.globalThis.mainElement.innerHTML = `
            <div class="game">
                ${gameTitleElement}
                <div class="game__cards">
                    ${randomButtonElements(18)}
                </div>
            </div>
            `;
            break;
        default:
            break;
    }

    document
        .querySelector(".game__again-button")
        .addEventListener("click", () => {
            delete window.globalThis.selectedCard;
            renderingDifficulty();
        });

    checkButtonPresets();
}

function checkButtonPresets() {
    const buttonElements = document.querySelectorAll(".game__cards-button");
    setTimeout(() => {
        for (const buttonElement of buttonElements) {
            buttonElement.classList.remove(
                `preset__${buttonElement.dataset.preset}`
            );
        }

        for (const buttonElement of buttonElements) {
            buttonElement.addEventListener("click", () => {
                buttonElement.classList.add("-button-active");
                buttonElement.classList.add(
                    `preset__${buttonElement.dataset.preset}`
                );
                if (!window.globalThis.selectedCard) {
                    window.globalThis.selectedCard =
                        buttonElement.dataset.preset;
                    buttonElement.dataset.preset = "";
                    return;
                }
                if (
                    window.globalThis.selectedCard ===
                    buttonElement.dataset.preset
                ) {
                    alert("Вы победили!");
                    delete window.globalThis.selectedCard;
                } else {
                    alert("Вы проиграли!");
                    delete window.globalThis.selectedCard;
                }
            });
        }
    }, 5 * 1000);
}

export { presetsCards };
