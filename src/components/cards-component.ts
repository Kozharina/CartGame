import { renderingDifficulty } from "./difficulty-component";
import { globalThis } from "../index";
import { renderingWinGame, renderingloseGame } from "./end-game-component";
import {
    randomSuitAndRank,
    randomButtonElements,
    startTime,
} from "./help-component";

const gameTitleElement = `
<div class="game__title">
    <div class="game__time-box">
        <div class="game__text-box">
            <p class="game__text">min</p>
            <p class="game__text">sek</p>
        </div>
        <span id="timer" class="game__time">00:00</span>
    </div>
    <button class="game__again-button">Начать заново</button>
</div>
`;

function presetsCards() {
    switch (globalThis.difficulty) {
        case "easy":
            randomSuitAndRank(3);
            globalThis.mainElement!.innerHTML = `
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
            globalThis.mainElement!.innerHTML = `
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
            globalThis.mainElement!.innerHTML = `
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

    const againButton = document.querySelector(".game__again-button");

    againButton!.addEventListener("click", () => {
        globalThis.selectedCard = "clear";
        renderingDifficulty();
    });

    checkButtonPresets();
}

function checkButtonPresets() {
    const buttonElements = document.querySelectorAll(".game__cards-button");
    let cardIndex = 0;
    let timerCheck = false;
    setTimeout(() => {
        for (const buttonElement of buttonElements) {
            if (buttonElement instanceof HTMLElement) {
                buttonElement.classList.remove(
                    `preset__${buttonElement.dataset.preset}`
                );
            }
        }

        for (const buttonElement of buttonElements) {
            if (buttonElement instanceof HTMLElement) {
                buttonElement.addEventListener("click", () => {
                    buttonElement.classList.add("-button-active");
                    buttonElement.classList.add(
                        `preset__${buttonElement.dataset.preset}`
                    );
                    switch (globalThis.selectedCard) {
                        case "clear":
                            if (!timerCheck) {
                                startTime();
                            }
                            timerCheck = true;
                            globalThis.selectedCard =
                                buttonElement.dataset.preset;
                            buttonElement.dataset.preset = "open";
                            break;
                        case "open":
                            globalThis.selectedCard = "clear";
                            break;
                        case buttonElement.dataset.preset:
                            cardIndex = cardIndex + 2;
                            if (globalThis.index === cardIndex) {
                                timerCheck = false;
                                renderingWinGame();
                                return;
                            }
                            globalThis.selectedCard = "clear";
                            buttonElement.dataset.preset = "open";
                            break;
                        default:
                            timerCheck = false;
                            renderingloseGame();
                            break;
                    }
                });
            }
        }
    }, 5 * 1000);
}

export { presetsCards };