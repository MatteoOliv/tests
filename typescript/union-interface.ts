interface BaseProduct {
    name: string;
    price: number;
    description: string;
}

type SizeVariation = {
    variationType: "size";
    size: string;
};

type ColorVariation = {
    variationType: "color";
    color: string;
};

type MaterialVariation = {
    variationType: "material";
    material: string;
};

type Variation = SizeVariation | ColorVariation | MaterialVariation;

interface ProductWithVariations extends BaseProduct {
    variations: Variation[];
}

const product: ProductWithVariations = {
    name: "T-Shirt",
    price: 29.99,
    description: "A comfortable and stylish T-shirt.",
    variations: [],
};

const sizeVariation: ProductWithVariations = {
    name: "T-Shirt",
    price: 34.99,
    description: "A comfortable and stylish T-shirt.",
    variations: [
        {
            variationType: "size",
            size: "L",
        },
        {
            variationType: "color",
            color: "red",
        },
        {
            variationType: "material",
            material: "wool",
        },
    ],
};

const colorVariation: ProductWithVariations = {
    name: "T-Shirt",
    price: 39.99,
    description: "A comfortable and stylish T-shirt.",
    variations: [
        {
            variationType: "color",
            color: "blue",
        },
    ],
};

const materialVariation: ProductWithVariations = {
    name: "T-Shirt",
    price: 44.99,
    description: "A comfortable and stylish T-shirt.",
    variations: [
        {
            variationType: "material",
            material: "cotton",
        },
    ],
};
