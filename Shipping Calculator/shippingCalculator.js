function calculateShipping() {
    const inputElement = document.getElementById('js-input-value');
    let cost = parseFloat(inputElement.value);

    // a way to check if a value is greater than zero and not NaN
    // ⭐ JS considers NaN to be of type number
    if (cost > 0 && cost.toString() != 'NaN') {
        if (cost < 40) {
            cost += 10;
        }

        let displayCost = document.getElementById('js-cost-total'); 
        displayCost.innerHTML = `Your total cost is \$${cost}`;

    } else if (cost.toString() === 'NaN') {
        console.log('not a number');
    }

}
