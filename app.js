const cardArray = [
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'burger',
        img: 'images/burger.png'
    },
    {
        name: 'icecream',
        img: 'images/icecream.png'
    },
    {
        name: 'smoothie',
        img: 'images/smoothie.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    },
    {
        name: 'icecream',
        img: 'images/icecream.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'burger',
        img: 'images/burger.png'
    },
    {
        name: 'smoothie',
        img: 'images/smoothies.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    }

]
cardArray.sort(() => 0.5 - Math.random())

const grid = document.querySelector('.grid')

function createBoard() {
    for (let i = 0; i < 10; i++) {
       const card = document.createElement('img')
       card.setAttribute('src', 'images/back.png')
       card.setAttribute('data-id', i)
       grid.appendChild(card)
    }
}


createBoard()
