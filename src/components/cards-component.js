import { renderingDifficulty } from "./difficulty-component.js";

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

const presetsClosedCards = `
<div class="game">
    ${gameTitleElement}
    <div class="game__cards">
        <button class="game__cards-button"></button>
        <button class="game__cards-button"></button>
        <button class="game__cards-button"></button>
        <button class="game__cards-button"></button>
        <button class="game__cards-button"></button>
        <button class="game__cards-button"></button>
        <button class="game__cards-button"></button>
        <button class="game__cards-button"></button>
        <button class="game__cards-button"></button>
        <button class="game__cards-button"></button>
        <button class="game__cards-button"></button>
        <button class="game__cards-button"></button>
        <button class="game__cards-button"></button>
        <button class="game__cards-button"></button>
        <button class="game__cards-button"></button>
        <button class="game__cards-button"></button>
        <button class="game__cards-button"></button>
        <button class="game__cards-button"></button>
        <button class="game__cards-button"></button>
        <button class="game__cards-button"></button>
        <button class="game__cards-button"></button>
        <button class="game__cards-button"></button>
        <button class="game__cards-button"></button>
        <button class="game__cards-button"></button>
        <button class="game__cards-button"></button>
        <button class="game__cards-button"></button>
        <button class="game__cards-button"></button>
        <button class="game__cards-button"></button>
        <button class="game__cards-button"></button>
        <button class="game__cards-button"></button>
        <button class="game__cards-button"></button>
        <button class="game__cards-button"></button>
        <button class="game__cards-button"></button>
        <button class="game__cards-button"></button>
        <button class="game__cards-button"></button>
        <button class="game__cards-button"></button>
    </div>
</div>
`;

const presetsOpenCards = `
<div class="game">
    ${gameTitleElement}
    <div class="game__cards">
    <button class="game__cards-button"><img src="./img/peaks/ace peaks.png" alt="Туз пики"></button>
    <button class="game__cards-button"><img src="./img/peaks/king peaks.png" alt="Король пики"></button>
    <button class="game__cards-button"><img src="./img/peaks/jack peaks.png" alt="дама пики"></button>
    <button class="game__cards-button"><img src="./img/peaks/jack peaks.png" alt="валет пики"></button>
    <button class="game__cards-button"><img src="./img/peaks/10 peaks.png" alt="10 пики"></button>
    <button class="game__cards-button"><img src="./img/peaks/9 peaks.png" alt="9 пики"></button>
    <button class="game__cards-button"><img src="./img/peaks/8 peaks.png" alt="8 пики"></button>
    <button class="game__cards-button"><img src="./img/peaks/7 peaks.png" alt="7 пики"></button>
    <button class="game__cards-button"><img src="./img/peaks/6 peaks.png" alt="6 пики"></button>
    <button class="game__cards-button"><img src="./img/worms/ace worms.png" alt="Туз черви"></button>
    <button class="game__cards-button"><img src="./img/worms/king worms.png" alt="Король черви"></button>
    <button class="game__cards-button"><img src="./img/worms/queen worms.png" alt="Дама черви"></button>
    <button class="game__cards-button"><img src="./img/worms/jack worms.png" alt="Валет черви"></button>
    <button class="game__cards-button"><img src="./img/worms/10 worms.png" alt="10 черви"></button>
    <button class="game__cards-button"><img src="./img/worms/9 worms.png" alt="9 черви"></button>
    <button class="game__cards-button"><img src="./img/worms/8 worms.png" alt="8 черви"></button>
    <button class="game__cards-button"><img src="./img/worms/7 worms.png" alt="7 черви"></button>
    <button class="game__cards-button"><img src="./img/worms/6 worms.png" alt="6 черви"></button>
    <button class="game__cards-button"><img src="./img/diamonds/ace diamonds.png" alt="Туз бубны"></button>
    <button class="game__cards-button"><img src="./img/diamonds/king diamonds.png" alt="король бубны"></button>
    <button class="game__cards-button"><img src="./img/diamonds/queen diamonds.png" alt="дама бубны"></button>
    <button class="game__cards-button"><img src="./img/diamonds/jack diamonds.png" alt="валет бубны"></button>
    <button class="game__cards-button"><img src="./img/diamonds/10 diamonds.png" alt="10 бубны"></button>
    <button class="game__cards-button"><img src="./img/diamonds/9 diamonds.png" alt="9 бубны"></button>
    <button class="game__cards-button"><img src="./img/diamonds/8 diamonds.png" alt="8 бубны"></button>
    <button class="game__cards-button"><img src="./img/diamonds/7 diamonds.png" alt="7 бубны"></button>
    <button class="game__cards-button"><img src="./img/diamonds/6 diamonds.png" alt="6 бубны"></button>
    <button class="game__cards-button"><img src="./img/baptize/ace baptize.png" alt="ace baptize"></button>
    <button class="game__cards-button"><img src="./img/baptize/king baptize.png" alt="Король крести"></button>
    <button class="game__cards-button"><img src="./img/baptize/queen baptize.png" alt="Дама крести"></button>
    <button class="game__cards-button"><img src="./img/baptize/jack baptize.png" alt="Валет крести"></button>
    <button class="game__cards-button"><img src="./img/baptize/10 baptize.png" alt="10 крести"></button>
    <button class="game__cards-button"><img src="./img/baptize/9 baptize.png" alt="9 крести"></button>
    <button class="game__cards-button"><img src="./img/baptize/8 baptize.png" alt="8 крести"></button>
    <button class="game__cards-button"><img src="./img/baptize/7 baptize.png" alt="7 крести"></button>
    <button class="game__cards-button"><img src="./img/baptize/6 baptize.png" alt="6 крести"></button>
</div>
</div>
`;

function presetsCards() {
    switch (window.globalThis.difficulty) {
        case "easy":
            window.globalThis.mainElement.innerHTML = presetsClosedCards;
            break;
        case "normal":
            window.globalThis.mainElement.innerHTML = presetsClosedCards;
            break;
        case "hard":
            window.globalThis.mainElement.innerHTML = presetsOpenCards;
            break;
        default:
            break;
    }

    document
        .querySelector(".game__again-button")
        .addEventListener("click", () => {
            renderingDifficulty();
        });
}

export { presetsCards };
