let carBrand = 'Fard';
let carModel = 'Mustang';
let carYear = 1985;

const arrNums: number [] = [1,2,3]

// Задание 1
type User = {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
    age: number;
  }

const users: User[] = [
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

//Задание 2
type Product = {
    id: number;
    name: string;
    price: number;
    currency: string;
    ingredients: string[];
    type: string;
    available: boolean;
  }

const products: Product[] = [
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

// Задание 3
interface Author {
    name: string;
    age: number;
    role: string;
  }
  
  interface Post {
    title: string;
    body: string;
    createdAt: Date;
    isPublished: boolean;
    tags: string[];
    getInfo(): string;
    author: Author;
  }

  let post = {
    title: 'Post 1',
    body: 'This is post 1',
    createdAt: new Date(),
    isPublished: true,
    tags: ['news', 'IT'],
    getInfo(): string {
      return this.title + ' ' + this.body
    },
    author: {
      name: 'John',
      age: 30,
      role: 'editor'
    }
  }

  