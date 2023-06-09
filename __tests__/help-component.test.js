const { it, expect, describe } = require("@jest/globals");
const {
    randomSuitAndRank,
    randomButtonElements,
} = require("../src/components/help-component");

describe("Функции внутри модуля help-components", () => {
    it("Creates an Array with random content based on the other two and duplicates it, check for the length of the created Array", () => {
        const number = 3;
        let randomArr = new Array(number);

        randomArr = randomSuitAndRank(number);

        expect(randomArr).toHaveLength(number + number);
    });

    it("Creates a string with HTML markup button, check for string", () => {
        const number = 6;
        let randomArr = new Array(number);

        randomArr = randomButtonElements(number);

        expect(randomArr).toEqual(expect.any(String));
    });

    it("Creates a string with HTML markup button, check for button in string", () => {
        const number = 6;
        let randomArr = new Array(number);

        randomArr = randomButtonElements(number);

        expect(randomArr).toMatch("button");
    });
});