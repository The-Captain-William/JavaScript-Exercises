# Lessons Learned with Shipping Calculator

## DataTypes

### NaN is considered a `Number` type in JS

The way I got around this was checking to see if the `primitive.toString()` was a `NaN`

```js
    // a way to check if a value is greater than zero and not NaN
    // ⭐ JS considers NaN to be of type number
    if (cost > 0 && cost.toString() != 'NaN') {
        if (cost < 40) {
            cost += 10;
        }

        let displayCost = document.getElementById('js-cost-total'); 
        displayCost.innerHTML = `Your total cost is \$${cost}`;

    } else if (cost.toString() == 'NaN') {
        console.log('not a number');
    }
```

This seemed to be more effective than `try..catch`
```js
try {
    ...
} catch(e) {

}

```

### You can check types with `typeof`

```js
console.log(typeof cost)
```
- The keywords like `typeof` are similar to  the `del` keyword in Python or keywords in SQL, they do not require encapsulation with parenthesis.
- The return of typeof is a string, ie `'number'`.
    - `typeof 10 == 'number'` yields true.


## Event Listeners

### You can plop down an event listener from right inside the HTML

```html
<input id="js-input-value" type="text" placeholder="Cost of Order" onkeydown="if (event.key === 'Enter') {calculateShipping()}">

```