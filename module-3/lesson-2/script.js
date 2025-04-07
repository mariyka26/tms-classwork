let carBrand = 'Fard';
let carModel = 'Mustang';
let carYear = 1985;
const arrNums = [1, 2, 3];
const users = [
    {
        id: 7,
        email: "michael.lawson@reqres.in",
        first_name: "Michael",
        last_name: "Lawson",
        avatar: "https://reqres.in/img/faces/7-image.jpg",
        age: 23,
    },
    {
        id: 8,
        email: "lindsay.ferguson@reqres.in",
        first_name: "Lindsay",
        last_name: "Ferguson",
        avatar: "https://reqres.in/img/faces/8-image.jpg",
        age: 20,
    },
];
const products = [
    {
        id: 1,
        name: "Burger Premium",
        price: 6,
        currency: "euro",
        ingredients: ["flour", "beef", "salad", "cheese", "sauce"],
        type: "burger",
        available: true,
    },
    {
        id: 2,
        name: "Burger Lite",
        price: 2.3,
        currency: "euro",
        ingredients: ["flour", "beef", "cheese", "sauce", "cucumber"],
        type: "burger",
        available: true,
    },
];
let post = {
    title: 'Post 1',
    body: 'This is post 1',
    createdAt: new Date(),
    isPublished: true,
    tags: ['news', 'IT'],
    getInfo() {
        return this.title + ' ' + this.body;
    },
    author: {
        name: 'John',
        age: 30,
        role: 'editor'
    }
};
