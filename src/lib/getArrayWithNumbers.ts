import getRandomNumber from "./getRandomNumber";

const HIGHEST_NUMBER_TO_RANDOMIZE = 9

const getArrayWithNumbers = (arrayLength: number) => {
    const mockArray = Array.from(Array(arrayLength)) as number[];

    mockArray.forEach((_, index) => {
        const randomNumber = getRandomNumber(HIGHEST_NUMBER_TO_RANDOMIZE)

        mockArray[index] = randomNumber
    })

    return mockArray
}

export default getArrayWithNumbers;