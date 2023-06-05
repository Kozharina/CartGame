import "./css/styles.css";
import { renderingDifficulty } from "./components/difficulty-component.js";


window.globalThis = {
    mainElement: document.getElementById("main"),
    suit: ["spades", "hearts", "diamonds", "clubs"],
    rank: ["A", "K", "Q", "J", "10", "9", "8", "7", "6"],
};

renderingDifficulty();

function randomSuitAndRank(numb) {
    let randomPreset = new Array(numb);
    for (let i = 0; i < numb; i++) {
        if (window.globalThis.suit.length === 0) {
            window.globalThis.suit = ["spades", "hearts", "diamonds", "clubs"];
        }
        if (window.globalThis.rank.length === 0) {
            window.globalThis.rank = [
                "A",
                "K",
                "Q",
                "J",
                "10",
                "9",
                "8",
                "7",
                "6",
            ];
        }
        const randomSuit = Math.floor(
            Math.random() * window.globalThis.suit.length
        );
        const randomRank = Math.floor(
            Math.random() * window.globalThis.rank.length
        );
        randomPreset[i] =
            window.globalThis.suit[randomSuit] +
            window.globalThis.rank[randomRank];
        window.globalThis.suit.splice(randomSuit, 1);
        window.globalThis.rank.splice(randomRank, 1);
    }
    window.globalThis.randomPreset = [...randomPreset, ...randomPreset];
    return;
}

function randomButtonElements(numb) {
    let randomButtonElement = new Array();
    for (let i = 0; i < numb; i++) {
        const randomI = Math.floor(
            Math.random() * window.globalThis.randomPreset.length
        );
        randomButtonElement[i] = `
        <button data-preset="${window.globalThis.randomPreset[randomI]}" class="game__cards-button preset__${window.globalThis.randomPreset[randomI]}"></button>
        `;
        window.globalThis.randomPreset.splice(randomI, 1);
    }
    return randomButtonElement.join("");
}

export { randomSuitAndRank, randomButtonElements };
