interface Category {
    name: string;
}

interface Product {
    category: Category;
}

const isProduct = (input: Category | string | null): input is Category => {
    return typeof input === "object" && input !== null && "name" in input;
};

const isString = (input: Category | string | null): input is string => {
    return typeof input === "string";
};

function processData(input: Category | string | null): string | null {
    if (isProduct(input)) {
        return input.name;
    } else if (isString(input)) {
        return input;
    }
    return null;
}

console.log(processData({ name: "Name" }));
console.log(processData("Is string!"));
console.log(processData(null));
