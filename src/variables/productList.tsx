import {ProductListInterface} from "../interfaces/Interfaces";

export const productsList: ProductListInterface[] = [
    {
        id:'1',
        title: "Burger",
        image: "/assets/list/burger-default.jpeg",
        'list': [
            {
                id : '2',
                name : 'Burger XXL',
                price: 14.99,
                description: 'Lorem Ipsum',
                image: ''
            },
            {
                id : '3',
                name : 'Burger BBQ',
                price: 13.99,
                description: 'Lorem Ipsum',
                image: ''
            },
            {
                id : '4',
                name : 'Burger Chicken',
                price: 11.99,
                description: 'Lorem Ipsum',
                image: ''
            },
            {
                id : '5',
                name : 'Burger Vegan',
                price: 10.99,
                description: 'Lorem Ipsum',
                image: ''
            }
        ],
    },
    {
        id : '6',
        title: 'Fries',
        image: '/assets/list/fries-default.jpg',
        list: [
            {
                'id' : '7',
                'name' : 'Fries Classic',
                'price': 6.99,
                'description': 'Lorem Ipsum',
                'image': ''
            },
            {
                'id' : '8',
                'name' : 'Fries Twist',
                'price': 7.99,
                'description': 'Lorem Ipsum',
                'image': ''
            },
            {
                'id' : '9',
                'name' : 'Fries Grandma',
                'price': 7.99,
                'description': 'Lorem Ipsum',
                'image': ''
            },
            {
                'id' : '10',
                'name' : 'Fries XXL',
                'price': 9.99,
                'description': 'Lorem Ipsum',
                'image': ''
            }
        ],
    },
    {
        id : '11',
        title: 'Beverage',
        image: '/assets/list/beverage-default.jpeg',
        list: [
            {
                id : '12',
                name : 'Classic Coke',
                price: 3.99,
                description: 'Lorem Ipsum',
                image: ''
            },
            {
                id : '13',
                name : 'Beer',
                price: 4.99,
                description: 'Lorem Ipsum',
                image: ''
            },
            {
                id : '14',
                name : 'Water',
                price: 1.99,
                description: 'Lorem Ipsum',
                image: ''
            }
        ],
    }
];