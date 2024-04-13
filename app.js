const cardArray = [
    {
        name: 'fries',
        img: 'images/fries.jpg',
    },
    {
        name: 'burger',
        img: 'images/burger.jpg',
    },
    {
        name: 'icecream',
        img: 'images/icecream.jpg',
    },
    {
        name: 'smoothie',
        img: 'images/smoothie.jpg',
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.jpg',
    },
    {
        name: 'pizza',
        img: 'images/pizza.jpg',
    },
    {
        name: 'icecream',
        img: 'images/icecream.jpg',
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.jpg',
    },
    {
        name: 'fries',
        img: 'images/fries.jpg',
    },
    {
        name: 'burger',
        img: 'images/burger.jpg',
    },
    {
        name: 'smoothie',
        img: 'images/smoothies.jpg',
    },
    {
        name: 'pizza',
        img: 'images/pizza.jpg',
    },

]
cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid')

function createBoard(){
    for(let i = 0; i < 10; i++){
       const card = document.createElement('img')
       card.setAttribute('src', 'images/back.png')
       card.setAttribute('data-id', i)
       gridDisplay.appendChild(card)

    }
}

createBoard()
