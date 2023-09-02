function transformArray<T, N>(array: T[], callback: (value: T) => N): N[] {
    const returnArray: N[] = [];

    for (const item of array) {
        const transformed = callback(item);
        returnArray.push(transformed);
    }

    return returnArray;
}

const numberArray = [1, 2, 3, 4, 5];
const doubledArray = transformArray(numberArray, (num) => num * 2);
console.log(doubledArray); // Output: [2, 4, 6, 8, 10]

const stringArray = ["apple", "banana", "cherry"];
const uppercasedArray = transformArray(stringArray, (str) => str.toUpperCase());
console.log(uppercasedArray); // Output: ['APPLE', 'BANANA', 'CHERRY']

const objectArray = [
    { name: "Mario", money: 11 },
    { name: "Chiara", money: 15 },
];
const increaseMoney = transformArray(objectArray, (person) => person.money + 1);
console.log(increaseMoney);
