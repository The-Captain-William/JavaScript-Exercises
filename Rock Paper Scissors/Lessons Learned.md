# Lessons Learned with Rock Paper Scissors

## Nomenclature
### `JS-` HTML tag
HTML elements that have JS acting on them should be prefixed with `js-`.

### Custom HTML Attributes
You can prefix any name with `data-` to create a custom attribute which JS can act on.

HTML
```html
<button class="choice" data-choice="Rock">Rock</button> ⭐
```

JS
```js
function computerPlay(){
    // .random is [0, 1)
    // ex: 0.99 * 3 = 2.97, floor is 2
    // randomInt will go from 0 to 2
    // choice starts at zeroth index, so 0, 1, 2
    let randomInt = Math.floor(Math.random() * 3);
    console.log(randomInt)
    let choice = buttons[randomInt].getAttribute('data-choice'); ⭐
    return choice;
}
```
## Algorithms
### Assigning value to strings in a quick way
When given a set of string conditions and a points system that operates with respect to a player, we can organize values quickly by using all truthy and unique values (ie a tie) with respect to one player, and use `else` as a way to account for all inverse conditions that would be falsey values.

This works in a pinch for conditions like these.
```js
    // rock beats scissors 
    // paper beats rock
    // scissors beat paper
    
    if (playerChoice == 'Rock' && computerChoice == 'Scissors') {
        score.updateScore('wins');
    } else if (playerChoice == 'Paper' && computerChoice == 'Rock') {
        score.updateScore('wins');
    } else if (playerChoice == 'Scissors' && computerChoice == 'Paper') {
        score.updateScore('wins');
    } else if (playerChoice == computerChoice) {
        score.updateScore('ties');
    } else {
        score.updateScore('losses');
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
