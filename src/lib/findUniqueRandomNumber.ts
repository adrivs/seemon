import getRandomNumber from "./getRandomNumber"

const HIGHEST_NUMBER_TO_RANDOMIZE = 9

const findUniqueRandomNumber = (numbers: number[]) => {
    const randomNumber = getRandomNumber(HIGHEST_NUMBER_TO_RANDOMIZE)
    const isRandomNumberInTheList = numbers.includes(randomNumber)

    if (isRandomNumberInTheList) {
        return findUniqueRandomNumber(numbers)
    }

    return randomNumber
}

export default findUniqueRandomNumber