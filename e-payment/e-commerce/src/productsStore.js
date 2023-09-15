const productsArray=[
    {
        id:"price_1N4fiISEWY5cUsl8SJ23VcP2",
        price:200,
        title:  "Coffee Cup"
    },
    {
        id:"price_1N5juPSEWY5cUsl8C7lvGzfs",
        price:500,
        title:  "Sunglasses"
    },
    {
        id:"price_1N5jxsSEWY5cUsl8FXIo3ZLx",
        price:20000,
        title:  "Camera"
    },
    {
        id:"price_1N5jzOSEWY5cUsl89VzGiQq7",
        price:50000,
        title:  "Play Station"
    },
    {
        id:"price_1N5k1ESEWY5cUsl8YdmiwSbm",
        price:500,
        title:  "Shirt"
    },
    {
        id:"price_1N5k2SSEWY5cUsl8TUN8Mru1",
        price:48000,
        title:  "Led Tv"
    },
    {
        id:"price_1N5k3QSEWY5cUsl8kkR0TeL6",
        price:80000,
        title:  "5 Star A.c"
    },
];


function getProductData(id) {
    let productData = productsArray.find(product => product.id === id);

    if (productData == undefined) {
        console.log("Product data does not exist for ID: " + id);
        return undefined;
    }

    return productData;
}

export { productsArray, getProductData };