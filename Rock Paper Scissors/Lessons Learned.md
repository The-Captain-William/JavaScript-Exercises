# Lessons Learned with Rock Paper Scissors

## Custom HTML Attributes
You can prefix any name with `data-` to create a custom attribute which JS can act on.

HTML
```html
<button class="choice" data-choice="Rock">Rock</button> ⭐
```

JS
```js
function computerPlay(){
    // .random is [0, 1)
    // ex: 0.99 * 3 = 3.96, floor is 2.97
    // randomInt will go from 0 to 2
    // choice starts at zeroth index, so 0, 1, 2
    let randomInt = Math.floor(Math.random() * 3);
    console.log(randomInt)
    let choice = buttons[randomInt].getAttribute('data-choice'); ⭐
    return choice;
}
```


## Objects
### You can attach functions inside objects

```js
let score = {
    wins: 0,
    losses: 0,
    ties: 0,
    updateScore
};
```

### You can verify if an object has an attribute, and use bracket notation on an object much like a Python dictionary.

```js
function updateScore(result){
    // check if the object has this property, key
    if (score.hasOwnProperty(result)) {
        score[result]++;
    }
}
```

## DOM Manipulation

### There are several ways to select elements

`document.getElementByID`
```js
let choiceReport = document.getElementById('js-player-selection');
```

<br>

`document.querySelector`
`document.querySelectorAll`
```js
const buttons = document.querySelectorAll('.choice')
```

### String interpolation with template literals

Using backticks, dollarsigns, and brackets.
```js
    scoreElement.innerHTML = `
    Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}
    `;
```

### How to add an event listener to a collection of elements

Here I'm listening for the click event, and assigning the `playGame()` function for every button in buttons.

```js
// grab all buttons. They are constant so const can be used.
const buttons = document.querySelectorAll('.choice')
// buttons[0].textContent; or buttons[0].innerHTML yields a specific choice
// .getAttribute('data-choice') will do the same in this instance

// for each, add an event listener.
// https://devdocs.io/dom/eventtarget/addeventlistener
buttons.forEach(button => {
    button.addEventListener('click', () => {playGame(button)});
});
```

## Questions for myself

### Event listeners
Can you explain event listeners and arrow notation in greater detail?

### OOP
Is there a cleaner, less procedural way to tie all of these functions together?
